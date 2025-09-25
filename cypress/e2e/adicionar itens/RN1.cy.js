it('Ao adicionar o primeiro item na lista, deve ser exibido no rodapé da lista uma sequencia de filtros', ()=> {
    cy.get('[data-testid="text-input"]')
      .type('compras', {delay: 170})
      .press('Enter')
    cy.get('[data-testid="footer"]')
      .should('be.visible')
  })