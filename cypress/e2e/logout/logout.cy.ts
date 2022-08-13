describe('logout page test', () => {
  beforeEach(() => {
    cy.openPage(Cypress.env('qa_server'));
  });

  it('1 - Click on Google Authentication button', () => {
    cy.login();
  });

  it('2 - Click logout button', () => {
    cy.getLogoutButton().click();
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
