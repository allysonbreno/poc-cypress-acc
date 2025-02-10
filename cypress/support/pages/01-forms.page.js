/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const formsElement = require('../elements/01-forms_elements.js').formsElement
const practice_form_text = "Practice Form"

class FormPage { 
    clickFormOpt(){ 
        cy.get(formsElement.option_menu).contains('Forms')
        .should('be.visible')
        .click()

        cy.get(formsElement.opt_btn_practice_form).contains(practice_form_text)
        .should('be.visible')
    }

    clickPracticeForm(){ 
        cy.get(formsElement.opt_btn_practice_form).contains(practice_form_text)
        .should('be.visible')
        .click()

        cy.get(formsElement.title_practice_form).contains(practice_form_text)
        .should('be.visible')
    }

    fillOutForm(){ 
        const radios = [formsElement.radio_button_gender_1, formsElement.radio_button_gender_2, formsElement.radio_button_gender_3]
        const check_hobbies = [formsElement.check_box_hobbies_1, formsElement.check_box_hobbies_2, formsElement.check_box_hobbies_3]
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const subjectInitials = ["M", "S", "H", "G", "P", "C", "B", "E", "A", "L", "T"];

        const year_select_string = Math.floor(Math.random() * (2025 - 1950 + 1)) + 1950
        const randomNum = Math.floor(Math.random() * 28) + 1 

        const data_day = formsElement.data_day_element + randomNum.toString().padStart(3, '0')

        cy.get(formsElement.input_first_name).should('be.visible')
        .type(faker.person.firstName())
        cy.get(formsElement.input_last_name).should('be.visible')
        .type(faker.person.lastName())
        cy.get(formsElement.input_email).should('be.visible')
        .type(faker.internet.email())

        cy.get(radios[Math.floor(Math.random() * 3)]).should('be.visible')
        .click()

        cy.get(formsElement.input_phone).should('be.visible')
        .type(faker.string.numeric(10))
        
        cy.get(formsElement.input_date_of_birth).should('be.visible')
        .click()

        cy.get(formsElement.months_select).should('be.visible')
        .select(months[Math.floor(Math.random() * 12)])

        cy.get(formsElement.year_select).should('be.visible')
        .select(year_select_string.toString())

        cy.get(data_day).then($elements => {
            if ($elements.length > 0) {
              const randomIndex = Math.floor(Math.random() * $elements.length);
              cy.wrap($elements[randomIndex]).click();
            }
        });

        cy.get(formsElement.input_subjects).should('be.visible')
        .type(faker.helpers.arrayElement(subjectInitials))

        cy.get(formsElement.input_auto_subjects).should('be.visible')
        .click()

        cy.get(check_hobbies[Math.floor(Math.random() * 3)]).should('be.visible')
        .click()

        cy.get(formsElement.button_upload).should('be.visible')
        .attachFile('picture.txt')

        cy.get(formsElement.input_current_address).should('be.visible')
        .type(faker.location.streetAddress({useFullAddress: true}))

        const estateArray = [formsElement.estate_ncr, formsElement.estate_uttar_pradesh, formsElement.estate_haryana, formsElement.estate_rajasthan]
        const number_array_estate = Math.floor(Math.random() * 4)
        cy.get(formsElement.estate_select).should('be.visible')
        .click()
        
        cy.get(estateArray[number_array_estate]).should('be.visible')
        .click()
        
        cy.get(formsElement.city_select).should('be.visible')
        .click()

        const citiesArray = [
            formsElement.city_delhi, formsElement.city_gurgaon, formsElement.city_noida, 
            formsElement.city_agra, formsElement.city_lucknow, formsElement.city_merrut, 
            formsElement.city_karnal, formsElement.city_panipat, formsElement.city_jaipur, 
            formsElement.city_jaiselmer
          ];

        switch (number_array_estate) {
        case 0:
            cy.get(citiesArray[Math.floor(Math.random() * 2)]).should('be.visible')
            .click()
            break;
        case 1:
            cy.get(citiesArray[Math.floor(Math.random() * (5 - 3 + 1)) + 3]).should('be.visible')
            .click()
            break;
        case 2:
            cy.get(citiesArray[Math.floor(Math.random() * (7 - 6 + 1)) + 6]).should('be.visible')
            .click()
        break;
        case 3:
            cy.get(citiesArray[Math.floor(Math.random() * (9 - 8 + 1)) + 8]).should('be.visible')
            .click()
        break;
        }

        cy.get(formsElement.button_submit).should('be.visible')
        .click()
    }

    validatePopUpFormConfirmation() { 
        cy.get(formsElement.title_popup_confirmation).should('be.visible')
        .contains('Thanks for submitting the form')

        cy.get(formsElement.button_close_modal)
        .click({force: true})

        cy.get(formsElement.title_popup_confirmation).should('not.exist')
    }
}

export default new FormPage();