export class GaragePage {
    myProfileButton = 'button#userNavDropdown'
    settingsOption = 'div.user-nav_menu-group a'
    removeAccountButton = '//button[text()="Remove my account"]'
    finalRemoveButton = '//button[text()="Remove"]'
    startPageHeader = 'div.hero-descriptor h1'

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