import { baseUrl } from '../support/constants';

describe('Header', () => {
  it('renders aboutUs page in english and switches to english when clicks on EN button', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('span').contains('Modsen Client Blog').should('exist');
  });

  it('renders aboutUs page and navigates to blog page when clicked on Blog link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('a').contains('Blog').click();
    cy.url().should('eq', `${baseUrl}/en/blog`);
  });

  it('renders aboutUs page and navigates to home page when clicked on Home link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('a').contains('Home').click();
    cy.url().should('eq', `${baseUrl}/en`);
  });

  it('renders aboutUs page and navigates to contactUs page when clicked on Contact Us link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('a').contains('Contact us').click();
    cy.url().should('eq', `${baseUrl}/en/contactUs`);
  });
});
