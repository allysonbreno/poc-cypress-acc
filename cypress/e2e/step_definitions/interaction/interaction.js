import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import InteractionsPage from '../../../support/pages/05-interactions.page.js'

Given("I visit demoqa.com", () => {
  cy.visit(Cypress.env('DEMOQA'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
        // cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
});

When("I choose the Interaction option on the home page", () => {
  InteractionsPage.clickInteractionsOpt()
});
  
When("I choose the Sub menu Sortable", () => {
  InteractionsPage.clickMenuSortable()
});

Then("I order the bars in ascending order", () => {
  InteractionsPage.orderBarsCrescent()
});
  






