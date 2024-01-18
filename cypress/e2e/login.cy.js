let username = "your_username";
let password = "your_password";

beforeEach(() => {
  cy.visit("https://www.demoblaze.com/");
});

describe("Test 1", () => {
  it("Sign Up, Valid Login and Invalid Login", () => {
    cy.signup(username, password);
    cy.login(username, password);
    cy.get("#logout2").click();
    cy.login("user-invalid", "pwd-invalid");
  });
});

describe("Test 2", () => {
  it("Add to Cart and Purchase", () => {
    cy.get('#itemc:contains("Phones")').click();
    cy.contains("Samsung galaxy s6").click();
    cy.contains("Add to cart").click();
    cy.contains("Home").click();
    cy.get('#itemc:contains("Phones")').click();
    cy.contains("Nexus 6").click();
    cy.contains("Add to cart").click();
    cy.contains("Cart").click();
    cy.get('a[onclick*="deleteItem"]').eq(0).click();
    cy.placeOrder();
  });
});

describe("Test 3", () => {
  it("Sign Up, Valid Login and Invalid Login", () => {
    cy.get('#itemc:contains("Phones")').click();
    cy.contains("Samsung galaxy s6").click();
    cy.contains("Add to cart").click();
    cy.contains("Home").click();
    cy.get('#itemc:contains("Phones")').click();
    cy.contains("Nexus 6").click();
    cy.contains("Add to cart").click();
    cy.contains("Cart").click();
    cy.get('a[onclick*="deleteItem"]').eq(0).click();
    cy.placeOrder();
    cy.get(".sweet-alert > h2").should(
      "have.text",
      "Thank you for your purchase!"
    );
  });
});

describe("Test 4", () => {
  it("Log in and Navigate through all Categories", () => {
    const subcategories = ["Phones", "Laptops", "Monitors"];
    cy.get("#cat + .list-group-item", { timeout: 20000 }).should("be.visible");
    subcategories.forEach((subcategory) => {
      cy.contains("#itemc", subcategory, { timeout: 10000 })
        .should("be.visible")
        .click();
      cy.get("#tbodyid", { timeout: 3000 }).should("be.visible");
    });
  });
});
