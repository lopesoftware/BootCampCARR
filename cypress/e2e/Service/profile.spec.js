/// <reference types="cypress" />

import perfil from "../../fixtures/perfil.json"
import experiencia from "../../fixtures/experiencia.json"

describe('Seleção de Perfil', () => {
    beforeEach(()=>{
        cy.tokenJWT().then((auth)=>{
            token = auth
        })
    })

    let token
    it('Selecionar o perfil logado',()=>{
    
            cy.request({
                method: 'GET',
                url: '/api/profile/me',
                headers:{
                    Cookies: token
                }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
    
    })

});

describe('Atualização de Perfil do usuário', () => {
    beforeEach(()=>{
        cy.tokenJWT().then((auth)=>{
            token = auth
        })
    })

    let token
    it('Atualizar perfil',()=>{
    
            cy.request({
                method: 'POST',
                url: '/api/profile',
                headers:{
                    Cookies: token
                },
                body: {
                    "company": perfil.company,
                    "status": perfil.status,
                    "location": perfil.location,
                    "website": perfil.website,
                    "skills": perfil.skills,
                    "bio": perfil.bio,
                    "githubusername": perfil.githubusername
                  }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
    
    })

});

describe('Criação de Perfil', () => {
    beforeEach(()=>{
        cy.criarUsuario().then((auth)=>{
            token = auth
        })
    })

    let token
    it('Criar perfil do usuário',()=>{
            cy.request({
                method: 'POST',
                url: '/api/profile',
                headers:{
                    Cookies: token
                },
                body: {
                    "company": perfil.company,
                    "status": perfil.status,
                    "location": perfil.location,
                    "website": perfil.website,
                    "skills": perfil.skills,
                    "bio": perfil.bio,
                    "githubusername": perfil.githubusername
                  }
            }).then((response)=>{
                expect(response.status).to.eq(201)
            })
    
    })

});

describe('Deleção de conta de usuário', () => {
    beforeEach(()=>{
        cy.criarUsuario().then((auth)=>{
            token = auth
        })
    })

    let token
    it('Deletar conta de usuário',()=>{
            cy.request({
                method: 'DELETE',
                url: '/api/profile',
                headers:{
                    Cookies: token
                }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
    
    })

});

describe('Adição de Experiência Profisional', () => {
    beforeEach(()=>{
        cy.tokenJWT().then((auth)=>{
            token = auth
        })
    })

    let token
    it('Adicionar experiência profissional',()=>{
            cy.request({
                method: 'PUT',
                url: '/api/profile/experience',
                headers:{
                    Cookies: token
                },
                body:{
                    "title": experiencia[0].posicao,
                    "company": experiencia[0].empresa,
                    "location": experiencia[0].local,
                    "from": experiencia[0].dataInicio,
                    "to": experiencia[0].dataFim,
                    "current": false,
                    "description": experiencia[0].descricao
                  }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
    
    })

});