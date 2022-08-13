describe('login page test', () => {
  beforeEach(() => {
    cy.openPage(Cypress.env('qa_server'));
  });

  it('1 - Click on Google Authentication button', () => {
    cy.login();
  });
});
