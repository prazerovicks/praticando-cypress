it('Quando adicionado um a lista, o mesmo deve possuir um radio button para sua conclusão e um x para sua exclusão', ()=>{
    cy.get('[data-testid="text-input"]')
      .type('compras', {delay: 170})
      .press('Enter')
    cy.get('[data-testid="todo-item-toggle"]')
      .should('exist')
    cy.get('[data-testid="todo-item-button"]')
      .should('exist')
  })