// -- This is a parent command --
Cypress.Commands.add('typeInputText', (text) => {
    cy.get('#input')
        .type(text)
})

Cypress.Commands.add('inputShoulHaveValue', (value) => {
    cy.get('#input')
        .should('have.value', value)
})

Cypress.Screenshot.defaults({
    overwrite: true,
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })