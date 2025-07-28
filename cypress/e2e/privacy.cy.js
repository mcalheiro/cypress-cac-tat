describe("CAC TAT privacy", () => {
  beforeEach(() => {
    cy.visit("/privacy");
  });

  it("Navigate to privacy policy page and verify its content", () => {
    cy.get('h1').should("have.text", "CAC TAT - Política de Privacidade");
    cy.contains('p', 'Talking About Testing').should("be.visible");
  });
});


// Following code is to test whether the privacy policy page can be accessed multiple times without issues.
// Cypress._.times(10, () => {
//   it("Navigate to privacy policy page and verify its content", () => {
//     cy.visit("/privacy");
//     cy.get('h1').should("have.text", "CAC TAT - Política de Privacidade");
//     cy.contains('p', 'Talking About Testing').should("be.visible");
//   });
// });