// <reference types="cypress" />
import Login from "../support/PageObjects/Login";
describe('2FA Login Test', () => {
  it('should login using 2FA', () => {
    const login = new Login();
    cy.visit("https://monext.shanekatear.in");
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    login.loginviaminiOrangeButton().click();
    cy.origin('https://sunny.xecurify.com', () => {
      const secret = 'FT7E IMYJ 57NJ 7PB4';
      cy.fixture('data.json').then((data) => {
        cy.get("#userName").type(data.username);
          cy.get('#loginbutton').click();
      cy.get('input[id="plaintextPassword"]').type(data.password);
      })
      cy.get('#loginbutton').click();
      cy.get('ul[class="nav nav-sidebar"]').find('li[id="mobile-token-selector"]').click();
      cy.task('generateOTP', secret).then((otp) => {
        cy.get('div[id="div-google-authenticator-btn"]').click();
        cy.get('input[id="otpToken"]').type(otp);
        cy.get('input#validate').first().click();
      })
      login.miniOrangeDashboard().should('be.visible');
    })

  });
});