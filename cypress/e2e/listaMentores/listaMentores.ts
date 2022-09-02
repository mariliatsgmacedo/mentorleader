describe('Open Lista Mentores page', () => {
  beforeEach(() => {
    cy.openPage(Cypress.env('qa_server'));
  });

  it('1 - Click on Google Authentication button', () => {
    cy.login();
  });

  it('2 - Click on lista mentores button', () => {
    cy.getlistaMentoresButton().click();
  });
});
