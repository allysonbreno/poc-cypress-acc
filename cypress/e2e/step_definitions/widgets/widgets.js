import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import WidgetsPage from '../../../support/pages/04-widgets.page.js'

Given("I visit demoqa.com", () => {
  cy.visit(Cypress.env('DEMOQA'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
});

When("I choose the Widgets option on the home page", () => {
    WidgetsPage.clickWidgetsOpt()
});
  
When("I choose the Sub menu Progress Bar", () => {
    WidgetsPage.clickSubMenuProgressBar()
});

When("I click button startStop", () => {
    WidgetsPage.clickBtnStartAndStop()
});

When("pause the progression bar before {string}", (percent) => {
    WidgetsPage.validateProgressBar(percent)
});



