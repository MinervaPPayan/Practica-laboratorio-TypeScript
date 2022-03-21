

export class Telefono{
    private Tipo: string;
    private Numero: number;
    constructor(_tipo:string, _numero:number){
        this.Tipo = _tipo;
        this.Numero = _numero;
    }
     // Set y Get Tipo
    public get _Tipo(): string {
        return this.Tipo;
    }
    public set _Tipo(value: string) {
        this.Tipo = value;
    }
    // Set y Get Numero
    public get _Numero(): number {
        return this.Numero;
    }
    public set _Numero(value: number) {
        this.Numero = value;
    }
    mostrarTelefonos():void{
        console.log("Tipo: "+this.Tipo, "\nNúmero: "+ this.Numero+ "\n")
    }
}