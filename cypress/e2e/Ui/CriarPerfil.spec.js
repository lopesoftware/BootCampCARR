/// <reference types="cypress" />
const faker = require('faker-br')
import user from '../../fixtures/user.json'

describe('US0003 - Funcionalidade: Criar Perfil', () => {
    beforeEach(()=>{
        cy.visit('login')
        cy.login(user.email,user.senha)
    })
    
    it('Deve criar o peril com todos os campos obrigatórios preenchidos', () => {
        cy.criarPerfil()
        
    });

    it('Deve criar o peril sem preencher os campos obrigatórios', () => {
        
        //Clicar no botão Criar Perfil
        cy.get('[data-test="dashboard-createProfile"]').click()
        //Validar que acessou a tela do Crie Perfil
        cy.get('.large').should('contain', 'Crie Seu Perfil')
       
        //Cliar no botão Criar Perfil
        cy.get('[data-test="profile-submit"]').click()

        //Resultado esperado
        cy.get('.MuiFormHelperText-root').should('contain.text','Conhecimentos é obrigatório')
        
    });
});