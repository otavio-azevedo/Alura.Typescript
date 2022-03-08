import { domInjector } from "../decorators/dom-injector.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { WeekDays } from "../enums/week-days.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();

    constructor() {
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

        this.cleanForm();
        this.refreshViews();
    }

    public importData(): void {
        this.negociacoesService
            .obterNegociacoes()
            .then(negociacoes => {
                for (let negociacao of negociacoes) {
                    this.negociacoes.add(negociacao);
                }

                this.negociacoesView.update(this.negociacoes);
            });
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