Feature: Interactions sortable

  Scenario: Visiting the frontpage demoqa - Interactions sortable
    Given I visit demoqa.com
    When I choose the Interaction option on the home page
    When I choose the Sub menu Sortable
    Then I order the bars in ascending order 