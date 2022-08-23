/// <reference types="cypress" />
const faker = require('faker-br')

describe('US0003 - Funcionalidade: Criar Perfil', () => {
    beforeEach(()=>{
        cy.visit('login')
        cy.login('lopesoftware@bootcamp.com','labra@2022')
    })
    
    it('Deve criar o peril com todos os campos obrigatórios preenchidos', () => {
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
        
    });

    it.only('Deve criar o peril sem preencher os campos obrigatórios', () => {
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