package steps;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;

public class validarCurriculoSteps {

	private WebDriver driver;
	private WebDriverWait wait; 
	
	@Before
	public void acessoInicial() {
		acessarPagina();
		wait = new WebDriverWait(driver, 5);
	}

	@After
	public void fecharPagina() {
		driverClose();
	}

	@Dado("^que acesso minha conta com \"([^\"]*)\" e (\\d+)$")
	public void queAcessoMinhaContaComE(String login, String senha) throws Throwable {
		fazerLogin(login, senha);
	}

	@Dado("^acesso a area da funcionalidade de atualizar curriculo$")
	public void acessoAAreaAFuncionalidadeDeAtualizarCurriculo() throws Throwable {
		verificaLogadao();
		acessaAtualizarCurriculo();
	}

	@Dado("^que edito dados pessoais (\\d+)/(\\d+)/(\\d+) \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
	public void queEditoDadosPessoais(int dia, int mes, int ano, String genero, String estadoCivil, int filhos)
			throws Throwable {
		abrirEditarDadosPessoais();
		esperaAbrirParaEdicao();

		alteraDataNascimento(dia, mes, ano);
		alteraEstadoCivil(estadoCivil);
		alterarGenero(genero);
		alteraFilhos(filhos);
	}

	@Então("^alteracao eh realizada com sucesso$")
	public void alteracaoEhRealizadaComSucesso() throws Throwable {
		salvarEdicao();
		verificaMensagemComSucesso();
	}

	@Dado("^que edito documentos pessoais País de Nacionalidade \"([^\"]*)\" e Documento \"([^\"]*)\"$")
	public void queEditoDocumentosPessoaisPaísDeNacionalidadeEDocumento(String nascionalidade, String documentos)
			throws Throwable {
		abrirEditarDadosPessoais();
		esperaAbrirParaEdicao();
		alterarDocumentos(nascionalidade, documentos);
		alterarTipoDocumento();
	}

	@Dado("^que alterei o CPF de forma correta \"([^\"]*)\"$")
	public void queAltereiOCPFDeFormaCorreta(String cpf) throws Throwable {
		abrirEditarDadosPessoais();
		esperaAbrirParaEdicao();
		alterarDocumentos("Brasil", "Brasil");
		alterarCPF(cpf);
	}
	
	private void alterarTipoDocumento() {
		String tipos = driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id")).getText();
		String[] fn = tipos.split("\n"); 
		
		new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id"))).selectByVisibleText(fn[1]);
	}
	
	private void alterarCPF(String cpf) {
		driver.findElement(By.id("dados_pessoais_documentos_attributes_0_numero")).click();
		driver.findElement(By.id("dados_pessoais_documentos_attributes_0_numero")).clear();
		driver.findElement(By.id("dados_pessoais_documentos_attributes_0_numero")).sendKeys(cpf);
	}

	private void acessarPagina() {
		System.setProperty("webdriver.chrome.driver", "src/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.vagas.com.br/");
		
		if (!driver.getCurrentUrl().contains("vagas.com.br")) {
		    throw new PendingException("não abriu o site correto");
		}
	}
	
	private void fazerLogin(String login, String senha) {
		driver.findElement(By.id("btLogin")).click();
		
		driver.findElement(By.id("login_candidatos_form_usuario")).sendKeys(login);
		driver.findElement(By.id("login_candidatos_form_senha")).sendKeys(senha);		
	    driver.findElement(By.name("commit")).click();
	}
	
	private void alteraDataNascimento(int dia, int mes, int ano) {
		String data = String.format("%02d/%02d/%d", dia, mes, ano);
		               		
	    driver.findElement(By.id("dados_pessoais_data_de_nascimento")).clear();
	    driver.findElement(By.id("dados_pessoais_data_de_nascimento"))
	    	.sendKeys(data);		
	}

	private void alterarGenero(String genero) {
		if (genero.equals("masculino")) {
		    driver.findElement(By.id("dados_pessoais_genero_masculino")).click();
		}
		if (genero.equals("feminino")) {
		    driver.findElement(By.id("dados_pessoais_genero_feminino")).click();			
		}
	}

	private void alteraEstadoCivil(String estadoCivil) {
	    String text = "";
	    	
	    if (estadoCivil.equals("separado")) {
			text = "Separado(a)";
	    }
	    else if (estadoCivil.equals("casado")) {
	    		text = "Casado(a)";
		}  
	    else if (estadoCivil.equals("solteiro")) {
	    	text = "Solteiro(a)";
	    }
	    else if (estadoCivil.equals("divorciado")) {
	    	text = "Divorciado(a)";
	    }
	    else if (estadoCivil.equals("viuvo")) {
	    	text = "Viúvo(a)";
	    } 

	    new Select(driver.findElement(By.id("dados_pessoais_estado_civil")))
    	.selectByVisibleText(text);
	}

	private void alteraFilhos(int filhos) {
		if (filhos != 0) {
		    driver.findElement(By.id("filhos_sim")).click();
		    driver.findElement(By.id("dados_pessoais_filhos")).click();
		    driver.findElement(By.id("dados_pessoais_filhos")).clear();
		    driver.findElement(By.id("dados_pessoais_filhos")).sendKeys(String.format("%d", filhos));
		}
		else {
		    driver.findElement(By.id("filhos_nao")).click();
		}	
	}
	
	private void esperaAbrirParaEdicao() {
	    wait.until(ExpectedConditions.elementToBeClickable(By.className("btn-success")));		
	}
	
	private void salvarEdicao() {
		driver.findElement(By.className("btn-success")).click();
	}	

	private void verificaMensagemComSucesso() {
		assertTrue(driver.findElement(By.className("ico-ok")).isEnabled());
	}

	private void abrirEditarDadosPessoais() {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/dados_pessoais/edit')]")).click();	    		
	}

	private void alterarDocumentos(String nascionalidade, String documentos) {
	    new Select(driver.findElement(By.id("dados_pessoais_pais_de_nacionalidade"))).selectByVisibleText(nascionalidade);
	    new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_pais_id"))).selectByVisibleText(documentos);    
	}

	private void verificaLogadao() {
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("msgLogado")))); 
	}

	private void acessaAtualizarCurriculo() {
		driver.findElement(By.xpath("//nav[@id='menuTopo']/a/span")).click();
	    driver.findElement(By.xpath("//a[contains(text(),'Atualizar currículo')]")).click();				
	}

	private void driverClose() {
		driver.close();		
	}


}
