package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

import steps.DSL;

public class validarCurriculoPage {

	private DSL dsl;
	
	//construtor
	public validarCurriculoPage(WebDriver drive, WebDriverWait wait ) {
		this.dsl = new DSL(drive, wait);
	}
	
	@FindBy(css = "elementeCssSelector")
	WebElement cSSMensagemDeErro;

	@FindBy(name = "password")
	WebElement passwordField;

	@FindBy(name = "commit")
	WebElement commitButton;
	
	
	
}
