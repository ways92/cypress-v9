Feature: Login feature
  Scenario: Login test with cucumber
    Given I navigate to login page
    When I enter username
    And  I enter password
    And  I click login button
    Then I verify login