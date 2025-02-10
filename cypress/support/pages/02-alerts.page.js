/// <reference types="cypress" />

const alertsElement = require('../elements/02-alerts_elements.js').alertsElement

class AlertsPage {
    clickAlertsOpt(){ 
        cy.get(alertsElement.option_menu).contains('Alerts, Frame & Windows')
        .should('be.visible')
        .click()

        cy.get(alertsElement.opt_btn_browser_windows).contains('Browser Windows')
        .should('be.visible')
    }

    clickAlertsBrowserWindows(){
        cy.get(alertsElement.opt_btn_browser_windows).contains('Browser Windows')
        .should('be.visible')
        .click()
    }

    clickButtonNewWindow(){ 
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newWindow'); 
        });

        cy.get(alertsElement.button_new_window).should('be.visible')
        .click()
    }

    validateNewWindow() { 
            cy.get('@newWindow').should('be.called').then((stub) => {
            const newUrl = stub.args[0][0]; 
        
            cy.visit(Cypress.env('DEMOQA') + newUrl);
        
            cy.contains('This is a sample page').should('be.visible');
        
            cy.go('back');
    })};
}

export default new AlertsPage();
