import { baseUrl } from '../support/constants';

describe('home', () => {
  it('renders home page and navigates to the recommended blogPost page', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.get('a').contains('Читать далее >').click();
    cy.url().should('eq', `${baseUrl}/ru/blogPost/0`);
  });

  it('renders home page and navigates to the specific blogPost page', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.scrollTo(0, 1500, { duration: 2000 });
    cy.get('a').contains('8 Figma design systems that you can download for free today').click();
    cy.url().should('eq', `${baseUrl}/ru/blogPost/1`);
  });

  it('renders home page and navigates to the blog page', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.scrollTo(0, 1500, { duration: 2000 });
    cy.get('a').contains('Посмотреть Все').click();
    cy.url().should('eq', `${baseUrl}/ru/blog`);
  });

  it('renders home page and navigates to the featured blogPost page', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.get('a[data-cy=featuredPost-button]').click();
    cy.url().should('eq', `${baseUrl}/ru/blogPost/0`);
  });

  it('renders home page and navigates to the aboutUs page', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.scrollTo(0, 7500, { duration: 2000 });
    cy.get('a[data-cy=mission-button]').click();
    cy.url().should('eq', `${baseUrl}/ru/aboutUs`);
  });

  it('renders home page and navigates to the chosen category page', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.scrollTo(0, 6000, { duration: 2000 });
    cy.get('h5').contains('Technology').click();
    cy.url().should('eq', `${baseUrl}/en/category/technology`);
  });

  it('renders home page and navigates to the aboutUs page', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.scrollTo(0, 7500, { duration: 2000 });
    cy.get('a[data-cy=why-button]').click();
    cy.url().should('eq', `${baseUrl}/ru/aboutUs`);
  });

  it('renders home page and navigates to the contactUs page', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.scrollTo(0, 7500, { duration: 2000 });
    cy.scrollTo(0, 10000, { duration: 2000 });
    cy.scrollTo(0, 15000, { duration: 2000 });
    cy.get('a').contains('Присоединиться сейчас').click();
    cy.url().should('eq', `${baseUrl}/ru/contactUs`);
  });
});
