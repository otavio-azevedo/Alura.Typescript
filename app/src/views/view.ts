import { logExecutionTime } from "../decorators/log-execution-time.js";

export abstract class View<T>{ //abstract generic <T> class

    protected elemento: HTMLElement;
    private escape = false;

    constructor(selector: string, escape?: boolean) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Selector ${selector} dont exists.`);
        }

        if (escape)
            this.escape = escape;
    }

    protected abstract getTemplate(model: T): string; //necessary to override it in the child classes

    @logExecutionTime()
    public update(model: T): void {
        let template = this.getTemplate(model);

        if (this.escape) {
            template = template.replace('/<script>[\s\S]*?<\/script>/', '');
        }
        
        this.elemento.innerHTML = template;
    }

}