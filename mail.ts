

export class Mail{
    private Tipo: string;
    private Direccion: string;
    constructor(tipo_:string, direccion_:string){
       this.Tipo = tipo_;
       this.Direccion = direccion_;
    }
     // Set y Get Tipo
    public get _Tipo(): string {
         return this.Tipo;
    }
    public set _Tipo(value: string) {
        this.Tipo = value;
    }
    // Set y Get Direccion
    public get _Direccion(): string {
        return this.Direccion;
    }
    public set _Direccion(value: string) {
        this.Direccion = value;
    }
    mostrarMails():void{
        console.log("Tipo: "+this.Tipo, "\nDirección e-mail: "+ this.Direccion+ "\n")
    }
}