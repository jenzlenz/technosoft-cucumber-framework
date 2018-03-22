package framework;

import org.openqa.selenium.By;

public class FacebookLoginPage extends BasePage{

	//Locators
	protected By recoverEmailLink = By.linkText("Recover Your Account");
	private By pageHeader = By.xpath("//*[@id='content']/div/div/div[1]/span");

	//Methods
	public String getRecoverAccountLinkText() {
		return getTextFromElement(recoverEmailLink);
	}

	public String getPageHeader() {
		return getTextFromElement(pageHeader);
	}
}
