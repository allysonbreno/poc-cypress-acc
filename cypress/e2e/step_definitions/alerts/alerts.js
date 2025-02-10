import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import AlertsPage from '../../../support/pages/02-alerts.page.js'

Given("I visit demoqa.com", () => {
  cy.visit(Cypress.env('DEMOQA'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
});

When("I choose the Alerts option on the home page", () => {
  AlertsPage.clickAlertsOpt()
});

When("I choose the Sub menu Browser Windows", () => {
  AlertsPage.clickAlertsBrowserWindows()
});

When("I click the button New Window", () => {
  AlertsPage.clickButtonNewWindow()
});

Then("validate New Window and close", () => {
  AlertsPage.validateNewWindow()
});






