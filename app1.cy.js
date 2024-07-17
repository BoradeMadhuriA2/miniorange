// <reference types="cypress" />
import Login from '../support/PageObjects/Login'
describe('Verify Login functionality ', () => {
    it('Verify SSO testcase login app1', () => {
        const login = new Login();
        cy.visit("https://wpprod2.shanekatear.in/");
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        login.MOTestbutton().click();
        cy.origin('https://sunny.xecurify.com', () => {
            cy.fixture('data.json').then((data) => {
                cy.get("#userName").type(data.username);
                  cy.get('#loginbutton').click();
              cy.get('input[id="plaintextPassword"]').type(data.password);
              })
            cy.get('#loginbutton').click();
        })
        login.getLoginuserText().should('contain', 'autotestdemo@xecurify.com')
        cy.visit("https://monext.shanekatear.in");
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        login.loginviaminiOrangeButton().click();
        login.miniOrangeDashboard().should('be.visible');
    })
})
