package steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import pageObject.validarCurriculoPage;

public class DSL {

	private WebDriver driver;
	private WebDriverWait wait;
	private validarCurriculoPage page;


	//construtor
	public DSL(WebDriver driver, WebDriverWait wait) {
		this.driver = driver;
		this.wait = wait;
		page = new validarCurriculoPage();
	}

	public void verificaMessagemDeErro(String elementeCssSelector, String mensagen) {
		String span = page.cSSMensagemDeErro.getAttribute("innerText");
		assertEquals(mensagen, span);
	}

	public void abrirEdicaoEAlterarNome(String nome) {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/nome_completo/edit')]")).click();
		esperaAbrirParaEdicao();
		preencherPorID("curriculo_nome_completo", nome);
	}

	public void editarEnderecoInfomaCombo(String elementID, String campo) {
		String todoCombo = driver.findElement(By.id(elementID)).getText();
		String[] lista = todoCombo.split("\n");

		for (String elementoDoCombo : lista) {
			if (elementoDoCombo.equals(campo)) {
				new Select(driver.findElement(By.id(elementID))).selectByVisibleText(campo);
				break;
			}
		}
		throw new PendingException("campo não encontrado: " + campo);
	}

	public void alterarTipoDocumento() {
		String tipos = driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id")).getText();
		String[] fn = tipos.split("\n");

		new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_tipo_id")))
				.selectByVisibleText(fn[1]);
	}

	public WebDriver fazerLogin(String login, String senha) {
		this.driver.findElement(By.id("btLogin")).click();
		preencherPorID("login_candidatos_form_usuario", login);
		preencherPorID("login_candidatos_form_senha", senha);
		this.driver.findElement(By.name("commit")).click();
		return driver;
	}

	public void alteraDataNascimento(int dia, int mes, int ano) {
		String data = String.format("%02d/%02d/%d", dia, mes, ano);
		preencherPorID("dados_pessoais_data_de_nascimento", data);
	}

	public void alterarGenero(String genero) {
		if (genero.equals("masculino")) {
			driver.findElement(By.id("dados_pessoais_genero_masculino")).click();
		}
		if (genero.equals("feminino")) {
			driver.findElement(By.id("dados_pessoais_genero_feminino")).click();
		}
	}

	public void preencherPorID(String elementID, String descricao) {
		driver.findElement(By.id(elementID)).click();
		driver.findElement(By.id(elementID)).clear();
		driver.findElement(By.id(elementID)).sendKeys(descricao);
	}

	public void alteraEstadoCivil(String estadoCivil) {
		String text = "";

		if (estadoCivil.equals("separado")) {
			text = "Separado(a)";
		} else if (estadoCivil.equals("casado")) {
			text = "Casado(a)";
		} else if (estadoCivil.equals("solteiro")) {
			text = "Solteiro(a)";
		} else if (estadoCivil.equals("divorciado")) {
			text = "Divorciado(a)";
		} else if (estadoCivil.equals("viuvo")) {
			text = "Viúvo(a)";
		}

		new Select(driver.findElement(By.id("dados_pessoais_estado_civil"))).selectByVisibleText(text);
	}

	public void alteraFilhos(int filhos) {
		if (filhos != 0) {
			driver.findElement(By.id("filhos_sim")).click();
			preencherPorID("dados_pessoais_filhos", String.format("%d", filhos));
		} else {
			driver.findElement(By.id("filhos_nao")).click();
		}
	}

	public void esperaAbrirParaEdicao() {
		wait.until(ExpectedConditions.elementToBeClickable(By.className("btn-success")));
	}

	public void salvarEdicao() {
		driver.findElement(By.className("btn-success")).click();
	}

	public void verificaMensagemComSucesso() {
		assertTrue(driver.findElement(By.className("ico-ok")).isEnabled());
	}

	public void abrirEditarDadosPessoais() {
		driver.findElement(By.xpath("//a[contains(@href, '/servicos/curriculo/dados_pessoais/edit')]")).click();
	}

	public void alterarDocumentos(String nascionalidade, String documentos) {
		new Select(driver.findElement(By.id("dados_pessoais_pais_de_nacionalidade")))
				.selectByVisibleText(nascionalidade);
		new Select(driver.findElement(By.id("dados_pessoais_documentos_attributes_0_pais_id")))
				.selectByVisibleText(documentos);
	}

	public void verificaLogadao() {
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("msgLogado"))));
	}

	public void acessaAtualizarCurriculo() {
		driver.findElement(By.xpath("//nav[@id='menuTopo']/a/span")).click();
		driver.findElement(By.xpath("//a[contains(text(),'Atualizar currículo')]")).click();
	}

	public void esperarTelaDisponivelParaIterecao() {
		wait.until(ExpectedConditions.elementToBeClickable(
				By.xpath("//a[contains(@href, '/servicos/curriculo/informacoes_de_contato/edit')]")));
	}

	public void alterarFoto(String foto) throws IOException {
		
	
		page.elementAlterarFoto.click();
		
		driver.findElement(By.id("photo"));

		String caminho1 = System.getProperty("user.dir") + "\\image\\" + foto;
		String caminho2 = new File("image/" + foto).getCanonicalPath();
		// duas formas de pegar o caminho relativo de um arquivo e transformar em absoluto
				
		System.out.println(caminho1); 
		System.out.println(caminho2);

		page.candidato_imagem.sendKeys(caminho1);
		
	}


	
}
