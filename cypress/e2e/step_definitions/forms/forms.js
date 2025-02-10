import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FormPage from '../../../support/pages/01-forms.page.js'

Given("I visit demoqa.com", () => {
  cy.visit(Cypress.env('DEMOQA'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
});

When("I choose the Forms option on the home page", () => {
  FormPage.clickFormOpt()
});

When("I choose the Sub menu Practice Forms", () => {
  FormPage.clickPracticeForm()
});

When("I fill out form", () => {
  FormPage.fillOutForm()
});

Then("I validate that the confirmation modal has opened and I close it", () => {
  FormPage.validatePopUpFormConfirmation()
});




