import { GaragePage } from "../pages/GaragePage"

describe('adding car tests', () => {

  beforeEach(() => {
    cy.login_basic_auth()
    cy.login_user1()

  })

  it('adding car', () => {
    const garage_page = new GaragePage()
    garage_page.clickAddCarButton()
    cy.get(garage_page.selectBrandDropdownOptions).then(($elements) => {
    const randomOptionBrand = Math.floor(Math.random() * $elements.length)
    cy.get(garage_page.selectBrandDropdown).select(randomOptionBrand)
    cy.get(garage_page.selectModelDropdownOptions).then(($elements) => {
    const randomOptionModel = Math.floor(Math.random() * $elements.length)
    cy.get(garage_page.selectModelDropdown).select(randomOptionModel)
    const randomMileage = Math.floor(Math.random()*1000) + 1
    cy.get(garage_page.inputMileageField).type(randomMileage)
    })
    })
    garage_page.clickAddCarButtonFinal()
    cy.get(garage_page.carAddedMessage).should('have.text', 'Car added')
    
  })
})
