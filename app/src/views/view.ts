export abstract class View<T>{ //abstract generic <T> class

    protected elemento: HTMLElement;

    constructor(selector: string) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Selector ${selector} dont exists.`);
        }

    }

    protected abstract getTemplate(model: T): string; //necessary to override it in the child classes

    public update(model: T): void {
        let template = this.getTemplate(model);
        this.elemento.innerHTML = template;
    }

}