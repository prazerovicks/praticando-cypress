it('O número de tarefas deve refletir com a lista de itens a fazer exibida', () => {
    cy.get('[data-testid="text-input"]')
        .type('compras{enter}',)
        .type('Estudar{enter}')

    cy.get('[data-testid="todo-list"] li').then(($itens) => {
      const qtdLista = $itens.length

    cy.get('[class="todo-count"]').invoke('text').then((texto) => {
        const qtdRodape = parseInt(texto)
        expect(qtdRodape).to.eq(qtdLista)
      })
    })
})