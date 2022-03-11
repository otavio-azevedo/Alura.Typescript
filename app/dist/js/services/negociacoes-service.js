import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((data) => {
            return data.map(item => {
                return new Negociacao(new Date(), item.vezes, item.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map