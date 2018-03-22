$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("facebooklogin.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@facebookcreateacct"
    }
  ]
});
formatter.before({
  "duration": 6016250061,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Facebook home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 421205998,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#  #@facebooklogin"
    },
    {
      "line": 8,
      "value": "#  Scenario: Verify Female radio button is Selected"
    },
    {
      "line": 9,
      "value": "#    When I click on the female radio button only if it is not selected"
    },
    {
      "line": 10,
      "value": "#    Then I verify that female radio button has been selected"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#  #@facebooklogin"
    },
    {
      "line": 13,
      "value": "#  Scenario: Verify Invalid Login"
    },
    {
      "line": 14,
      "value": "#    When I enter mohammad@technosoftacademy.io in username text field on home screen"
    },
    {
      "line": 15,
      "value": "#    And I enter test1234 in password text field on home screen"
    },
    {
      "line": 16,
      "value": "#    And I click on login button on home screen"
    },
    {
      "line": 17,
      "value": "#    Then I verify that I am on invalid login page"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#  #@facebooklogin"
    },
    {
      "line": 20,
      "value": "#  Scenario: Verify Invalid Login two"
    },
    {
      "line": 21,
      "value": "#    When I enter chris@technosoftacademy.io in username text field on home screen"
    },
    {
      "line": 22,
      "value": "#    And I enter abc1234 in password text field on home screen"
    },
    {
      "line": 23,
      "value": "#    And I click on login button on home screen"
    },
    {
      "line": 24,
      "value": "#    Then I verify that I am on invalid login page"
    },
    {
      "line": 25,
      "value": "#"
    },
    {
      "line": 26,
      "value": "#  #@facebooklogin"
    },
    {
      "line": 27,
      "value": "#  Scenario Outline: Verify Invalid Login for multiple users"
    },
    {
      "line": 28,
      "value": "#    When I enter \u003cusername\u003e in username text field on home screen"
    },
    {
      "line": 29,
      "value": "#    And I enter \u003cpassword\u003e in password text field on home screen"
    },
    {
      "line": 30,
      "value": "#    And I click on login button on home screen"
    },
    {
      "line": 31,
      "value": "#    Then I verify that I am on invalid login page"
    },
    {
      "line": 32,
      "value": "#"
    },
    {
      "line": 33,
      "value": "#    Examples:"
    },
    {
      "line": 34,
      "value": "#      | username                      | password |"
    },
    {
      "line": 35,
      "value": "#      | mohammad@technosoftacademy.io | test1234 |"
    },
    {
      "line": 36,
      "value": "#      | chris@technosoftacademy.io    | abc123   |"
    },
    {
      "line": 37,
      "value": "#"
    },
    {
      "line": 38,
      "value": "#  #@facebooklogin"
    },
    {
      "line": 39,
      "value": "#  Scenario: Verify Invalid Email Message is Displayed"
    },
    {
      "line": 40,
      "value": "#    When I enter incorrectemail%gmail.com in username text field on home screen"
    },
    {
      "line": 41,
      "value": "#    And I enter abc1234 in password text field on home screen"
    },
    {
      "line": 42,
      "value": "#    And I click on login button on home screen"
    },
    {
      "line": 43,
      "value": "#    Then I verify that invalid email message is displayed"
    },
    {
      "line": 44,
      "value": "#"
    },
    {
      "line": 45,
      "value": "#  #@facebooklogin"
    },
    {
      "line": 46,
      "value": "#  Scenario: Verify Recover Your Account Button is Displayed"
    },
    {
      "line": 47,
      "value": "#    When I enter jenzlenz@gmail.com in username text field on home screen"
    },
    {
      "line": 48,
      "value": "#    And I enter WrongPassword in password text field on home screen"
    },
    {
      "line": 49,
      "value": "#    And I click on login button on home screen"
    },
    {
      "line": 50,
      "value": "#    Then I verify that Recover Your Account Button is displayed"
    }
  ],
  "line": 53,
  "name": "Verify invalid signup",
  "description": "",
  "id": "login-feature;verify-invalid-signup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@facebookcreateacct"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I enter mohammad in firstname text field on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I enter muntakim in lastname text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter 888888 in mobile number text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter test1234 in new password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on create account button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify invalid signup error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mohammad",
      "offset": 8
    },
    {
      "val": "firstname",
      "offset": 20
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "duration": 10077851745,
  "error_message": "java.lang.AssertionError: Element is not found with this locator: By.id: firstName\n\tat org.testng.Assert.fail(Assert.java:93)\n\tat framework.BasePage.sendText(BasePage.java:30)\n\tat framework.FacebookHomePage.enterFirstName(FacebookHomePage.java:40)\n\tat stepdefinition.FacebookLoginSD.enterDataIntoTextFields(FacebookLoginSD.java:32)\n\tat ✽.When I enter mohammad in firstname text field on home screen(facebooklogin.feature:54)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "muntakim",
      "offset": 8
    },
    {
      "val": "lastname",
      "offset": 20
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "888888",
      "offset": 8
    },
    {
      "val": "mobile number",
      "offset": 18
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 8
    },
    {
      "val": "new password",
      "offset": 20
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "create account",
      "offset": 11
    }
  ],
  "location": "FacebookLoginSD.clickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FacebookLoginSD.verifySignUpErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 131705707,
  "status": "passed"
});
formatter.before({
  "duration": 2701173676,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Facebook home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 7321002,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Verify Invalid Mobile Number Error Message is Displayed",
  "description": "",
  "id": "login-feature;verify-invalid-mobile-number-error-message-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@facebookcreateacct"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "I enter Jennifer in first name text field on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I enter Dooley in last name text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I enter 111AAA3333 in mobile number text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter newPass1234 in password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I select 5 from birthday month dropdown on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I select 6 from birthday day dropdown on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I select 1976 from birthday year dropdown on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I select female gender radio button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on create account button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I verify that Invalid Mobile Number message is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "111AAA3333",
      "offset": 8
    },
    {
      "val": "mobile number",
      "offset": 22
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "newPass1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "create account",
      "offset": 11
    }
  ],
  "location": "FacebookLoginSD.clickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 273387160,
  "status": "passed"
});
formatter.before({
  "duration": 3210614436,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Facebook home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookLoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 8366687,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Verify Missing Gender Selection Error Message is Displayed",
  "description": "",
  "id": "login-feature;verify-missing-gender-selection-error-message-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@facebookcreateacct"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I enter Jennifer in first name text field on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I enter Dooley in last name text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter 1112223333 in mobile number text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I enter newPass1234 in password text field on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I select 5 from birthday month dropdown on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I select 6 from birthday day dropdown on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I select 1976 from birthday year dropdown on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click on create account button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I verify that Gender Selection Missing Error Message is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1112223333",
      "offset": 8
    },
    {
      "val": "mobile number",
      "offset": 22
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "newPass1234",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "FacebookLoginSD.enterDataIntoTextFields(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "create account",
      "offset": 11
    }
  ],
  "location": "FacebookLoginSD.clickOnButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 107958131,
  "status": "passed"
});
});