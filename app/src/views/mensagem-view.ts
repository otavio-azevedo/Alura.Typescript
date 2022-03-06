import { View } from "./view.js";

export class MensagemView extends View<string> {
    
    protected getTemplate(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}