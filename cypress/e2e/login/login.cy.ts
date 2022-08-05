describe('login page test', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('qa_server'));
  });

  it('Click on Google Authentication button', () => {
    cy.contains('Entre com as suas credenciais para acessar a sua conta').then(
      text => {
        cy.get('[data-cy=signWithGoogleDataCy]').click();
      }
    );
  });
});
