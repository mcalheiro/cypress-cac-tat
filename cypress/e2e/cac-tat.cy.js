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
    cy.get('input[id="phone-checkbox"]').check();
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

  it("Select product by its text", () => {
    cy.get('select[id="product"]').select("YouTube").should("have.value", "youtube");
  });

  it("Select product by its value", () => {
    cy.get('select[id="product"]').select("mentoria").should("have.value", "mentoria");
  });

  it("Select product by its index", () => {
    cy.get('select[id="product"]').select(1).should("have.value", "blog");
  });

  it("Radio buttons should be checked when selected", () => {
    cy.get('input[type="radio"]').each((radioButton) => {
      cy.wrap(radioButton).check().should("be.checked");
    });
  });

  it("Checkboxes should be checked and unchecked", () => {
    cy.get('input[type="checkbox"]')
      .check().should("be.checked")
      .last().uncheck().should("not.be.checked");
  });

  it("File upload works correctly", () => {
    cy.get('input[type="file"]')
      .selectFile("cypress/fixtures/example.json")
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  it("File upload works correctly with drag and drop action", () => {
    cy.fixture("example.json").as("sampleFile");
    cy.get('input[type="file"]')
      .selectFile("@sampleFile", { action: "drag-drop"})
      .should((input) => {
        expect(input[0].files[0].name).to.equal("example.json");
      });
  });

  it("Verify privacy policy link opens in a new tab", () => {
    cy.contains('a', 'Política de Privacidade').should("have.attr", "target", "_blank");
  });

  it("Navigate to privacy policy page and verify its content", () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click();
    cy.get('h1').should("have.text", "CAC TAT - Política de Privacidade");
  });
});
 