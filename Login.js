class Login {
    getUserName(userName) {
        return cy.get("#userName").type(userName);
    }
    MOTestbutton() {
        return cy.get('input[value="MO_Prod as SAML IdP"]');
    }
    getPassword(){
        return cy.get('input[id="plaintextPassword"]')
    }
    getLoginUserName(){
        return cy.get("#userName");
    }
    getLoginButton() {
        return cy.get('#loginbutton');
    }
    getLoginuserText() {
        return cy.get('div[class="widget widget_saml_login_widget"]');
    }

    loginviaminiOrangeButton() {
        return cy.contains('Login via miniOrange');
    }

    miniOrangeDashboard() {
        return cy.get('main[class="app-dashboard"]');
    }
    
}

export default Login
    