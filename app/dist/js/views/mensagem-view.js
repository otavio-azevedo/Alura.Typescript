import { View } from "./view.js";
export class MensagemView extends View {
    getTemplate(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
//# sourceMappingURL=mensagem-view.js.map