"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(_calle, _numero, _piso, _letra, _cp, _poblacion, _provincia) {
        this.Calle = _calle;
        this.Numero = _numero;
        this.Piso = _piso;
        this.Letra = _letra;
        this.CodigoPostal = _cp;
        this.Poblacion = _poblacion;
        this.Provincia = _provincia;
    }
    // Set y Get Calle
    get _Calle() {
        return this.Calle;
    }
    set _Calle(value) {
        this.Calle = value;
    }
    // Set y Get Numero
    get _Numero() {
        return this.Numero;
    }
    set _Numero(value) {
        this.Numero = value;
    }
    // Set y Get Piso
    get _Piso() {
        return this.Piso;
    }
    set _Piso(value) {
        this.Piso = value;
    }
    // Set y Get Letra
    get _Letra() {
        return this.Letra;
    }
    set _Letra(value) {
        this.Letra = value;
    }
    // Set y Get CP
    get _CodigoPostal() {
        return this.CodigoPostal;
    }
    set _CodigoPostal(value) {
        this.CodigoPostal = value;
    }
    // Set y Get Poblacion
    get _Poblacion() {
        return this.Poblacion;
    }
    set _Poblacion(value) {
        this.Poblacion = value;
    }
    // Set y Get Provincia
    get _Provincia() {
        return this.Provincia;
    }
    set _Provincia(value) {
        this.Provincia = value;
    }
    mostrarDirecciones() {
        console.log("Calle: " + this.Calle, "\nNúmero: " + this.Numero, "\nPiso: " + this.Piso, "\nLetra: " + this.Letra, "\nCódigo Postal: " + this.CodigoPostal, "\nPoblación: " + this.Poblacion, "\nProvincia: " + this.Provincia + "\n");
    }
}
exports.Direccion = Direccion;
