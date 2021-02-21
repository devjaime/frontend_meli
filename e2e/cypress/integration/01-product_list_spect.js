/* eslint-disable no-undef */
describe('Main screen', () => {
  it('renders without crashing', () => {
    cy.visit('/');
  });
  it('expects to find the select box defaulting to Buscar productos, marcas y más', () => {
    cy.visit('/')
      .get('[data-testid=input]')
      .should('have.placeholder', 'Buscar productos, marcas y más');
  });
});
