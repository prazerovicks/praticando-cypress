it('Deve exibir no input a opção de marcar todos, que conclui todos os itens da lista', () => {
  cy.get('[data-testid="text-input"]')
    .type('compras{enter}',)
    .type('Estudar{enter}')
  
  cy.get('[data-testid="todo-list"] li').should('exist')

  cy.get('[data-testid="toggle-all"]')
    .should('exist')

})
