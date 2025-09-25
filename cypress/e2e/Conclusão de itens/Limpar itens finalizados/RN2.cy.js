it('Ao clicar no botão de limpar todos, todas as tarefas concluídas devem ser excluídas da lista', () => {
    cy.get('[data-testid="text-input"]')
        .type('compras{enter}')
        .type('estudar{enter}')
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]')
        .click()
    cy.get('.clear-completed')
        .should('be.visible')
        .click()
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]')
        .should('not.be.visible')
    
})