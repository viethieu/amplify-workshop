 1describe('Authenticator:', function() {
 2  beforeEach(function() {
 3    cy.visit('/');
 4  });
 5
 6  describe('Sign In:', () => {
 7    it('allows a user to signin', () => {
 8      cy.get(selectors.usernameInput).type(
 9        'hieu123'
10      );
11      cy.get(selectors.signInPasswordInput).type(
12        '12345678'
13      );
14      cy.get(selectors.signInSignInButton)
15        .contains('Sign In')
16        .click();
17      cy.get(selectors.root).contains('Global');
18    });
19  });
20});
21export const selectors = {
22  usernameInput: '[data-test="username-input"]',
23  signInPasswordInput: '[data-test="sign-in-password-input"]',
24  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
25  root: '#root'
26};

