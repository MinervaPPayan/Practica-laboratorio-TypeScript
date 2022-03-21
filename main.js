"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const telefono_1 = require("./telefono");
const mail_1 = require("./mail");
//declaración de direcciones
let direccionP1 = new direccion_1.Direccion("Carrera de los Cortijillos", 1, 3, "C", "04120", "La Cañada", "Almeria");
let direccionP2 = new direccion_1.Direccion("Julian Camarillo", 53, 1, "A", "28037", "Coslada", "Madrid");
let direccionP3 = new direccion_1.Direccion("Casas Nuevas", 7, 5, "B", "51003", "Principe", "Ceuta");
let nuevaDireccion = new direccion_1.Direccion("Rua Calada", 6, 4, "J", "32005", "Ourense", "Orense");
//declaración de telefonos
let telefonoM1 = new telefono_1.Telefono("Movil", 666147896);
let telefonoM2 = new telefono_1.Telefono("Movil", 657485210);
let telefonoM3 = new telefono_1.Telefono("Movil", 660514820);
let nuevoTelefono = new telefono_1.Telefono("Trabajo", 609232309);
//declaracion de mails
let mailT1 = new mail_1.Mail("Trabajo", "mgarcia@ventatodo.es");
let mailT2 = new mail_1.Mail("Trabajo", "sancheztorresjose@indra.es");
let mailT3 = new mail_1.Mail("Trabajo", "rigobertamenchu@modasrigoberta.es");
let nuevoMail = new mail_1.Mail("personal 2", "Jsanchez@gmail.com");
//declaracion de personas
let persona1 = new persona_1.Persona("Monica", "Garcia Lopez", 52, "34852469K", "1 de Enero", "Rosa", "Femenino", direccionP1, mailT1, telefonoM1, "Dependienta de VentaTodo");
let persona2 = new persona_1.Persona("Jose", "Sanchez Torres", 58, "21548763Q", "3 de Junio", "Azul", "Masculino", direccionP2, mailT2, telefonoM2, "Compañero de trabajo");
let persona3 = new persona_1.Persona("Rigoberta Menchu", "Morales Martinez", 21, "78541285N", "28 de Diciembre", "Negro", "Neutro", direccionP3, mailT3, telefonoM3, "Dependiente tienda de modas");
// Introducimos los objetos Persona en un array
let arrayPersonas = [persona1, persona2, persona3];
//Funcion mostrar lista de personas
function mostrarLista() {
    for (let i = 0; i < arrayPersonas.length; i++) {
        arrayPersonas[i].mostrarPersona();
    }
}
// Primer listado de las 3 personas
console.log("\n\nListado de personas");
mostrarLista();
//Segundo listado de las 3 personas habiendo introducido nueva direccion, telefono y mail, correspondiente de la busqueda por DNI: 21548763Q
console.log("\n\nListado de las 3 personas con los cambios ya hechos");
let modificado = false;
for (let i = 0; i < arrayPersonas.length; i++) {
    if (arrayPersonas[i]._DNI === "21548763Q") {
        arrayPersonas[i]._Direcciones = nuevaDireccion;
        arrayPersonas[i]._Mails = nuevoMail;
        arrayPersonas[i]._Telefonos = nuevoTelefono;
        modificado = true;
        break;
    }
}
if (modificado) {
    console.log("Se han añadido una nueva direccion, telefono y mail");
}
else {
    console.log("No se ha encontrado el DNI");
}
mostrarLista();
