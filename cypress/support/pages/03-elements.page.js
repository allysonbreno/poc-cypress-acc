/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
const webTablesElement =
  require("../elements/03-elements_elements.js").webTableElement;
let email_validation = [];

class ElementsPage {
  clickElementsOpt() {
    cy.get(webTablesElement.option_menu)
      .contains("Elements")
      .should("be.visible")
      .click();

    cy.get(webTablesElement.opt_btn_web_tables)
      .contains("Web Tables")
      .should("be.visible");
  }

  clickWebTablesMenu() {
    cy.get(webTablesElement.opt_btn_web_tables)
      .contains("Web Tables")
      .should("be.visible")
      .click();
  }

  createRegister(quantity) {
    for (let i = 0; i < quantity; i++) {
      cy.get(webTablesElement.button_add).should("be.visible").click();

      cy.get(webTablesElement.input_form_first_name)
        .should("be.visible")
        .type(faker.person.firstName());

      cy.get(webTablesElement.input_form_last_name)
        .should("be.visible")
        .type(faker.person.lastName());

      const email = faker.internet.email();
      email_validation[i] = email;

      cy.get(webTablesElement.input_form_user_email)
        .should("be.visible")
        .type(email);

      cy.get(webTablesElement.input_form_age)
        .should("be.visible")
        .type(faker.number.int({ min: 18, max: 65 }));

      cy.get(webTablesElement.input_form_salary)
        .should("be.visible")
        .type(faker.number.int({ min: 1000, max: 10000 }));

      cy.get(webTablesElement.input_form_department)
        .should("be.visible")
        .type(faker.person.jobArea());

      cy.get(webTablesElement.button_submit).should("be.visible").click();

      cy.get(webTablesElement.input_searchbox)
        .should("be.visible")
        .clear()
        .type(email_validation[i]);

      cy.get(webTablesElement.validation_param_email)
        .should("be.visible")
        .contains(email_validation[i]);
    }
  }

  customerRegister(opt) {
    switch (opt) {
      case "Edit":
        for (let i = 0; i < email_validation.length; i++) {
          cy.get(webTablesElement.input_searchbox)
            .should("be.visible")
            .clear()
            .type(email_validation[i]);

          cy.get(webTablesElement.validation_param_email)
            .should("be.visible")
            .contains(email_validation[i]);

          cy.get(webTablesElement.button_actions)
            .eq(0)
            .should("be.visible")
            .click();

          const email = faker.internet.email();
          email_validation[i] = email;

          cy.get(webTablesElement.input_form_user_email)
            .should("be.visible")
            .clear()
            .type(email);

          cy.get(webTablesElement.button_submit).should("be.visible").click();

          cy.get(webTablesElement.input_searchbox)
            .should("be.visible")
            .clear()
            .type(email_validation[i]);

          cy.get(webTablesElement.validation_param_email)
            .should("be.visible")
            .contains(email_validation[i]);
        }
        break;
      case "Delete":
        for (let i = 0; i < email_validation.length; i++) {
          cy.get(webTablesElement.input_searchbox)
            .should("be.visible")
            .clear()
            .type(email_validation[i]);

          cy.get(webTablesElement.validation_param_email)
            .should("be.visible")
            .contains(email_validation[i]);

          cy.get(webTablesElement.button_actions)
            .eq(1)
            .should("be.visible")
            .click();

          cy.get(webTablesElement.input_searchbox)
            .should("be.visible")
            .clear()
            .type(email_validation[i]);

          cy.get(webTablesElement.validation_param_email).should(
            "not.have.text",
            email_validation[i]
          );
        }
        cy.get(webTablesElement.input_searchbox).should("be.visible").clear();
        email_validation.length = 0;
        break;

      case "Edit and Delete":
        for (let i = 0; i < email_validation.length; i++) {
          cy.get(webTablesElement.input_searchbox)
            .should("be.visible")
            .clear()
            .type(email_validation[i]);

          cy.get(webTablesElement.validation_param_email)
            .should("be.visible")
            .contains(email_validation[i]);

          cy.get(webTablesElement.button_actions)
            .eq(0)
            .should("be.visible")
            .click();

          const email = faker.internet.email();
          email_validation[i] = email;

          cy.get(webTablesElement.input_form_user_email)
            .should("be.visible")
            .clear()
            .type(email);

          cy.get(webTablesElement.button_submit).should("be.visible").click();

          cy.get(webTablesElement.input_searchbox)
            .should("be.visible")
            .clear()
            .type(email_validation[i]);

          cy.get(webTablesElement.validation_param_email)
            .should("be.visible")
            .contains(email_validation[i]);

          cy.get(webTablesElement.button_actions)
            .eq(1)
            .should("be.visible")
            .click();

          cy.get(webTablesElement.input_searchbox)
            .should("be.visible")
            .clear()
            .type(email_validation[i]);

          cy.get(webTablesElement.validation_param_email).should(
            "not.have.text",
            email_validation[i]
          );
        }
        cy.get(webTablesElement.input_searchbox).should("be.visible").clear();
        email_validation.length = 0;
        break;
      default:
        break;
    }
  }
}

export default new ElementsPage();
