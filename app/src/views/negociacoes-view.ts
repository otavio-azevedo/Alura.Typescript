import { Negociacoes } from "../models/negociacoes.js";
import { escape } from "../decorators/escape.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @escape
    protected getTemplate(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.list().map(item=>{
                    return `
                        <tr>
                            <td>${this.dateFormater(item.data)}</td>
                            <td>${item.quantidade}</td>
                            <td>${item.valor}</td>
                        </tr>
                    `;
                }).join('')}   
            </tbody>
        </table>
        `;
    }

    private dateFormater(data: Date): string{
        return new Intl.DateTimeFormat().format(data);
    }
}