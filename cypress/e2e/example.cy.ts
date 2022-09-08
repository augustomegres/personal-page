// https://docs.cypress.io/api/introduction/api.html

describe("Home", () => {
  it("main page should render correctly", () => {
    cy.visit("/");
    cy.contains("h1", "OLÁ,");
    cy.contains("h1", "SOU O ZÉ");
    cy.contains("h1", "FULLSTACK");
    cy.contains("h1", "DEVELOPER");
  });
});
