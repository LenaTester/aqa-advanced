/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />
import { LoginPage } from "../pages/LoginPage"

Cypress.Commands.add('login_basic_auth', () => {
  cy.visit(`${Cypress.env('baseUrl')}/panel/garage`, {
    failOnStatusCode: false,
    auth: {
      username: Cypress.env('credentials_basic_auth').username,
      password: Cypress.env('credentials_basic_auth').password,
    }
  })

})

Cypress.Commands.add('login_user1', () => {
  const login_page = new LoginPage()
  login_page.clickSignInButton()
  login_page.setEmail(Cypress.env('credentials_user1').email)
  login_page.setPassword(Cypress.env('credentials_user1').password)
  login_page.clickLoginButton()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

