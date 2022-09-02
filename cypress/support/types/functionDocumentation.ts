declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Click on the google button and sign in
     */
    getSignGoogleButton(): Chainable<any>;

    /**
     * Sign in with google
     */
    login(): Chainable<any>;

    /**
     * Get the logout button element
     */
    getLogoutButton(): Chainable<any>;

    /**
     * Open the url of mentor leader
     */
    openPage(url: String): Chainable<any>;
  }
}
