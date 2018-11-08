package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class validarCurriculoPage {


	@FindBy(css = "elementeCssSelector")
	public WebElement cSSMensagemDeErro;

	@FindBy(className = "cv-header__photo")
	public WebElement elementAlterarFoto;

	@FindBy(id = "candidato_imagem")
	public WebElement candidato_imagem;

	@FindBy(id = "photo")
	public WebElement photo;
	
}
