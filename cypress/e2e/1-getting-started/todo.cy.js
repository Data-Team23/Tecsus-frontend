/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Teste de cadastro com Cypress', () => {
  it('Deve selecionar campos, importar CSV e cadastrar no banco de dados', () => {
    // Visita a página onde está o formulário
    cy.visit('http://localhost:8080/upload');

    // Seleciona o primeiro campo ComboBox
    cy.get('#conta').select('Conta de energia');

    // Seleciona o segundo campo ComboBox
    cy.get('#documento').select('Contrato');

    // cy.get('#csv').input('teste_lucas.csv')

     // Upload a valid CSV file
     cy.get('#csv')
     .attachFile('teste_lucas.csv'); // Replace with the path to your valid CSV file

    // Wait for the file to be processed (adjust timeout if needed)
    cy.wait(5000);

    // Verify table data
    cy.get('.container-table-message').should('not.exist'); // Table message shouldn't be visible 
   
    cy.get('#botao').click();

    const fileContent = cy.get('#csv')
    .attachFile('teste_lucas.csv');

  });
});