/// <reference types="cypress" />

describe('US0001 - Login do Usuário',() =>{

    beforeEach(()=>{
        cy.visit('login')
    })


    it('Deve fazer o login com sucesso',()=>{
        cy.login('lopesoftware@bootcamp.com','labra@2022')
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
    })

    it('Deve fazer o login com com credenciais inválidas',()=>{

        cy.login('lopesoftware@bootcamp.com','labra@2021')
        cy.get('[data-test="alert"]')
        .should('be.visible')
        .should('contain','Credenciais inválidas')
        

    })


})