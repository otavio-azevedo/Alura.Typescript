import { Model } from "../interfaces/model.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Model<Negociacoes> {

    private negociacoes: Array<Negociacao> = []; //generics: https://www.typescriptlang.org/docs/handbook/2/generics.html

    public add(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public list(): ReadonlyArray<Negociacao> { //ReadonlyArray immutable array 
        return this.negociacoes;
    }

    public forText(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public areEqual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.list());
    }
}