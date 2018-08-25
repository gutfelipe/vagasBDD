package steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class validarCurriculoSteps {
	
	private WebDriver driver;
//	private WebDriverWait wait = new WebDriverWait(driver, 1);

	
	@Before
	public void acessoInicial() {
		acessarPagina();
	}

	@Dado("^que acesso minha conta com \"([^\"]*)\" e (\\d+)$")
	public void queAcessoMinhaContaComE(String login, String senha) throws Throwable {
		fazerLogin(login, senha);
	}
	
	@Dado("^acesso a area a funcionalidade de atualizar curriculo$")
	public void acessoAAreaAFuncionalidadeDeAtualizarCurriculo() throws Throwable {
//		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id("msgLogado")))); 
		driver.findElement(By.id("menuTopo")).click();
	}


	@Quando("^adiciono a conta$")
	public void adicionoAConta() throws Throwable {
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
