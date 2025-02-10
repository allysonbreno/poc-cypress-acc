import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ElementsPage from '../../../support/pages/03-elements.page.js'

Given("I visit demoqa.com", () => {
  cy.visit(Cypress.env('DEMOQA'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
});

When("I choose the Elements option on the home page", () => {
  ElementsPage.clickElementsOpt()
});

When("I choose the Sub menu Web tables", () => {
  ElementsPage.clickWebTablesMenu()
});

When("I create {int} itens", (quantity) => {
  ElementsPage.createRegister(quantity)
});

When("I {string} itens", (option) => {
  ElementsPage.customerRegister(option)
});








