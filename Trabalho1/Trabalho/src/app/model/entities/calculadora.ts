export class Calculadora{
    private _primeiroNumero:number;
    private _segundoNumero:number;
    private _escolha:number;
    constructor(primeiroNumero:number,segundoNumero:number,escolha:number){
        this._primeiroNumero=primeiroNumero;
        this._segundoNumero=segundoNumero;
        this._escolha=escolha;
    }
    public get primeiroNumero() :number{
        return this._primeiroNumero;
    }
      
    public set primeiroNumero(primeiroNumero:number){
        this._primeiroNumero = primeiroNumero;
    }
    public get segundoNumero() :number{
        return this._segundoNumero;
    }
      
    public set segundoNumero(segundoNumero: number){
        this._segundoNumero = segundoNumero;
    }
    public get escolha() : number{
    return this._escolha;
    }  

    public set escolha(escolha:number){
    this._escolha = escolha;
    }

      
}