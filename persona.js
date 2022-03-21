"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(_nombre, _apellidos, _edad, _dni, _cumpleanos, _colorfavorito, _sexo, _direcciones, _mails, _telefonos, _notas) {
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
    get _Nombre() {
        return this.Nombre;
    }
    set _Nombre(value) {
        this.Nombre = value;
    }
    // Set y Get Apellidos
    get _Apellidos() {
        return this.Apellidos;
    }
    set _Apellidos(value) {
        this.Apellidos = value;
    }
    // Set y Get Edad
    get _Edad() {
        return this.Edad;
    }
    set _Edad(value) {
        this.Edad = value;
    }
    // Set y Get DNI
    get _DNI() {
        return this.DNI;
    }
    set _DNI(value) {
        this.DNI = value;
    }
    // Set y Get Cumpleaños
    get _Cumpleanos() {
        return this.Cumpleanos;
    }
    set _Cumpleanos(value) {
        this.Cumpleanos = value;
    }
    // Set y Get Color Favorito
    get _ColorFavorito() {
        return this.ColorFavorito;
    }
    set _ColorFavorito(value) {
        this.ColorFavorito = value;
    }
    // Set y Get Sexo
    get _Sexo() {
        return this.Sexo;
    }
    set _Sexo(value) {
        this.Sexo = value;
    }
    // Set y Get Direcciones
    get _Direcciones() {
        return this.Direcciones;
    }
    set _Direcciones(value) {
        this.Direcciones = value;
    }
    // Set y Get Mails
    get _Mails() {
        return this.Mails;
    }
    set _Mails(value) {
        this.Mails = value;
    }
    // Set y Get Telefonos
    get _Telefonos() {
        return this.Telefonos;
    }
    set _Telefonos(value) {
        this.Telefonos = value;
    }
    // Set y Get Notas
    get _Notas() {
        return this.Notas;
    }
    set _Notas(value) {
        this.Notas = value;
    }
    //Funcion Mostrar Persona
    mostrarPersona() {
        console.log("\nNombre: " + this.Nombre, "\nApellidos: " + this.Apellidos, "\nEdad: " + this.Edad, "\nDNI: " + this.DNI, "\nCumpleaños: " + this.Cumpleanos, "\nColor favorito: " + this.ColorFavorito, "\nSexo: " + this.Sexo, "\n\nDirecciones:\n");
        this.Direcciones.mostrarDirecciones();
        console.log("Mails:\n");
        this.Mails.mostrarMails();
        console.log("Telefonos:\n");
        this.Telefonos.mostrarTelefonos();
        console.log("Notas: " + this.Notas + "\n\n");
    }
    //Funcion Comprobar DNI
    comprobarDni(dni) {
        return dni === this.DNI;
    }
}
exports.Persona = Persona;
