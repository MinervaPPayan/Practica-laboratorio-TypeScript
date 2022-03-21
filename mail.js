"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo_, direccion_) {
        this.Tipo = tipo_;
        this.Direccion = direccion_;
    }
    // Set y Get Tipo
    get _Tipo() {
        return this.Tipo;
    }
    set _Tipo(value) {
        this.Tipo = value;
    }
    // Set y Get Direccion
    get _Direccion() {
        return this.Direccion;
    }
    set _Direccion(value) {
        this.Direccion = value;
    }
    mostrarMails() {
        console.log("Tipo: " + this.Tipo, "\nDirección e-mail: " + this.Direccion + "\n");
    }
}
exports.Mail = Mail;
