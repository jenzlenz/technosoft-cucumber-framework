package framework;

import org.openqa.selenium.By;
import ru.yandex.qatools.allure.annotations.Step;

public class FacebookHomePage extends BasePage{

	private By emailTextField = By.id("email");
	private By passwordTextField = By.id("pass");
	private By loginButton = By.id("loginbutton");
	private By firstNameTextField = By.id("firstName");
	private By lastNameTextField = By.id("lastName");
	private By mobileNumberTextField = By.id("mobileNumber");
	private By newPasswordTextField = By.id("newPwd");
	private By errorMessage = By.id("errorMessage");
	private By createAccountButton = By.name("websubmit");
	private By birthdayMonthDropdown = By.name("birthday_month");
	private By birthdayDayDropdown = By.name("birthday_day");
	private By birthdayYearDropdown = By.name("birthday_year");
	private By femaleRadioButton = By.id("u_0_b");
	private By maleRadioButton = By.id("u_0_c");
	
	public void clickOnLoginButton() {
		clickOn(loginButton);
	}

	public void clickOnCreateAccountButton() {
		clickOn(createAccountButton);
	}

	public void enterEmail(String enterEmail) {
		sendText(emailTextField, enterEmail);
	}
	
	public void enterPassword(String enterPassword) {
		sendText(passwordTextField, enterPassword);
	}

	public void enterFirstName(String firstName) {
		sendText(firstNameTextField, firstName);
	}

	public void enterLastName(String lastName) {
		sendText(lastNameTextField, lastName);
	}

	public void enterMobileNumber(String mobileNum) {
		sendText(mobileNumberTextField, mobileNum);
	}

	public void enterNewPassword(String password) {
		sendText(newPasswordTextField, password);
	}

	public String getErrorMessage() {
		return getTextFromElement(errorMessage);
	}

	//Overloaded dropdown methods begin
	public void selectBirthdayMonth(String monthToSelect) { selectFromDropdown(birthdayMonthDropdown, monthToSelect); }

	public void selectBirthdayMonth(int monthToSelect) { selectFromDropdown(birthdayMonthDropdown, monthToSelect); }

	public void selectBirthdayDay(String dayToSelect) { selectFromDropdown(birthdayDayDropdown, dayToSelect); }

	public void selectBirthdayDay(int dayToSelect) { selectFromDropdown(birthdayDayDropdown, dayToSelect); }

	public void selectBirthdayYear(String yearToSelect) { selectFromDropdown(birthdayYearDropdown, yearToSelect); }

	public void selectBirthdayYear(int yearToSelect) { selectFromDropdown(birthdayYearDropdown, yearToSelect); }
	//overloaded dropdown methods end

	public void selectGender(String gender) {
		if (gender == "female")
			clickOn(femaleRadioButton);
		else if (gender == "male")
			clickOn(maleRadioButton);
	}

	public boolean isFemaleSelected(){ return isLocatorSelected(femaleRadioButton); }

	public boolean isMaleSelected(){ return isLocatorSelected(maleRadioButton); }
}
