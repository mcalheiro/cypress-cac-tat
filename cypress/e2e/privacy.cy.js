describe("CAC TAT", () => {
  beforeEach(() => {
    cy.visit("/privacy");
  });

  it("Navigate to privacy policy page and verify its content", () => {
    cy.get('h1').should("have.text", "CAC TAT - Política de Privacidade");
    cy.contains('p', 'Talking About Testing').should("be.visible");
  });
});
 