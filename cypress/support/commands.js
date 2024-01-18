Cypress.Commands.add("login", (username, password) => {
  cy.get("#login2").click();
  cy.wait(1000);
  cy.get("#loginusername").type(username);
  cy.get("#loginpassword").type(password);
  cy.get("button").contains("Log in").click();
});

Cypress.Commands.add("addPhoneCart", () => {
  cy.get('#itemc:contains("Phones")').click();
  cy.contains("Samsung galaxy s6").click();
  cy.contains("Add to cart").click();
  cy.contains("Home").click();
  cy.get('#itemc:contains("Phones")').click();
  cy.contains("Nexus 6").click();
  cy.contains("Add to cart").click();
  cy.contains("Cart").click();
});

Cypress.Commands.add("signup", (username, password) => {
  cy.get("#signin2").click();
  cy.get("#sign-username").type(username);
  cy.get("#sign-password").type(password);
  cy.get("button").contains("Sign up").click();
});

Cypress.Commands.add("placeOrder", () => {
  cy.wait(2000);
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
