export class View {
    constructor(selector, escape) {
        this.escape = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Selector ${selector} dont exists.`);
        }
        if (escape)
            this.escape = escape;
    }
    update(model) {
        let template = this.getTemplate(model);
        if (this.escape) {
            template = template.replace('/<script>[\s\S]*?<\/script>/', '');
        }
        this.elemento.innerHTML = template;
    }
}
