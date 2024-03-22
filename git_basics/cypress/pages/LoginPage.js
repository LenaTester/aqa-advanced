export class LoginPage {
    signInButton = '//button[text()="Sign In"]'
    inputEmail = 'input#signinEmail'
    inputPassword = 'input#signinPassword'
    loginButton = '//button[text()="Login"]'
    garageHeader = 'div.panel-page h1'

    clickSignInButton() {
        cy.xpath(this.signInButton).click()
    }

    setEmail(email) {
        cy.get(this.inputEmail).type(email)
    }

    setPassword(password) {
        cy.get(this.inputPassword).type(password)
    }

    clickLoginButton() {
        cy.xpath(this.loginButton).click()
    }

}