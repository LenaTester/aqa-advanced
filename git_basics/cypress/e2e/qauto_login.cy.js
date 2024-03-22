import { LoginPage } from "../pages/LoginPage"
import { GaragePage } from "../pages/GaragePage"

describe('login', () => {

  beforeEach(() => {
    cy.login()
    })

  it('successful login', () => {

    cy.fixture("login").then((userdata) => {

    const login_page = new LoginPage()
    login_page.clickSignInButton()
    login_page.setEmail(userdata.email)
    login_page.setPassword(userdata.password)
    login_page.clickLoginButton()
    cy.get(login_page.garageHeader).should('have.text', 'Garage')
  })
})

it('login and delete user', () => {

  cy.fixture("login").then((userdata) => {

    const login_page = new LoginPage()
    login_page.clickSignInButton()
    login_page.setEmail(userdata.email)
    login_page.setPassword(userdata.password)
    login_page.clickLoginButton()
  })

  const garage_page = new GaragePage()
  garage_page.clickMyProfileButton()
  garage_page.clickSettingsOption()
  garage_page.clickremoveAccountButton()
  garage_page.clickfinalRemoveButton()
  cy.get(garage_page.startPageHeader).should('have.text', 'Do more!')
})

})