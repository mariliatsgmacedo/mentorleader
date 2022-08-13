Cypress.Commands.add('getSignGoogleButton', () => {
  return cy.get('[data-cy=signWithGoogleDataCy]');
});

Cypress.Commands.add('login', () => {
  cy.wait(5000);

  cy.get('body').then(body => {
    if (body.find('[data-cy=signWithGoogleDataCy]').length > 0) {
      cy.getSignGoogleButton().click();
      cy.contains('Lista Mentores');
    } else {
      cy.contains('Lista Mentores');
    }
  });
});
