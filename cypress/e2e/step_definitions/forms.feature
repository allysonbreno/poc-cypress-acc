Feature: Fill out form

  Scenario: Visiting the frontpage demoqa - FORMS
    Given I visit demoqa.com
    When I choose the Forms option on the home page
    When I choose the Sub menu Practice Forms
    When I fill out form
    Then I validate that the confirmation modal has opened and I close it