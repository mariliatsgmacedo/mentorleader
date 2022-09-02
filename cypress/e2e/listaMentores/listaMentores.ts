describe('Open Mentor List page', () => {
  beforeEach(() => {
    cy.openPage(Cypress.env('qa_server'));
  });

  it('1 - Click on Google Authentication button', () => {
    cy.login();
  });

  it('2 - Click on Mentor List button', () => {
    cy.getMentorListButton().click();
  });
});
