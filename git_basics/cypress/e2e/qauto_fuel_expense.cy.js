import { GaragePage } from "../pages/GaragePage"
import { FuelExpensePage } from "../pages/FuelExpensePage"
import today from "../today"

describe('adding fuel expenses', () => {

  beforeEach(() => {
    cy.login_basic_auth()
    cy.login_user1()

  })

  it.skip('adding fuel expense', () => {
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

  it('adding fuel expense through API', () => {
    //using custom command for adding expenses for car
    cy.creation_expense_api()
    .then((response) => {

      //checking response status
      cy.wrap(response.status).as('responseStatus')
      cy.get('@responseStatus').should('eq', 200)

      //getting expense data
      cy.wrap(response.body.data).as('responseBodyCarExpense')
      cy.get('@responseBodyCarExpense').then((carExpense) => {
        cy.writeFile('cypress/fixtures/carExpense.json', carExpense)
      })

      //checking, that received expense data is correct
      cy.fixture("carExpense").then((carexpense) => {
        const newExpense = carexpense
        cy.fixture("carData").then((cardata) => {
          const newCarData = cardata
      expect(`${newExpense.carId}, ${newExpense.reportedAt}, ${newExpense.liters}, ${newExpense.mileage}, ${newExpense.totalCost}`)
      .to.equal(`${newCarData.id}, ${today[0]}, 100, 1000, 100`)
      })
    })
  })
  })

  it('UI check for fuel expense, added by API', () => {
    //navigation to Fuel Expenses page through UI
    const garage_page = new GaragePage()
    garage_page.clickFuelExpenseLink()
    const fuel_expense_page = new FuelExpensePage()

    //checking, that UI car expense correspond to car expense, created by API
    cy.fixture("carExpense").then((carexpense) => {
      const newExpense = carexpense
      cy.get(fuel_expense_page.expenseTable).find('>td').first().should('have.text', today[1])
      cy.get(fuel_expense_page.expenseTable).find('>td').eq(1).should('have.text', newExpense.mileage)
      cy.get(fuel_expense_page.expenseTable).find('>td').eq(2)
      .should('have.text', `${newExpense.liters}L`)
      cy.get(fuel_expense_page.expenseTable).find('>td').eq(3)
      .should('have.text', `${newExpense.totalCost}.00 USD`)
    })
  })
})