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
Cypress.Commands.add("login", (username, password) => {
  cy.get("#login2").click();
  cy.get("#loginusername").type(username);
  cy.get("#loginpassword").type(password);
  cy.get("#logInModal .modal-footer .btn-primary").click();
});

Cypress.Commands.add("signup", (username, password) => {
  cy.get("#signin2").click();
  cy.get("#sign-username").type(username);
  cy.get("#sign-password").type(password);
  cy.get("#signInModal .modal-footer .btn-primary").click();
});

Cypress.Commands.add("placeOrder", () => {
  cy.wait(3000);
  cy.contains("Place Order").click();

  cy.get("#orderModal", { timeout: 10000 });

  cy.waitForModalAndType("#name", "name");
  cy.waitForModalAndType("#country", "country");
  cy.waitForModalAndType("#city", "city");
  cy.waitForModalAndType("#card", "01234567890");
  cy.waitForModalAndType("#month", "01");
  cy.waitForModalAndType("#year", "2024");
  cy.contains("Purchase").click();
});

Cypress.Commands.add("waitForModalAndType", (inputSelector, text) => {
  cy.get(inputSelector, { timeout: 10000 }).eq(0).type(text, { force: true });
});
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
