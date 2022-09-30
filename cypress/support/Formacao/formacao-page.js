class formacaoAcademica {
    get #escola() {return cy.get('[data-test="education-school"]')}
    get #grau() {return cy.get('[data-test="education-degree"]')}
    get #curso() {return cy.get('[data-test="education-fieldOfStudy"]')}
    get #datainicio() {return cy.get('#from')}
    get #dataFim() {return cy.get('#to')}
    get #descricao() {return cy.get('[data-test="education-description"]')}
    get #btAddFormacao() {return cy.get('[data-test="education-submit"]')}
    get #chkCursando() {return cy.get('[name="current"]')}

    addFormacao(escola,grau,curso,datainicio,dataFim,descricao){
        this.#escola.type(escola)
        this.#grau.type(grau)
        this.#curso.type(curso)
        this.#datainicio.type(datainicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#btAddFormacao.click()
    }

    addFormacaoCursando(escola,grau,curso,datainicio,descricao){
        this.#escola.type(escola)
        this.#grau.type(grau)
        this.#curso.type(curso)
        this.#datainicio.type(datainicio)
        this.#chkCursando.click()
        this.#descricao.type(descricao)
        this.#btAddFormacao.click()
    }

}

module.exports = new formacaoAcademica()