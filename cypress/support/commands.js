const faker = require('faker-br')
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add("login", (email, password) => { 
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(password)
    cy.get('[data-test="login-submit"]').click()
 })

Cypress.Commands.add("criarPerfil", () => { 
    //Clicar no botão Criar Perfil
    cy.get('[data-test="dashboard-createProfile"]').click()
    //Validar que acessou a tela do Crie Perfil
    cy.get('.large').should('contain', 'Crie Seu Perfil')
    //Selecionar status 
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-3"]').click()

    //Preencher o campo Empresa
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())

    //Preencher o campo Website
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.linkedin.com/in/danilo-lopes-alves-pereira-01239422/')

    //Preencher o campo Localização
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo SP')

    //Preencher o campo Conhecimentos
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Líder de testes, Automação de Testes Mobile e Web')

    //Preencher o campo Github
    cy.get('[data-test="profile-gitHub"]').type('https://github.com/lopesoftware')
    
    //Preencher o campo Bio
    cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Com experiência de mais de 10 anos na área de qualidade de Software')
   
    //Cliar no botão Criar Perfil
    cy.get('[data-test="profile-submit"]').click()

    //Resultado esperado
    cy.get('[data-test="alert"]').should('be.visible')
 })