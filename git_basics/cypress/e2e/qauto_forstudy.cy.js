describe('tests for hillel auto', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    })
    cy.xpath("//button[text()='Sign In']").click()
    cy.get("input[name='email']").type('lena.tester2021@gmail.com')
    cy.get("input[name='password']").type('GoodPass1@')
    cy.xpath("//button[text()='Login']").click()
  })
  
  it.skip('check, if car is added', () => {
    cy.get("nav.sidebar.d-flex.flex-column a").eq(0).click()
    cy.xpath("//button[text()='Add car']").click()
    cy.get("select#addCarBrand").select('Audi')
    cy.get("select#addCarModel").select('TT')
    cy.get("input#addCarMileage").type('0')
    cy.xpath("//button[text()='Add']").click()
    cy.get("p.car_name.h2").should('contain', 'Audi TT')

  })
  
  it.skip('check, if fuel expenses are added', () => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    today = dd + '.' + mm + '.' + yyyy
    cy.get("nav.sidebar.d-flex.flex-column a").eq(1).click()
    cy.xpath("//button[text()='Add an expense']").click()
    cy.get("input#addExpenseMileage").clear().type('50')
    cy.get("input#addExpenseLiters").type('50')
    cy.get("input#addExpenseTotalCost").type('50')
    cy.xpath("//button[text()='Add']").click()
    cy.get("tbody>tr").find('>td').first().should('have.text', today)
    cy.get("tbody>tr").find('>td').eq(1).should('have.text', '50')
    cy.get("tbody>tr").find('>td').eq(2).should('have.text', '50L')
    cy.get("tbody>tr").find('>td').eq(3).should('have.text', '50.00 USD')

  })

  it.skip('check instructions for BMW X5', () => {
    cy.get("nav.sidebar.d-flex.flex-column a").eq(2).click()
    cy.get("button#brandSelectDropdown").click()
    cy.get("ul[aria-labelledby='brandSelectDropdown']").find('>li').filter(':contains("BMW")').click()
    cy.get("button#modelSelectDropdown").click()
    cy.get("ul[aria-labelledby='modelSelectDropdown']").find('>li').filter(':contains("X5")').click()
    cy.xpath("//button[text()='Search']").click()
    cy.get("ul.instructions_list.instruction-list").find('>li').first().find('>a')
    .find('>p').should('have.text', 'Front brake discs on BMW X5')
    cy.get("ul.instructions_list.instruction-list").find('>li').eq(1).find('>a')
    .find('>p').should('have.text', 'Front brake pads on BMW X5')
    cy.get("ul.instructions_list.instruction-list").find('>li').eq(2).find('>a')
    .find('>p').should('have.text', 'Front coil springs on BMW X5')
  })

})