describe('tests for Guru99', () => {

  beforeEach(() => {
    cy.visit('https://www.guru99.com/')
  })

  it('check, if search in Ukrainian is working', () => {
    cy.get("div.gt_selected a img").click()
    cy.get("a[title='Ukrainian']").click()
    cy.get("div#main-header.site-header-wrap").invoke('show')
    cy.get("button.search-toggle-open.drawer-toggle.search-toggle-style-default").click()
    cy.wait(1000)
    cy.get("input[type='search']").type('тестування')
    cy.get("input[type='submit']").click()
    cy.get("a.gs-title").first()
    .should('contain', 'тестування')
  })

  it('check tutorials for Cucumber - amount=6 and type=Tutorial', () => {
    cy.get("div#main-header.site-header-wrap").invoke('show')
    cy.get("div.primary-menu-container.header-menu-container>ul>li#menu-item-3173>a").click()
    cy.get("ul.sub-menu.clicked>li#menu-item-4571").click()
    cy.get("table.table>tbody>tr").should('have.length', 6)
    cy.get("table.table>tbody>tr")
    .each(($row) => {
      cy.wrap($row).within(() => {
        cy.get("td.responsivetable").should('contain', 'Tutorial')
      })
    })
  })

  it('check, that "SUP Career Suggestion Tool" is suggesting career option', () => {
    cy.xpath("//a[text()='SAP Career Suggestion Tool']").click()
    cy.get("select[name='exp']")
    .select("0")
    cy.get("select[name='education']")
    .select("Graduate", {force: true})
    cy.get("select[name='spe']")
    .select("Quality Control", {force: true})
    cy.get("input[value='Submit']").click({force: true})
    cy.get("p#test1").should('contain', 'We recommend the following module')
    cy.get("p#test1").should('contain', 'SAP QM (Quality Management)')
  })
})

