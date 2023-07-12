describe('category', () => {
  it('renders category page in english and switches to russian when clicks on RU button', () => {
    cy.visit('http://localhost:3000/en/category/business');
    cy.get('h3')
      .contains('Subscribe to our news letter to get latest updates and news')
      .should('exist');
    cy.get('a').contains('ru').click();
    cy.get('h3')
      .contains('Подпишитесь на нашу рассылку, чтобы быть в курсе последних обновлений и новостей')
      .should('exist');
  });

  it('renders category page in english displays chosen category as higlighted', () => {
    cy.visit('http://localhost:3000/en/category/business');
    cy.get('[data-cy="chosenCategory"]')
      .invoke('attr', 'class')
      .should('match', /.selected/);
  });

  it('renders category page in english and chooses a specific tag via elastic search', () => {
    cy.visit('http://localhost:3000/en/category/business');
    cy.get('input[placeholder*="Search for tag..."]').focus().wait(2000).type('s').wait(2000);
    cy.get('li').contains('spot on').trigger('mouseover').wait(2000).click();
  });

  it('renders category page in english, displays chosen category as higlighted and navigate to the selected category page when clicked on the specific category button', () => {
    cy.visit('http://localhost:3000/en/category/business');
    cy.get('[data-cy="chosenCategory"]')
      .contains('Technology')
      .trigger('mouseover')
      .wait(2000)
      .click();
    cy.url().should('eq', 'http://localhost:3000/en/category/technology');
  });
});
