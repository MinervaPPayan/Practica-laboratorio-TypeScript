

export class Direccion{
    private Calle: string;
    private Numero: number;
    private Piso: number;
    private Letra: string;
    private CodigoPostal: string;
    private Poblacion: string;
    private Provincia: string;
    constructor(_calle:string, _numero:number, _piso:number, _letra:string, _cp:string, _poblacion:string, _provincia:string){
        this.Calle = _calle;
        this.Numero = _numero;
        this.Piso = _piso;
        this.Letra = _letra;
        this.CodigoPostal = _cp;
        this.Poblacion = _poblacion;
        this.Provincia = _provincia;
    }
    // Set y Get Calle
    public get _Calle(): string {
        return this.Calle;
    }
    public set _Calle(value: string) {
        this.Calle = value;
    }
    // Set y Get Numero
    public get _Numero(): number {
        return this.Numero;
    }
    public set _Numero(value: number) {
        this.Numero = value;
    }
    // Set y Get Piso
    public get _Piso(): number {
        return this.Piso;
    }
    public set _Piso(value: number) {
        this.Piso = value;
    }
    // Set y Get Letra
    public get _Letra(): string {
        return this.Letra;
    }
    public set _Letra(value: string) {
        this.Letra = value;
    }
    // Set y Get CP
    public get _CodigoPostal(): string {
        return this.CodigoPostal;
    }
    public set _CodigoPostal(value: string) {
        this.CodigoPostal = value;
    }
    // Set y Get Poblacion
    public get _Poblacion(): string {
        return this.Poblacion;
    }
    public set _Poblacion(value: string) {
        this.Poblacion = value;
    }
    // Set y Get Provincia
    public get _Provincia(): string {
        return this.Provincia;
    }
    public set _Provincia(value: string) {
        this.Provincia = value;
    }
    mostrarDirecciones(): void{ 
        console.log("Calle: "+ this.Calle, "\nNúmero: "+ this.Numero, "\nPiso: "+ this.Piso, "\nLetra: "+ this.Letra,
         "\nCódigo Postal: "+ this.CodigoPostal, "\nPoblación: "+ this.Poblacion, "\nProvincia: "+ this.Provincia+"\n")
    }
}



