import { GaragePage } from "../pages/GaragePage"

describe('adding car tests', () => {

  beforeEach(() => {
    cy.login_basic_auth()
    cy.login_user1()

  })

  it('adding car', () => {
    //adding car from UI
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

    //interception of response from adding car
    cy.intercept('POST', '/api/cars').as('getCar')
    garage_page.clickAddCarButtonFinal()
    //status code validation
    cy.get('@getCar').its('response.statusCode').should('eq', 201)
    //saving car data to fixture
    cy.get('@getCar').then(({response}) => {
      cy.wrap(response.body.data).as('responseBodyCarData')
    })

    cy.get('@responseBodyCarData').then((carData) => {
      cy.writeFile('cypress/fixtures/carData.json', carData)
    })
    
    //getting all cars data
    cy.request({method:'GET', url: '/api/cars'}
      ).then((response) => {
        cy.wrap(response.body.data).as('responseBodyCarDataAll')
        cy.get('@responseBodyCarDataAll').then((carDataAll) => {
          cy.writeFile('cypress/fixtures/carDataAll.json', carDataAll)
        })
    })

    //assertion, that cars list contains new car
      cy.fixture("carData").then((cardata) => {
        const newCar = cardata
        cy.fixture("carDataAll").then((cardata_all) => {
          const lastCar = cardata_all[0]
          expect(`${newCar.id}, ${newCar.brand}, ${newCar.model}, ${newCar.mileage}`)
          .to.equal(`${lastCar.id}, ${lastCar.brand}, ${lastCar.model}, ${lastCar.mileage}`)
        })
      })
  })
})