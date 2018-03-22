package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.FacebookHomePage;
import framework.FacebookLoginPage;
import org.testng.Assert;
import org.openqa.selenium.By;

public class FacebookLoginSD {

    private FacebookHomePage facebookHomePage = new FacebookHomePage();
    private FacebookLoginPage facebookLoginPage = new FacebookLoginPage();

    @Given("^I am on Facebook home page$")
    public void iAmOnHomePage() {
        Assert.assertEquals(SharedSD.getDriver().getTitle(), "Facebook - Log In or Sign Up", "Invalid Home Page");
    }

    @When("^I enter (.+) in (username|password|firstname|lastname|mobile number|new password) text field on home screen$")
    public void enterDataIntoTextFields(String anyText, String textFields) {

        switch (textFields) {
            case "username":
                facebookHomePage.enterEmail(anyText);
                break;
            case "password":
                facebookHomePage.enterPassword(anyText);
                break;
            case "firstname":
                facebookHomePage.enterFirstName(anyText);
                break;
            case "lastname":
                facebookHomePage.enterLastName(anyText);
                break;
            case "mobile number":
                facebookHomePage.enterMobileNumber(anyText);
                break;
            case "new password":
                facebookHomePage.enterNewPassword(anyText);
                break;
        }
    }

    @When("^I click on (login|create account) button on home screen$")
    public void clickOnButton(String button) {

        switch (button) {
            case "login":
                facebookHomePage.clickOnLoginButton();
                break;
            case "create account":
                facebookHomePage.clickOnCreateAccountButton();
                break;
        }
    }

    @When("^I click on the female radio button only if it is not selected$")
    public void selectGender() {
        boolean femaleRadioButtonSelected = facebookHomePage.isFemaleSelected();
        if(!(femaleRadioButtonSelected))
            facebookHomePage.selectGender("female");
    }

    @Then("^I verify that I am on invalid login page$")
    public void verifyInvalidLoginPage() {
        Assert.assertEquals(facebookLoginPage.getPageHeader(), "Log into Facebook");
    }

//    @Then("^I see number [0-9] in text field$")
//    public void textField(int num) {
//
//    }

    @Then("^I verify that invalid email message is displayed$")
    public void verifyInvalidEmailMsgDisplayed() {
        boolean isMessageDisplayed = SharedSD.getDriver().findElement(By.xpath("//*[@id=\"globalContainer\"]/div[3]/div/div/div")).isDisplayed();
        Assert.assertEquals(isMessageDisplayed, true, "No invalid email message displayed.");
    }

    @Then("^I verify that Recover Your Account Button is displayed$")
    public void verifyRecoverAcctButtonDisplayed() {
        boolean isButtonDisplayed = SharedSD.getDriver().findElement(By.xpath("//*[@id='login_link']/div[2]/a[1]")).isDisplayed();
        Assert.assertEquals(isButtonDisplayed, true, "Recover Your Account button is NOT displayed.");
    }

    @Then("^I verify that female radio button has been selected$")
    public void verifyFemaleIsSelected() {
        boolean femaleRadioButtonSelected = SharedSD.getDriver().findElement(By.id("u_0_b")).isSelected();
        Assert.assertEquals(femaleRadioButtonSelected, true, "Female radio button is NOT selected.");
    }

    @Then("^I verify invalid signup error message$")
    public void verifySignUpErrorMessage() {
        //Assert.assertEquals(FacebookLoginPage.getErrorMessage(), "Invalid signup");
    }

    @Then("^Then I verify that Invalid Mobile Number message is displayed$")
    public void invalidMobileNumberMsgDisplayed() {
        boolean isErrorDisplayed = SharedSD.getDriver().findElement(By.partialLinkText("valid mobile")).isDisplayed();
        Assert.assertEquals(isErrorDisplayed, true, "Invalid Mobile Number error message is NOT displayed.");

    }

    @Then("^Then I verify that Gender Selection Missing Error Message is displayed$")
    public void verifyGenderSelectionMissingErrorMsg() {
        boolean isGenderErrorDisplayed = SharedSD.getDriver().findElement(By.xpath("//*[@id=\'js_1r\']")).isDisplayed();
        Assert.assertEquals(isGenderErrorDisplayed, true, "No error message for missing gender selection.");
    }
}
