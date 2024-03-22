export class RegistrationPage {
    signInButton = '//button[text()="Sign In"]'
    registrationButton = '//button[text()="Registration"]'
    inputNameField = 'input#signupName'
    inputLastNameField = 'input#signupLastName'
    inputEmail = 'input#signupEmail'
    inputPassword = 'input#signupPassword'
    inputReEnterPassword = 'input#signupRepeatPassword'
    finalRegisterButton = '//button[text()="Register"]'
    garageHeader = 'div.panel-page h1'
    invalidCredsMessage = 'div.invalid-feedback p'
    logoutButton = 'a.btn.btn-link.text-danger.btn-sidebar.sidebar_btn'

    clickSignInButton() {
        cy.xpath(this.signInButton).click()
    }

    clickRegistrationButton() {
        cy.xpath(this.registrationButton).click()
    }

    setName(name) {
        cy.get(this.inputNameField).type(name)
    }

    setLastName(last_name) {
        cy.get(this.inputLastNameField).type(last_name)
    }

    setEmail(email) {
        cy.get(this.inputEmail).type(email)
    }

    setPassword(password) {
        cy.get(this.inputPassword).type(password)
    }

    setReEnterPassword(re_enter_password) {
        cy.get(this.inputReEnterPassword).type(re_enter_password)
    }

    clickfinalRegisterButton() {
        cy.xpath(this.finalRegisterButton).click({force: true})
    }

    clickLogoutButton() {
        cy.get(this.logoutButton).click()
    }
}