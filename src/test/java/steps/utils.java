package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;

public class utils {

//	private WebDriverWait wait = new WebDriverWait(driver, 5); 
	
	public static WebDriver criarDriver() {
		System.setProperty("webdriver.chrome.driver", "src/drivers/chromedriver.exe");
		ChromeDriver driver = new ChromeDriver();
		driver.get("https://www.vagas.com.br/");
		
		if (!driver.getCurrentUrl().contains("vagas.com.br")) {
		    throw new PendingException("não abriu o site correto");
		}
		
		return driver;
	}
	
	
	
	
	
}
