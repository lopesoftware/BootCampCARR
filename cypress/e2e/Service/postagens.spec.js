/// <reference types="cypress" />

describe('Criação de Postagens', ()=>{
let token

    beforeEach(()=>{
        cy.tokenJWT().then((auth)=>{
            token = auth
        })
    })
    
    it('Criar Postagem',()=>{
        cy.request({
            method: '',
            url: '/api/posts',
            headers:{
                Cookies: token
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })
})