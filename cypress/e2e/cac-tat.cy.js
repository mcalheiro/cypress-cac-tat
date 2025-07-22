describe("CAC TAT", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify page title", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Success message appears when required data is filled", () => {
    cy.get('input[id="firstName"]').type("Slim");
    cy.get('input[id="lastName"]').type("Shady");
    cy.get('input[id="email"]').type("email@example.com");
    cy.get('textarea[id="open-text-area"]').type("This is a test message.");
    cy.get('button[type="submit"]').click();
    cy.get(".success").should("be.visible");
  });

  it("Error message appears when required data is not filled", () => {
    cy.get('input[id="firstName"]').type("Slim");
    cy.get('input[id="lastName"]').type("Shady");
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });

  it("Alphabetical values do not work on phone input", () => {
    cy.get('input[id="phone"]').type("abcdef").should("be.empty");
  });

  it("Error message appears when required phone is not filled", () => {
    cy.get('input[id="firstName"]').type("Slim");
    cy.get('input[id="lastName"]').type("Shady");
    cy.get('input[id="email"]').type("email@example.com");
    cy.get('textarea[id="open-text-area"]').type("This is a test message.");
    cy.get('input[id="phone-checkbox"]').click();
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });

  it("Filled data is cleared successfuly", () => {
    cy.get('input[id="firstName"]').type("Slim").should("have.value", "Slim");
    cy.get('input[id="firstName"]').clear().should("be.empty");
    cy.get('input[id="lastName"]').type("Shady").should("have.value", "Shady");
    cy.get('input[id="lastName"]').clear().should("be.empty");
    cy.get('input[id="email"]')
      .type("email@example.com")
      .should("have.value", "email@example.com");
    cy.get('input[id="email"]').clear().should("be.empty");
    cy.get('textarea[id="open-text-area"]')
      .type("This is a test message.")
      .should("have.value", "This is a test message.");
    cy.get('textarea[id="open-text-area"]').clear().should("be.empty");
  });

  it("Error message appears when form is empty", () => {
    cy.get('button[type="submit"]').click();
    cy.get(".error").should("be.visible");
  });

  it("Submit form with custom command", () => {
    cy.sendValidForm();
    cy.get(".success").should("be.visible");
  });
});
