/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"

describe('US0001 - Login do Usuário',() =>{

    beforeEach(()=>{
        cy.visit('login')
    })


    it('Deve fazer o login com sucesso',()=>{
        cy.login(usuarios[0].email,usuarios[0].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
    })

    it('Deve fazer o login com com credenciais inválidas',()=>{
        cy.login(usuarios[1].email,usuarios[1].senha)
        cy.get('[data-test="alert"]')
        .should('be.visible')
        .should('contain','Credenciais inválidas')
        

    })
    
    it('Deve fazer o login com com credenciais inválidas - Importação Fixture',()=>{
        cy.fixture("usuarios").then((user)=>{
            cy.login(user[0].email,user[0].senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
    })


})