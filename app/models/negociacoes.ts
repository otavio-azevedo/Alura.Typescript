import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []; //generics: https://www.typescriptlang.org/docs/handbook/2/generics.html

    public add(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public list(): ReadonlyArray<Negociacao> { //ReadonlyArray immutable array 
        return this.negociacoes;
    }
}