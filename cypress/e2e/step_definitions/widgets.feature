Feature: Widgets - Progress Bar 

  Scenario: Visiting the frontpage demoqa - Widgets
    Given I visit demoqa.com
    When I choose the Widgets option on the home page
    When I choose the Sub menu Progress Bar
    When I click button startStop 
    When pause the progression bar before "25%"