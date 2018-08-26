package steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class validarCurriculoSteps {
	
	private WebDriver driver;
	private WebDriverWait wait;

	
	@Before
	public void acessoInicial() {
		acessarPagina();
		wait = new WebDriverWait(driver, 1);
	}
	
	@After
	public void fecharPagina() {
		driver.close();
	}

	@Dado("^que acesso minha conta com \"([^\"]*)\" e (\\d+)$")
	public void queAcessoMinhaContaComE(String login, String senha) throws Throwable {
		fazerLogin(login, senha);
	}
	
	@Dado("^acesso a area da funcionalidade de atualizar curriculo$")
	public void acessoAAreaAFuncionalidadeDeAtualizarCurriculo() throws Throwable {
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("msgLogado")))); 
		driver.findElement(By.xpath("//nav[@id='menuTopo']/a/span")).click();
	    driver.findElement(By.xpath("//a[contains(text(),'Atualizar currículo')]")).click();
	}
	
	@Dado("^que edito dados pessoais (\\d+)/(\\d+)/(\\d+) \"([^\"]*)\" \"([^\"]*)\" (\\d+)$")
	public void queEditoDadosPessoais(int dia, int mes, int ano, String genero, String estadoCivil, int filhos) throws Throwable {

		
		// Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Então("^alteracao eh realizada com sucesso$")
	public void alteracaoEhRealizadaComSucesso() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Dado("^que edito documentos pessoais País de Nacionalidade \"([^\"]*)\" e Documento \"([^\"]*)\"$")
	public void queEditoDocumentosPessoaisPaísDeNacionalidadeEDocumento(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Dado("^que alterei o CPF de forma correta \"([^\"]*)\"$")
	public void queAltereiOCPFDeFormaCorreta(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}



	
	
	
	
	
	
	
	
	public void acessarPagina() {
		System.setProperty("webdriver.chrome.driver", "src/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.vagas.com.br/");
		
		if (!driver.getCurrentUrl().contains("vagas.com.br")) {
		    //throw new PendingException();
		}
	}
	
	public void fazerLogin(String login, String senha) {
		driver.findElement(By.id("btLogin")).click();
		
		driver.findElement(By.id("login_candidatos_form_usuario")).sendKeys(login);
		driver.findElement(By.id("login_candidatos_form_senha")).sendKeys(senha);		
	    driver.findElement(By.name("commit")).click();
	}
	

}
