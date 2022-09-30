/// <reference types="cypress" />

import auth from '../../fixtures/auth.json'

it('Teste Autenticação', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property("jwt")
    })
})

it('Teste Autenticação com usuário inválido', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        failOnStatusCode: false,
        body: {
                "email": "lopesoftware@bootcamp.com",
                "password": "pass12345"
            }
    }).then((response)=>{
        expect(response.status).to.eq(401)
    })
})