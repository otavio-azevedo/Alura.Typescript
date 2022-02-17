export class Negociacao {
    //#region Default way to declare props and constructor
    /*
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    */
    //#endregion
    //Alternative way to simplify prop and constructor syntax
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime()); //defensive way to protect date prop changes outside class ex.:_data.setDate(5);
    }
}
