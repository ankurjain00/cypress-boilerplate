class Testpage {
    constructor() {
        this.url = 'https://devexpress.github.io/testcafe/example/'
        this.developerName = '#developer-name'
        this.submitButton = '#submit-button'
    }
    visit() {
        cy.visit(this.url)
    }
    typeDeveloperName(name) {
        return cy.get(this.developerName).type(name)
    }

    clickSubmitButton() {
        return cy.get(this.submitButton).click()
    }

    clickRemoteTesting() {
        return cy.get('#remote-testing').click();
    }

    validateDeveloperName() {
        expect(cy.get(this.developerName).should('have.value', 'John Smith'))
    }
}
export default new Testpage();
