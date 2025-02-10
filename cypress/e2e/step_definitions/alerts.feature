Feature: Validate new windows

  Scenario: Visiting the frontpage demoqa - Alerts, Frame & Windows
    Given I visit demoqa.com
    When I choose the Alerts option on the home page
    When I choose the Sub menu Browser Windows
    When I click the button New Window
    Then validate New Window and close

    