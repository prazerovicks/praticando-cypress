it('Validar campo de input com arial label "O que preciso fazer?"', () => {
    cy.get('[data-testid="text-input"]') 
    .should('have.attr', 'placeholder', 'What needs to be done?');
  })