import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ApiPage from '../../../support/pages/06-api.page.js'

Given("create a user", () => {
    ApiPage.createUser()
});

When("generate token", () => {
    ApiPage.generateToken()
});

When("confirm create user", () => {
  ApiPage.validAuthentication()
});

When("list available books", () => {
  ApiPage.listBookAndStoreTwo()
});

When("rent two books", () => {
  ApiPage.rentTwoBooks()
});

Then("list the details of books purchased by the user", () => {
  ApiPage.MustListRentalDetails()
});