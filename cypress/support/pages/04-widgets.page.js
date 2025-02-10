/// <reference types="cypress" />

const widgetsElement = require('../elements/04-widgets_elements.js').widgets_Element

class WidgetsPage {
    clickWidgetsOpt(){ 
        cy.get(widgetsElement.option_menu).contains('Widgets')
        .should('be.visible')
        .click()

        cy.get(widgetsElement.opt_btn_progress_bar).contains('Progress Bar')
        .should('be.visible')
    }

    clickSubMenuProgressBar(){
        cy.get(widgetsElement.opt_btn_progress_bar).contains('Progress Bar')
        .should('be.visible')
        .click()
    }

    clickBtnStartAndStop(){ 
        cy.get(widgetsElement.button_start_stop).should('be.visible')
        .click()
    }

    validateProgressBar(percent){ 
        const checkProgress = () => {
            cy.wait(1000);
            
            cy.get(widgetsElement.progress_bar).should('be.visible')
                .invoke('text')
                .then((texto) => {
                    const percentFinal = parseInt(texto.replace('%', ''), 10);
                    const percentLimit = parseInt(percent.replace('%', ''), 10);
    
                    if (percentFinal <= percentLimit) {
                        cy.get(widgetsElement.button_start_stop)
                            .should('be.visible')
                            .click()
                            .contains('Start')
                            .wait(3000)
                            .click()

                            checkProgressFinal()
                        return;
                    } else {
                        checkProgress();
                    }
                });
        };
        //recursive loop
        checkProgress();

        const checkProgressFinal = () => {
            cy.wait(1000);
            
            cy.get(widgetsElement.progress_bar).should('be.visible')
                .invoke('text')
                .then((texto) => {
                    const percentFinal = parseInt(texto.replace('%', ''), 10);
    
                    if (percentFinal === 100) {
                        cy.get(widgetsElement.button_reset)
                            .should('be.visible')
                            .contains('Reset')
                            .click()
                        return;
                    } else {
                        checkProgressFinal();
                    }
                });
        };

        cy.get(widgetsElement.button_start_stop).should('be.visible')
        .contains('Start')
    }
    
}

export default new WidgetsPage();
