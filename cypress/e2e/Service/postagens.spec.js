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
            method: 'POST',
            url: '/api/posts',
            headers:{
                Cookies: token
            },
            body:{
                text: "Postagem feita pelo QA"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
        })
    })
})

    describe('Consulta de Postagem', () => {
        beforeEach(()=>{
            cy.tokenJWT().then((auth)=>{
                token = auth
            })
        })

        let token
        it('Consultar Postagem',()=>{
            cy.request({
                method: 'GET',
                url: '/api/posts',
                headers:{
                    Cookies: token
                }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
        })
        it('Consultar Postagem por ID',()=>{
            cy.criarPosts(token,"Postagem feita pelo QA para Consulta ID").then((response)=>{
                let id = response.body._id
    
                cy.request({
                    method: 'GET',
                    url: `/api/posts/${id}`,
                    headers:{
                        Cookies: token
                    }
                }).then((response)=>{
                    expect(response.status).to.eq(200)
                    console.log(response)
                })
            })
            
    
        })
        
    });


    describe('Exlusão de Postagem', () => {
        beforeEach(()=>{
            cy.tokenJWT().then((auth)=>{
                token = auth
            })
        })

        let token
        it('Excluir Postagem',()=>{
            cy.criarPosts(token,"Postagem feita pelo QA para Consulta ID").then((response)=>{
                let id = response.body._id
    
                cy.request({
                    method: 'DELETE',
                    url: `/api/posts/${id}`,
                    headers:{
                        Cookies: token
                    }
                }).then((response)=>{
                    expect(response.status).to.eq(200)
                })
            })

        })
    });

    describe('Inserção de Like na Postagem', () => {
        beforeEach(()=>{
            cy.tokenJWT().then((auth)=>{
                token = auth
            })
        })

        let token
        it('Gerar like numa Postagem',()=>{
            cy.criarPosts(token,"Postagem feita pelo QA para Consulta ID").then((response)=>{
                let id = response.body._id
    
                cy.request({
                    method: 'PUT',
                    url: `/api/posts/like/${id}`,
                    headers:{
                        Cookies: token
                    }
                }).then((response)=>{
                    expect(response.status).to.eq(200)
                })
            })

        })
    });




