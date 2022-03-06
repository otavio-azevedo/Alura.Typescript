import { logExecutionTime } from "../decorators/log-execution-time.js";
import { WeekDays } from "../enums/week-days.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement; //casting necessary  ("strictNullChecks": true)
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @logExecutionTime()
    public add(): void {

        const negociacao = Negociacao.Create(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.isWeekDay(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.')
            return;
        }

        this.negociacoes.add(negociacao);
        console.log(this.negociacoes.list());
        this.cleanForm();
        this.refreshViews();
    }

    private isWeekDay(data: Date): boolean {
        return data.getDay() > WeekDays.SUNDAY
            && data.getDay() < WeekDays.SATURDAY;
    }

    private cleanForm(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private refreshViews(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}