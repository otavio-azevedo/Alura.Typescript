export class View {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Selector ${selector} dont exists.`);
        }
    }
    update(model) {
        let template = this.getTemplate(model);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map