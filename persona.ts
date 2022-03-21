import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Mail} from './mail';

export class Persona{
    private Nombre: string;
    private Apellidos: string;
    private Edad: number;
    private DNI: string;
    private Cumpleanos: string;
    private ColorFavorito: string;
    private Sexo: string;
    private Direcciones: Direccion;
    private Mails: Mail;
    private Telefonos: Telefono;
    private Notas: string;
    constructor(_nombre:string, _apellidos:string, _edad:number, _dni:string, _cumpleanos:string, _colorfavorito:string, 
        _sexo:string, _direcciones:Direccion, _mails:Mail, _telefonos:Telefono, _notas:string){
        this.Nombre = _nombre;
        this.Apellidos = _apellidos;
        this.Edad = _edad;
        this.DNI = _dni;
        this.Cumpleanos = _cumpleanos;
        this.ColorFavorito = _colorfavorito;
        this.Sexo = _sexo;
        this.Direcciones = _direcciones;
        this.Mails = _mails;
        this.Telefonos = _telefonos;
        this.Notas = _notas;
    }
    // Set y Get Nombre
    public get _Nombre(): string {
        return this.Nombre;
    }
    public set _Nombre(value: string) {
        this.Nombre = value;
    }
    // Set y Get Apellidos
    public get _Apellidos(): string {
        return this.Apellidos;
    }
    public set _Apellidos(value: string) {
        this.Apellidos = value;
    }
    // Set y Get Edad
    public get _Edad(): number {
        return this.Edad;
    }
    public set _Edad(value: number) {
        this.Edad = value;
    }
    // Set y Get DNI
    public get _DNI(): string {
        return this.DNI;
    }
    public set _DNI(value: string) {
        this.DNI = value;
    }
    // Set y Get Cumpleaños
    public get _Cumpleanos(): string {
        return this.Cumpleanos;
    }
    public set _Cumpleanos(value: string) {
        this.Cumpleanos = value;
    }
    // Set y Get Color Favorito
    public get _ColorFavorito(): string {
        return this.ColorFavorito;
    }
    public set _ColorFavorito(value: string) {
        this.ColorFavorito = value;
    }
    // Set y Get Sexo
    public get _Sexo(): string {
        return this.Sexo;
    }
    public set _Sexo(value: string) {
        this.Sexo = value;
    }
    // Set y Get Direcciones
    public get _Direcciones(): Direccion {
        return this.Direcciones;
    }
    public set _Direcciones(value: Direccion) {
        this.Direcciones = value;
    }
    // Set y Get Mails
    public get _Mails(): Mail {
        return this.Mails;
    }
    public set _Mails(value: Mail) {
        this.Mails = value;
    }
    // Set y Get Telefonos
    public get _Telefonos(): Telefono {
        return this.Telefonos;
    }
    public set _Telefonos(value: Telefono) {
        this.Telefonos = value;
    }
    // Set y Get Notas
    public get _Notas(): string {
        return this.Notas;
    }
    public set _Notas(value: string) {
        this.Notas = value;
    }
    //Funcion Mostrar Persona
    mostrarPersona(): void{ 
        console.log("\nNombre: "+ this.Nombre, "\nApellidos: "+ this.Apellidos, "\nEdad: "+ this.Edad, "\nDNI: "+ this.DNI,
         "\nCumpleaños: "+ this.Cumpleanos, "\nColor favorito: "+ this.ColorFavorito, "\nSexo: "+ this.Sexo, "\n\nDirecciones:\n");


             this.Direcciones.mostrarDirecciones();

            console.log("Mails:\n"  );
             this.Mails.mostrarMails();

             console.log("Telefonos:\n"  );
            this.Telefonos.mostrarTelefonos();

        console.log("Notas: "+ this.Notas+"\n\n")
    }  
    //Funcion Comprobar DNI
    comprobarDni(dni:string):boolean{

        return dni === this.DNI;
    }  

 
}