describe('home', () => {
  it('renders home page and navigates to the recommended blogPost page', () => {
    cy.visit('http://localhost:3000/ru');
    cy.get('a').contains('Читать далее >').click();
    cy.url().should('eq', 'http://localhost:3000/ru/blogPost/0');
  });

  it('renders home page and navigates to the specific blogPost page', () => {
    cy.visit('http://localhost:3000/ru');
    cy.get('a').contains('8 Figma design systems that you can download for free today').click();
    cy.url().should('eq', 'http://localhost:3000/ru/blogPost/1');
  });

  it('renders home page and navigates to the blog page', () => {
    cy.visit('http://localhost:3000/ru');
    cy.get('a').contains('Посмотреть Все').click();
    cy.url().should('eq', 'http://localhost:3000/ru/blog');
  });

  it('renders home page and navigates to the aboutUs page', () => {
    cy.visit('http://localhost:3000/ru');
    cy.get('a[data-cy=mission-button]').click();
    cy.url().should('eq', 'http://localhost:3000/ru/aboutUs');
  });

  it('renders home page and navigates to the featured blogPost page', () => {
    cy.visit('http://localhost:3000/ru');
    cy.get('a[data-cy=featuredPost-button]').click();
    cy.url().should('eq', 'http://localhost:3000/ru/blogPost/0');
  });
});
