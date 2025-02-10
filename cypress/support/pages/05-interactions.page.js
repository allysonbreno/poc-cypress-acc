/// <reference types="cypress" />
import "../commands.js";
const interactionsElement =
  require("../elements/05-interactions_elements.js").interactionsElement;

class InteractionsPage {
  clickInteractionsOpt() {
    cy.get(interactionsElement.option_menu)
      .contains("Interactions")
      .should("be.visible")
      .click({ force: true });

    cy.get(interactionsElement.opt_btn_sortable)
      .contains("Sortable")
      .should("be.visible");
  }

  clickMenuSortable() {
    cy.get(interactionsElement.opt_btn_sortable)
      .contains("Sortable")
      .should("be.visible")
      .click({ force: true });
  }

  orderBarsCrescent() {
    cy.get(interactionsElement.bar_position_six).scrollIntoView();
    cy.wait(2000);

    this.dragCardToPosition(
      interactionsElement.bar_position_one,
      interactionsElement.bar_position_six
    );

    this.dragCardToPosition(
      interactionsElement.bar_position_one,
      interactionsElement.bar_position_five
    );

    this.dragCardToPosition(
      interactionsElement.bar_position_one,
      interactionsElement.bar_position_four
    );

    this.dragCardToPosition(
      interactionsElement.bar_position_one,
      interactionsElement.bar_position_three
    );

    this.dragCardToPosition(
      interactionsElement.bar_position_one,
      interactionsElement.bar_position_two
    );

    const expectedOrder = ["Six", "Five", "Four", "Three", "Two", "One"];
    cy.get(".vertical-list-container > div").each((card, index) => {
      cy.wrap(card)
        .should("be.visible")
        .should("contain.text", expectedOrder[index]);
    });
  }

  dragCardToPosition(cardSelector, positionSelector) {
    cy.get(cardSelector).drag(positionSelector, {
      force: true,
    });
    cy.wait(1000);
    cy.get(positionSelector).should("be.visible").click({ force: true });
  }
}

export default new InteractionsPage();
