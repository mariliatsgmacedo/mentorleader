Cypress.Commands.add('getLogoutButton', () => {
  return cy.get('[data-testid=ExitToAppIcon]');
});
