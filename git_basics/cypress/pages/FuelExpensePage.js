export class FuelExpensePage {
    inputMileageField = "input#addExpenseMileage"
    inputNuberOfLitersField = "input#addExpenseLiters"
    inputTotalExpensesField = "input#addExpenseTotalCost"
    addExpenseButton = "//button[text()='Add']"
    fuelExpenceAddedMessage = "div.alert.alert-success p"
    expenseTable = "tbody>tr"

    inputMileage(new_mileage) {
        cy.get(this.inputMileageField).clear()
        cy.get(this.inputMileageField).type(new_mileage)
    }

    inputNumberOfLiters(number_of_liters) {
        cy.get(this.inputNuberOfLitersField).type(number_of_liters)
    }

    inputTotalExpenses(expenses) {
        cy.get(this.inputTotalExpensesField).type(expenses)
    }

    clickAdd() {
        cy.xpath(this.addExpenseButton).click()
    }

}