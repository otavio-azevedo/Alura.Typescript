var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { WeekDays } from "../enums/week-days.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    add() {
        const negociacao = Negociacao.Create(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isWeekDay(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas.');
            return;
        }
        this.negociacoes.add(negociacao);
        console.log(this.negociacoes.list());
        this.cleanForm();
        this.refreshViews();
    }
    isWeekDay(data) {
        return data.getDay() > WeekDays.SUNDAY
            && data.getDay() < WeekDays.SATURDAY;
    }
    cleanForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    refreshViews() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
__decorate([
    logExecutionTime()
], NegociacaoController.prototype, "add", null);
