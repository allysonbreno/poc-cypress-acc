Feature: Create table register

  Scenario: Visiting the frontpage demoqa - Elements web tables
    Given I visit demoqa.com
    When I choose the Elements option on the home page
    When I choose the Sub menu Web tables
    When I create 1 itens
    When I "Edit and Delete" itens 
    When I create 12 itens 
    When I "Delete" itens
