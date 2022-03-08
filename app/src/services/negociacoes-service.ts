import { NegociacoesImport } from "../interfaces/negociacoes-import.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((data: NegociacoesImport[]) => {
                return data.map(item => {
                    return new Negociacao(
                        new Date(),
                        item.vezes,
                        item.montante)
                })
            });
    }

}