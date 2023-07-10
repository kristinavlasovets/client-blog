describe('blogPost', () => {
  it('renders blogPost page and navigates to Author page', () => {
    cy.visit('http://localhost:3000/ru/blogPost/0');
    cy.get('a').contains('Floyd Miles').click();
    cy.url().should('eq', 'http://localhost:3000/ru/author/0');
  });

  it('renders blogPost page and navigates to the what to read next blogPost page', () => {
    cy.visit('http://localhost:3000/ru/blogPost/0');
    cy.get('a').contains('Font sizes in UI design: The complete guide to follow').click();
    cy.url().should('eq', 'http://localhost:3000/ru/blogPost/2');
  });
});
