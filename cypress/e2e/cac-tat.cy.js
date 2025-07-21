describe('CAC TAT', () => {
  it('Verify page title', () => {
    cy.visit('/')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})