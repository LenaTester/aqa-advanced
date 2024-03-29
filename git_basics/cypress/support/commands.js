/// <reference types = 'Cypress' />
/// <reference types = 'cypress-xpath' />

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

import { LoginPage } from "../pages/LoginPage"

import today from '../today';

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
  cy.wait(1000)
  cy.getCookie('sid')

})

Cypress.Commands.add('creation_expense_api', () => {
  //receiving created car id
  cy.fixture("carData").then((cardata) => {
    const newCarId = cardata.id
  //posting car expenses for new car
  cy.request({method:'POST', 
  url: '/api/expenses', 
  body: {
    "carId": newCarId,
    "reportedAt": today[0],
    "mileage": 1000,
    "liters": 100,
    "totalCost": 100,
    "forceMileage": false
  }
  })
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

