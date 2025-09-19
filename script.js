


let min = 1;
let max = 3;
let puntoj = 0;
let puntoc = 0;

while (puntoj < 3 && puntoc < 3) {
    let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();
    let computadora = Math.floor(Math.random() * (max - min + 1)) + min;   

    let computadoraTexto = "";
    if (computadora === 1) {
        computadoraTexto = "piedra";
    } else if (computadora === 2) {
        computadoraTexto = "papel";
    } else if (computadora === 3) {
        computadoraTexto = "tijera";
    }
    alert("La computadora eligió " + computadoraTexto);

    // Map player input to number
    let jugadorNum = 0;
    if (jugador === "piedra") {
        jugadorNum = 1;
    } else if (jugador === "papel") {
        jugadorNum = 2;
    } else if (jugador === "tijera") {
        jugadorNum = 3;
    } else {
        alert("Entrada inválida, intenta de nuevo (piedra, papel o tijera)");
        continue;
    }

    if (jugadorNum === computadora) {
        alert("Empate");
    } else if (
        (jugadorNum === 1 && computadora === 3) ||
        (jugadorNum === 2 && computadora === 1) ||
        (jugadorNum === 3 && computadora === 2)
    ) {
        alert("Ganaste");
        puntoj++;
    } else {
        alert("Perdiste");
        puntoc++;
    }

    alert("Puntos jugador: " + puntoj + " Puntos computadora: " + puntoc);
}

if (puntoj === 3) {
    alert("Felicidades, ganaste el juego");
}
if (puntoc === 3) {
    alert("Lo siento, la computadora ganó el juego");
}