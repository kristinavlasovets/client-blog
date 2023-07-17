import { baseUrl } from '../support/constants';

describe('Footer', () => {
  it('renders aboutUs page in english and switches to russian when clicks on RU button', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('h3')
      .contains('Subscribe to our news letter to get latest updates and news')
      .should('exist');
    cy.get('a').contains('ru').click();
    cy.get('h3')
      .contains('Подпишитесь на нашу рассылку, чтобы быть в курсе последних обновлений и новостей')
      .should('exist');
  });

  it('renders aboutUs page in english and shows warning message when trying to send an empty form', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('h3')
      .contains('Subscribe to our news letter to get latest updates and news')
      .should('exist');
    cy.get('button').contains('Subscribe').trigger('mouseover').wait(2000).click();
    cy.get('p').contains('Email is required').should('exist');
  });

  it('renders aboutUs page in english and subscribes when entered valid email', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('h3')
      .contains('Subscribe to our news letter to get latest updates and news')
      .should('exist');
    cy.get('input:first')
      .should('have.attr', 'placeholder', 'Enter Your Email')
      .type('kristinavlasovets@gmail.com');
    cy.get('button').contains('Subscribe').trigger('mouseover').wait(2000).click();
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

  it('renders aboutUs page and navigates to privacyPolicy page when clicked on Privacy Policy link from the navigation menu', () => {
    cy.visit(`${baseUrl}/en/aboutUs`);
    cy.get('a').contains('Privacy Policy').click();
    cy.url().should('eq', `${baseUrl}/en/privacyPolicy`);
  });
});
