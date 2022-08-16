/// <reference types="cypress" />
const faker = require('faker-br')

describe('US0002 - Funcionalidade: Cadastro', () => {
    beforeEach(()=>{
        cy.visit('login')
    })
    
    it('Deve fazer o cadastro com sucesso', () => {
        cy.get('[data-test="login-register"]').click()
        cy.get('.large')
        .should('be.visible')
        .should('contain','Cadastrar')
        cy.get('.lead')
        .should('be.visible')
        .should('contain','Criar Sua Conta')

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Souza Cruz')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('labra@01')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('labra@01')
        cy.get('[data-test="register-submit"]').click()

        //Resultado esperado
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
        
    });
});