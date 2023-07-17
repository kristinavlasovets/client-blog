import { baseUrl } from '../support/constants';

describe('blogPost', () => {
  it('renders blogPost page and navigates to Author page', () => {
    cy.visit(`${baseUrl}/ru/blogPost/0`);
    cy.get('a').contains('Floyd Miles').click();
    cy.url().should('eq', `${baseUrl}/ru/author/0`);
  });

  it('renders blogPost page and navigates to the what to read next blogPost page', () => {
    cy.visit(`${baseUrl}/ru/blogPost/0`);
    cy.get('a').contains('Font sizes in UI design: The complete guide to follow').click();
    cy.url().should('eq', `${baseUrl}/ru/blogPost/2`);
  });

  it('renders blogPost page and navigates to aboutUs page', () => {
    cy.visit(`${baseUrl}/ru/blogPost/0`);
    cy.get('a').contains('Присоединиться сейчас').click();
    cy.url().should('eq', `${baseUrl}/ru/contactUs`);
  });

  it('renders blogPost page in russian and switches to english when clicks on EN button', () => {
    cy.visit(`${baseUrl}/ru/blogPost/0`);
    cy.get('h4').contains('Что почитать еще').should('exist');
    cy.get('a').contains('en').click();
    cy.get('h4').contains('What to read next').should('exist');
  });
});
