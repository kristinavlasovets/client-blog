describe('contactUs', () => {
  it('renders contactUs page in russian and switches to english when clicks on EN button', () => {
    cy.visit('http://localhost:3000/ru/contactUs');
    cy.get('h2').contains('Давайте начнем разговор').should('exist');
    cy.get('a').contains('en').click();
    cy.get('h2').contains('Let’s Start a Conversation').should('exist');
  });

  it('renders contactUs page in english and shows warning messages when trying to send an empty form', () => {
    cy.visit('http://localhost:3000/en/contactUs');
    cy.get('h2').contains('Let’s Start a Conversation').should('exist');
    cy.get('button').contains('Send Message').trigger('mouseover').wait(2000).click();
    cy.get('p').contains('Full Name is required').should('exist');
    cy.get('p').contains('Email is required').should('exist');
    cy.get('p').contains('Message is required').should('exist');
  });

  it('renders contactUs page in english and shows alert with successful message when trying to send form with valid data filled in', () => {
    cy.visit('http://localhost:3000/en/contactUs');
    cy.get('h2').contains('Let’s Start a Conversation').should('exist');

    cy.get('input:first').should('have.attr', 'placeholder', 'Full Name').type('Kristina');
    cy.get('input')
      .eq(1)
      .should('have.attr', 'placeholder', 'Your Email')
      .type('kristinavlasovets@gmail.com');
    cy.get('textarea')
      .should('have.attr', 'placeholder', 'Message')
      .type('Hello from Modsen Client Blog!');
    cy.get('button').contains('Send Message').trigger('mouseover').wait(2000).click();
  });
});
