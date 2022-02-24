import { View } from "./view.js";
export class NegociacoesView extends View {
    getTemplate(model) {
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
                ${model.list().map(item => {
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
    dateFormater(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
