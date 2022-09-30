/// <reference types="cypress" />

const formacaoPage = require("../../support/Formacao/formacao-page")
import fromacao from '../../fixtures/formacao.json'


describe('Fncionalidade: Adicionar Formação Acadêmica',()=>{

    beforeEach(()=>{
        cy.visit('login')
        cy.fixture("usuarios").then((user)=>{
            cy.login(user[0].email,user[0].senha)
        })
        cy.visit('adicionar-formacao')
    })

    it('Adicionar Formação Acadêmica com sucesso',()=>{
        formacaoPage.addFormacao(fromacao[0].escola,fromacao[0].grau,fromacao[0].curso,fromacao[0].datainicio,fromacao[0].dataFim,fromacao[0].descricao)
        cy.get('[data-test="alert"]').should('contain','Formação Acadêmica Adicionada')
    })

    it('Adicionar Formação Acadêmica Cursando com sucesso',()=>{
        formacaoPage.addFormacaoCursando(fromacao[0].escola,fromacao[0].grau,fromacao[0].curso,fromacao[0].datainicio,fromacao[0].descricao)
        cy.get('[data-test="alert"]').should('contain','Formação Acadêmica Adicionada')
    })

    it('Excluir Formação Acadêmica com sucesso',()=>{
        formacaoPage.addFormacao(fromacao[0].escola,fromacao[0].grau,fromacao[0].curso,fromacao[0].datainicio,fromacao[0].dataFim,fromacao[0].descricao)
        cy.get('[data-test="education-delete"]').first().click()
        cy.get('[data-test="alert"]').should('contain','Formação Acadêmica Removida')
    })


})