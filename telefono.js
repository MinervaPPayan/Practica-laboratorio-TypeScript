"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(_tipo, _numero) {
        this.Tipo = _tipo;
        this.Numero = _numero;
    }
    // Set y Get Tipo
    get _Tipo() {
        return this.Tipo;
    }
    set _Tipo(value) {
        this.Tipo = value;
    }
    // Set y Get Numero
    get _Numero() {
        return this.Numero;
    }
    set _Numero(value) {
        this.Numero = value;
    }
    mostrarTelefonos() {
        console.log("Tipo: " + this.Tipo, "\nNúmero: " + this.Numero + "\n");
    }
}
exports.Telefono = Telefono;
