import testpage from "./pages/testpage";

describe('template spec', () => {

  it('passes', () => {
    testpage.visit()
    testpage.typeDeveloperName('John Smith')
    testpage.validateDeveloperName()
    testpage.clickRemoteTesting()
    cy.get('#reusing-js-code').click()
    cy.get('#background-parallel-testing').click()
    cy.get('#continuous-integration-embedding').click()
    cy.get('#traffic-markup-analysis').click()
    cy.get('#macos').click()
    cy.get('#preferred-interface').select('JavaScript API')
    cy.get('#tried-test-cafe').click()
    testpage.clickSubmitButton()
  })
})
