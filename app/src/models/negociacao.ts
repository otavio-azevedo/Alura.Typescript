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
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number) { }

    get data(): Date {
        return new Date(this._data.getTime()); //defensive way to protect date prop changes outside class ex.:_data.setDate(5);
    }

    public static Create(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const regExp = /-/g; //search all '-'
        const date = new Date(dataString.replace(regExp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
} 