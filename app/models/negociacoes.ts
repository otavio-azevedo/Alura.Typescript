import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []; //generics: https://www.typescriptlang.org/docs/handbook/2/generics.html

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> { //ReadonlyArray immutable array 
        return this.negociacoes;
    }
}