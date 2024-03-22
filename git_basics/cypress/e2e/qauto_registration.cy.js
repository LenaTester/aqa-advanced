import { RegistrationPage } from "../pages/RegistrationPage"

describe('tests for registration on qauto', () => {

    beforeEach(() => {
      cy.login()
      })
  
    it('checks registration creds', () => {

      const reg_page = new RegistrationPage()

      cy.fixture("registration").then((data) => {

        data.forEach((userdata) => {
          reg_page.clickSignInButton()
          reg_page.clickRegistrationButton()
          reg_page.setName(userdata.name)
          reg_page.setLastName(userdata.last_name)
          reg_page.setEmail(userdata.email)
          reg_page.setPassword(userdata.password)
          reg_page.setReEnterPassword(userdata.re_enter_password)
          reg_page.clickfinalRegisterButton()

        // correct creds - successful login
        if (userdata.name == 'John' && userdata.last_name == 'Andersen') {
          cy.get(reg_page.garageHeader).should('have.text', 'Garage')
          reg_page.clickLogoutButton()
        } 

        // incorrect name - invalid creds message shows
        if (userdata.name == 'Jane_123' && userdata.last_name == 'Williams') {
          cy.get(reg_page.invalidCredsMessage).should('have.text', 'Name is invalid')
          cy.reload()
        }

        // not maching passwords - password error message is shown
        if (userdata.name == 'Robert' && userdata.last_name == 'Miller') {
          cy.get(reg_page.invalidCredsMessage).should('have.text', 'Passwords do not match')
          cy.reload()
        }

    })
  })
  })
  })