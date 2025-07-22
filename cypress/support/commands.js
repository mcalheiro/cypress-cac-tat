// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
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

Cypress.Commands.add(
  "sendValidForm",
  (
    data = {
      firstName: "Slim",
      lastName: "Shady",
      email: "email@example.com",
      message: "This is a test message.",
    }
  ) => {
    cy.get('input[id="firstName"]').type(data.firstName || "Slim");
    cy.get('input[id="lastName"]').type(data.lastName || "Shady");
    cy.get('input[id="email"]').type(data.email || "email@example.com");
    cy.get('textarea[id="open-text-area"]').type(data.message || "This is a test message.");
    cy.get('button[type="submit"]').click();
  }
);
