it('Quando clicado em filtro de ativos, então deve ser exibidos apenas os itens a serem concluídos', () => {
    cy.get('[data-testid="text-input"]')
        .type('compras{enter}')
        .type('Estudar{enter}')
        .type('Academia{enter}')
    cy.get('[data-testid="todo-item-toggle"]').eq(0).click()
    cy.get('[data-testid="footer-navigation"] a').eq(1).click()
    cy.get('span.todo-count').should('contain', '1')
})