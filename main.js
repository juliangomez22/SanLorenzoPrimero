// ==========================================
// SAN LORENZO PRIMERO
// SIMULADOR DE SOCIOS, JUGADORES Y PARTIDOS
// ==========================================

// DATOS GENERALES

const añoActual = new Date().getFullYear();
const cuotaMensual = 12000;
const precioEntrada = 15000;

// ==========================================
// CLASE JUGADOR
// ==========================================

class Jugador {
    constructor(nombre, posicion, numero, edad) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.numero = numero;
        this.edad = edad;
    }

    // Método para actualizar el número de camiseta.
    cambiarNumero(nuevoNumero) {
        this.numero = nuevoNumero;
    }
}

// ==========================================
// CREACIÓN DE OBJETOS
// ==========================================

const jugador1 = new Jugador(
    "Facundo Altamirano",
    "Arquero",
    1,
    29
);

const jugador2 = new Jugador(
    "Gastón Hernández",
    "Defensor",
    23,
    28
);

const jugador3 = new Jugador(
    "Nahuel Barrios",
    "Mediocampista",
    10,
    27
);

// Modificamos el número de camiseta de un jugador.

jugador1.cambiarNumero(12);

// Mostramos los resultados en consola.

console.log("===== JUGADORES CON CLASES Y OBJETOS =====");

console.log(jugador1);
console.log(jugador2);
console.log(jugador3);

// ==========================================
// ARRAY DE JUGADORES
// ==========================================

const jugadores = [
    jugador1.nombre,
    jugador2.nombre,
    jugador3.nombre,
    "Alexis Cuello",
    "Ezequiel Cerutti"
];

// ==========================================
// MOSTRAR JUGADORES - FOR...OF
// ==========================================

function mostrarJugadores() {
    let mensaje = "PLANTEL DE SAN LORENZO:\n\n";

    for (const jugador of jugadores) {
        mensaje += "Jugador: " + jugador + "\n";
    }

    alert(mensaje);
    console.log(mensaje);
}

// ==========================================
// AGREGAR JUGADORES - PUSH Y UNSHIFT
// ==========================================

function agregarJugador() {
    const nombre = prompt(
        "Ingresá el nombre del nuevo jugador:"
    );

    if (nombre === null || nombre.trim() === "") {
        alert("No ingresaste un nombre válido.");
        return;
    }

    const posicion = prompt(
        "¿Dónde querés agregarlo?\n" +
        "1. Al final\n" +
        "2. Al principio"
    );

    if (posicion === "1") {
        jugadores.push(nombre.trim());
        alert("Jugador agregado al final del plantel.");
    } else if (posicion === "2") {
        jugadores.unshift(nombre.trim());
        alert("Jugador agregado al principio del plantel.");
    } else {
        alert("Opción inválida.");
        return;
    }

    mostrarJugadores();
}

// ==========================================
// ELIMINAR JUGADOR - POP
// ==========================================

function eliminarJugador() {
    if (jugadores.length === 0) {
        alert("No hay jugadores para eliminar.");
        return;
    }

    const eliminado = jugadores.pop();

    alert("Se ha eliminado al jugador: " + eliminado);
    console.log("Jugador eliminado:", eliminado);
}

// ==========================================
// BUSCAR JUGADOR - INCLUDES E INDEXOF
// ==========================================

function buscarJugador() {
    const nombre = prompt(
        "¿Qué jugador querés buscar?"
    );

    if (nombre === null || nombre.trim() === "") {
        alert("Búsqueda cancelada o vacía.");
        return;
    }

    const listaMinusculas = [];

    for (const jugador of jugadores) {
        listaMinusculas.push(jugador.toLowerCase());
    }

    const buscado = nombre.trim().toLowerCase();

    if (listaMinusculas.includes(buscado)) {
        const indice = listaMinusculas.indexOf(buscado);

        alert(
            "Jugador encontrado: " + jugadores[indice] +
            "\nÍndice: " + indice
        );
    } else {
        alert("El jugador no se encuentra en el plantel.");
    }
}

// ==========================================
// ACTUALIZAR JUGADOR - SPLICE
// ==========================================

function actualizarJugador() {
    mostrarJugadores();

    const respuesta = prompt(
        "Ingresá el índice del jugador que querés modificar.\n" +
        "Los índices comienzan en 0."
    );

    if (respuesta === null || respuesta.trim() === "") {
        return;
    }

    const indice = Number(respuesta);

    if (
        !Number.isInteger(indice) ||
        indice < 0 ||
        indice >= jugadores.length
    ) {
        alert("Índice inválido.");
        return;
    }

    const nuevoJugador = prompt(
        "Nuevo nombre para " + jugadores[indice] + ":"
    );

    if (
        nuevoJugador === null ||
        nuevoJugador.trim() === ""
    ) {
        alert("No ingresaste un nombre válido.");
        return;
    }

    jugadores.splice(indice, 1, nuevoJugador.trim());

    alert("Jugador actualizado correctamente.");
    mostrarJugadores();
}

// ==========================================
// ARRAY DE PARTIDOS
// ==========================================

const partidos = [
    "San Lorenzo vs Boca Juniors",
    "San Lorenzo vs River Plate",
    "San Lorenzo vs Racing",
    "San Lorenzo vs Independiente",
    "San Lorenzo vs Huracán"
];

// ==========================================
// MOSTRAR FIXTURE - FOR...OF
// ==========================================

function mostrarPartidos() {
    let mensaje = "PRÓXIMOS PARTIDOS:\n\n";

    for (const partido of partidos) {
        mensaje += partido + "\n";
    }

    alert(mensaje);
    console.log(mensaje);
}

// ==========================================
// AGREGAR PARTIDO - PUSH
// ==========================================

function agregarPartido() {
    const nuevoPartido = prompt(
        "Ingresá el nuevo partido:"
    );

    if (
        nuevoPartido === null ||
        nuevoPartido.trim() === ""
    ) {
        alert("Ingresá un partido válido.");
        return;
    }

    partidos.push(nuevoPartido.trim());

    alert("Partido agregado correctamente.");
    mostrarPartidos();
}

// ==========================================
// CALCULAR CUOTA DE SOCIO
// ==========================================

function calcularCuota(meses) {
    let total = meses * cuotaMensual;

    if (meses >= 6) {
        total = total * 0.9;
    }

    return total;
}

// ==========================================
// SIMULADOR DE SOCIOS
// ==========================================

function simularSocio() {
    const nombre = prompt(
        "¿Cuál es tu nombre?"
    );

    if (nombre === null || nombre.trim() === "") {
        alert("Ingresá un nombre válido.");
        return;
    }

    const nacimiento = prompt(
        "¿En qué año naciste?"
    );

    if (nacimiento === null || nacimiento.trim() === "") {
        return;
    }

    const añoNacimiento = Number(nacimiento);

    if (
        !Number.isInteger(añoNacimiento) ||
        añoNacimiento < 1900 ||
        añoNacimiento > añoActual
    ) {
        alert("Año de nacimiento inválido.");
        return;
    }

    const cantidad = prompt(
        "¿Cuántos meses de cuota querés abonar?"
    );

    if (cantidad === null || cantidad.trim() === "") {
        return;
    }

    const meses = Number(cantidad);

    if (!Number.isInteger(meses) || meses <= 0) {
        alert("Ingresá una cantidad válida.");
        return;
    }

    const edad = añoActual - añoNacimiento;
    const total = calcularCuota(meses);

    let mensaje =
        "¡Bienvenido a San Lorenzo Primero!\n\n" +
        "Socio: " + nombre.trim() + "\n" +
        "Edad aproximada: " + edad + " años\n" +
        "Meses de cuota: " + meses + "\n" +
        "Cuota mensual: $" +
        cuotaMensual.toLocaleString("es-AR") + "\n" +
        "Total a pagar: $" +
        total.toLocaleString("es-AR");

    if (meses >= 6) {
        mensaje += "\nDescuento aplicado: 10%";
    } else {
        mensaje += "\nSin descuento.";
    }

    alert(mensaje);
    console.log(mensaje);
}

// ==========================================
// SIMULADOR DE ENTRADAS
// ==========================================

function comprarEntradas() {
    const cantidad = prompt(
        "¿Cuántas entradas querés comprar?"
    );

    if (cantidad === null || cantidad.trim() === "") {
        return;
    }

    const entradas = Number(cantidad);

    if (!Number.isInteger(entradas) || entradas <= 0) {
        alert("Ingresá una cantidad válida.");
        return;
    }

    const total = entradas * precioEntrada;

    let mensaje =
        "===== COMPRA DE ENTRADAS =====\n\n" +
        "Club: San Lorenzo de Almagro\n" +
        "Cantidad de entradas: " + entradas + "\n" +
        "Precio individual: $" +
        precioEntrada.toLocaleString("es-AR") + "\n" +
        "Total a pagar: $" +
        total.toLocaleString("es-AR") + "\n\n" +
        "¡Gracias por acompañar al Ciclón!";

    alert(mensaje);
    console.log(mensaje);
}

// ==========================================
// MENÚ PRINCIPAL - WHILE Y SWITCH
// ==========================================

function iniciarSimulador() {
    let opcion = "";

    while (opcion !== "10") {
        opcion = prompt(
            "SAN LORENZO PRIMERO\n" +
            "¡Pasión por el Ciclón!\n\n" +
            "1. Ver plantel de jugadores\n" +
            "2. Agregar jugador\n" +
            "3. Eliminar último jugador\n" +
            "4. Buscar jugador\n" +
            "5. Actualizar jugador\n" +
            "6. Ver próximos partidos\n" +
            "7. Agregar partido\n" +
            "8. Calcular cuota de socio\n" +
            "9. Comprar entradas\n" +
            "10. Salir\n\n" +
            "Elegí una opción:"
        );

        if (opcion === null) {
            break;
        }

        switch (opcion) {
            case "1":
                mostrarJugadores();
                break;

            case "2":
                agregarJugador();
                break;

            case "3":
                eliminarJugador();
                break;

            case "4":
                buscarJugador();
                break;

            case "5":
                actualizarJugador();
                break;

            case "6":
                mostrarPartidos();
                break;

            case "7":
                agregarPartido();
                break;

            case "8":
                simularSocio();
                break;

            case "9":
                comprarEntradas();
                break;

            case "10":
                alert(
                    "¡Gracias por visitar San Lorenzo Primero!\n" +
                    "¡Vamos Ciclón!"
                );
                break;

            default:
                alert("Opción inválida. Intentá nuevamente.");
        }
    }
}

// ==========================================
// INICIAR PROGRAMA
// ==========================================

iniciarSimulador();
