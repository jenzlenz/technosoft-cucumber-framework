@regression @facebookcreateacct
Feature: Login feature

  Background:
    Given I am on Facebook home page

#  #@facebooklogin
#  Scenario: Verify Female radio button is Selected
#    When I click on the female radio button only if it is not selected
#    Then I verify that female radio button has been selected
#
#  #@facebooklogin
#  Scenario: Verify Invalid Login
#    When I enter mohammad@technosoftacademy.io in username text field on home screen
#    And I enter test1234 in password text field on home screen
#    And I click on login button on home screen
#    Then I verify that I am on invalid login page
#
#  #@facebooklogin
#  Scenario: Verify Invalid Login two
#    When I enter chris@technosoftacademy.io in username text field on home screen
#    And I enter abc1234 in password text field on home screen
#    And I click on login button on home screen
#    Then I verify that I am on invalid login page
#
#  #@facebooklogin
#  Scenario Outline: Verify Invalid Login for multiple users
#    When I enter <username> in username text field on home screen
#    And I enter <password> in password text field on home screen
#    And I click on login button on home screen
#    Then I verify that I am on invalid login page
#
#    Examples:
#      | username                      | password |
#      | mohammad@technosoftacademy.io | test1234 |
#      | chris@technosoftacademy.io    | abc123   |
#
#  #@facebooklogin
#  Scenario: Verify Invalid Email Message is Displayed
#    When I enter incorrectemail%gmail.com in username text field on home screen
#    And I enter abc1234 in password text field on home screen
#    And I click on login button on home screen
#    Then I verify that invalid email message is displayed
#
#  #@facebooklogin
#  Scenario: Verify Recover Your Account Button is Displayed
#    When I enter jenzlenz@gmail.com in username text field on home screen
#    And I enter WrongPassword in password text field on home screen
#    And I click on login button on home screen
#    Then I verify that Recover Your Account Button is displayed

  @facebookcreateacct
  Scenario: Verify invalid signup
    When I enter mohammad in firstname text field on home screen
    And I enter muntakim in lastname text field on home screen
    And I enter 888888 in mobile number text field on home screen
    And I enter test1234 in new password text field on home screen
    And I click on create account button on home screen
    Then I verify invalid signup error message

  @facebookcreateacct
  Scenario: Verify Invalid Mobile Number Error Message is Displayed
    When I enter Jennifer in first name text field on home screen
    And I enter Dooley in last name text field on home screen
    And I enter 111AAA3333 in mobile number text field on home screen
    And I enter newPass1234 in password text field on home screen
    And I select 5 from birthday month dropdown on home screen
    And I select 6 from birthday day dropdown on home screen
    And I select 1976 from birthday year dropdown on home screen
    And I select female gender radio button on home screen
    And I click on create account button on home screen
    Then I verify that Invalid Mobile Number message is displayed

  @facebookcreateacct
  Scenario: Verify Missing Gender Selection Error Message is Displayed
    When I enter Jennifer in first name text field on home screen
    And I enter Dooley in last name text field on home screen
    And I enter 1112223333 in mobile number text field on home screen
    And I enter newPass1234 in password text field on home screen
    And I select 5 from birthday month dropdown on home screen
    And I select 6 from birthday day dropdown on home screen
    And I select 1976 from birthday year dropdown on home screen
    And I click on create account button on home screen
    Then I verify that Gender Selection Missing Error Message is displayed

