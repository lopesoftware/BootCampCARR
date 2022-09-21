/// <reference types="cypress" />

const experienciaPage = require('../../support/Experiencia/experiencia-page')
import experience from '../../fixtures/experiencia.json'

describe('Funcionalidade: Adicionar Experiência', ()=>{

    beforeEach(()=>{
        cy.visit('login')
        cy.fixture("usuarios").then((user)=>{
            cy.login(user[0].email,user[0].senha)
        })
        cy.visit('adicionar-experiencia')
    })
    it('Deve adicionar uma experiência com sucesso', ()=>{
        experienciaPage.addExperiencia(experience[0].posicao,experience[0].empresa,experience[0].local,experience[0].dataInicio,experience[0].dataFim,experience[0].descricao)
        cy.get('[data-test="alert"]').should('contain','Experiência Adicionada')
    })

    it('Deve excluir uma experiência com sucesso', ()=>{
        experienciaPage.addExperiencia(experience[0].posicao,experience[0].empresa,experience[0].local,experience[0].dataInicio,experience[0].dataFim,experience[0].descricao)
        cy.get('[data-test="experience-delete"]').first().click()
        cy.get('[data-test="alert"]').should('contain','Experiência Removida')
    })

    it('Deve adicionar uma experiência atual com sucesso', ()=>{
        experienciaPage.addExperiencia(experience[0].posicao,experience[0].empresa,experience[0].local,experience[0].dataInicio,experience[0].descricao)

        cy.get('[data-test="alert"]').should('contain','Experiência Adicionada')
    })

})