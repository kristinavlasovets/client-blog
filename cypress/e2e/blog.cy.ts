describe('blog', () => {
  it('renders blog page and navigates to featured blogPost page', () => {
    cy.visit('http://localhost:3000/ru/blog');
    cy.get('a').contains('Читать далее >').click();
    cy.url().should('eq', 'http://localhost:3000/ru/blogPost/0');
  });

  it('renders blog page and navigates to the first from all posts block blogPost page', () => {
    cy.visit('http://localhost:3000/ru/blog');
    cy.get('a').contains('Step-by-step guide to choosing great font pairs').click();
    cy.url().should('eq', 'http://localhost:3000/ru/blogPost/0');
  });

  it('renders blog page and displays next portion of posts when clicked on the next button', () => {
    cy.visit('http://localhost:3000/ru/blog');
    cy.get('button').contains('Вперед >').trigger('mouseover').wait(2000).click();
    cy.get('h5').contains('How to build rapport with your web design clients').should('exist');
  });

  it('renders blog page and displays previous portion of posts when clicked on the prev button', () => {
    cy.visit('http://localhost:3000/ru/blog');
    cy.get('button').contains('< Назад').trigger('mouseover').wait(2000).click();
    cy.get('h5').contains('Step-by-step guide to choosing great font pairs').should('exist');
  });

  it('renders blog page and navigates to aboutUs page', () => {
    cy.visit('http://localhost:3000/ru/blog');
    cy.get('a').contains('Присоединиться сейчас').click();
    cy.url().should('eq', 'http://localhost:3000/ru/contactUs');
  });
});
