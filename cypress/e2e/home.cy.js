describe('Homepage', () => {
    it('affiche la homepage', () => {
        cy.visit("https://beta.gouv.fr/");

        cy.findByRole('heading', { level: 1 }).should('be.visible')

        cy.findByRole('searchbox', { name: "Recherche" })
            .type("foo")
        cy.findByRole("button", { name: "Rechercher" })
            .click()
        cy.findByRole("heading", { level: 1 })
            .should('have.text', "Résultats")
        cy.findByText("Aucun résultat pour « foo »").should("be.visible");
    })
});
