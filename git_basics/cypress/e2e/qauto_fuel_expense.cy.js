import { GaragePage } from "../pages/GaragePage"
import { FuelExpensePage } from "../pages/FuelExpensePage"

describe('adding fuel expenses', () => {

  beforeEach(() => {
    cy.login_basic_auth()
    cy.login_user1()

  })

  it('adding fuel expense', () => {
    const garage_page = new GaragePage()
    garage_page.clickAddFuelExpenseButton()
    const fuel_expense_page = new FuelExpensePage()
    const randomNewMileage = Math.floor(Math.random()*10000) + 1000
    fuel_expense_page.inputMileage(randomNewMileage)
    const randomNumberOfLiters = Math.floor(Math.random()*1000) + 1
    fuel_expense_page.inputNumberOfLiters(randomNumberOfLiters)
    const randomExpenses = Math.floor(Math.random()*1000) + 1
    fuel_expense_page.inputTotalExpenses(randomExpenses)
    fuel_expense_page.clickAdd()
    cy.get(fuel_expense_page.fuelExpenceAddedMessage).should('have.text', 'Fuel expense added')
    
  })
})