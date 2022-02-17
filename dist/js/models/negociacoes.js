export class Negociacoes {
    constructor() {
        this.negociacoes = []; //generics: https://www.typescriptlang.org/docs/handbook/2/generics.html
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
