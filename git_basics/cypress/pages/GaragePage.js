export class GaragePage {
    addCarButton = "//button[text()='Add car']"
    selectBrandDropdown = "select#addCarBrand"
    selectBrandDropdownOptions = "select#addCarBrand> option"
    selectModelDropdown = "select#addCarModel"
    selectModelDropdownOptions = "select#addCarModel> option"
    inputMileageField = "input#addCarMileage"
    addCarButtonFinal = "//button[text()='Add']"
    carAddedMessage = "div.alert.alert-success p"
    addFuelExpenseButton = "//button[text()='Add fuel expense']"
    myProfileButton = 'button#userNavDropdown'
    settingsOption = 'div.user-nav_menu-group a'
    removeAccountButton = '//button[text()="Remove my account"]'
    finalRemoveButton = '//button[text()="Remove"]'
    startPageHeader = 'div.hero-descriptor h1'

    clickAddCarButton() {
        cy.xpath(this.addCarButton).click()
    }

    clickAddCarButtonFinal() {
        cy.xpath(this.addCarButtonFinal).click()
    }

    clickAddFuelExpenseButton() {
        cy.xpath(this.addFuelExpenseButton).first().click()
    }

    clickMyProfileButton() {
        cy.get(this.myProfileButton).click()
    }

    clickSettingsOption() {
        cy.get(this.settingsOption).eq(1).click()
    }

    clickremoveAccountButton() {
        cy.xpath(this.removeAccountButton).click()
    }

    clickfinalRemoveButton() {
        cy.xpath(this.finalRemoveButton).click()
    }

}