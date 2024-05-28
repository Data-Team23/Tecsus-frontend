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

describe('Teste de upload de arquivo CSV.', () => {
  it('Deve selecionar campos, importar CSV e cadastrar no banco de dados', () => {
    // Visita a página onde está o formulário
    cy.visit('http://localhost:8080/upload');

    // Seleciona o primeiro campo ComboBox
    cy.get('#conta').select('Conta de energia');

    // Seleciona o segundo campo ComboBox
    cy.get('#documento').select('Contrato');

    // Intercepta a chamada da api para cadastrar os dados
    cy.intercept('POST', '/api/energia/upload', {
      statusCode: 201,
      body: { message: 'Dados cadastrados com sucesso!' },
    }).as('cadastroMock');

    // Faz o Upload de um CSV válido
    cy.get('#csv').attachFile('teste_lucas.csv');

    // Espera o arquivo ser processado
    cy.wait(5000);

    // Verifica os dados da tabela
    cy.get('.container-table-message').should('not.exist');

    // Clica no botão de salvar
    cy.get('#botao').click();

    // Verifica se a mensagem de sucesso apareceu
    cy.wait('@cadastroMock').then(() => {
      cy.contains('Arquivo CSV enviado com sucesso!').should('be.visible');
    });

  });
});


describe('Teste de cadastro de fornecedor de energia.', () => {
  it('Deve preencher o formulário e criar um fornecedor com sucesso', () => {
    // Visita a página onde está o formulário
    cy.visit('http://localhost:8080/adicionar-fornecedor-energia');

    // Intercepta a chamada de API para criar um fornecedor
    cy.intercept('POST', '/api/energia/fornecedores_energia/', {
      statusCode: 201,
      body: { message: 'Fornecedor criado com sucesso!' },
    }).as('criarFornecedor');

    // Preenche o campo "NOME DO FORNECEDOR"
    cy.get('input[placeholder="Informe o nome do fornecedor"]').type('Fornecedor Teste');

    // Preenche o campo "CONTRATO"
    cy.get('input[placeholder="Informe o número do contrato"]').type('12345');

    // Clica no botão "Salvar"
    cy.get('button').contains('Salvar').click();

    // Espera a chamada de API ser interceptada
    cy.wait('@criarFornecedor');

    // Verifica se a mensagem de sucesso apareceu
    cy.contains('Fornecedor criado com sucesso!').should('be.visible');

    // Verifica se os campos do formulário foram limpos
    cy.get('input[placeholder="Informe o nome do fornecedor"]').should('have.value', '');
    cy.get('input[placeholder="Informe o número do contrato"]').should('have.value', '');
  });
});


