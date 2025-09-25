it('Este filtro é default, sempre ao adicionar um item ele vai estar selecionado', () => {
    cy.get('[data-testid="text-input"]')
        .type('compras{enter}')
        .type('Estudar{enter}')

    cy.get('[data-testid="footer"]').should('be.visible')
    cy.contains('[data-testid="footer-navigation"] a', 'All')
        .should('have.class', 'selected')
})