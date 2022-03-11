export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    list() {
        return this.negociacoes;
    }
    forText() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    areEqual(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.list());
    }
}
//# sourceMappingURL=negociacoes.js.map