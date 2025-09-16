
const opciones = ["piedra", "papel", "tijera"];
let victoriasJugador = 0;
let victoriasPC = 0;
let ronda = 1;

while (victoriasJugador < 2 && victoriasPC < 2) {
  let eleccionJugador = prompt(`Ronda ${ronda}: Elige piedra, papel o tijera`);
  if (!eleccionJugador) break; // si cancela, salir del juego
  eleccionJugador = eleccionJugador.toLowerCase();

  if (!opciones.includes(eleccionJugador)) {
    alert("Opción no válida. Intenta de nuevo.");
    continue; // volver a pedir en la misma ronda
  }

  const eleccionPC = opciones[Math.floor(Math.random() * 3)];
  alert(`Tú elegiste: ${eleccionJugador}\nPC eligió: ${eleccionPC}`);

  if (eleccionJugador === eleccionPC) {
    alert("Empate en esta ronda.");
  } else if (
    (eleccionJugador === "piedra" && eleccionPC === "tijera") ||
    (eleccionJugador === "papel" && eleccionPC === "piedra") ||
    (eleccionJugador === "tijera" && eleccionPC === "papel")
  ) {
    victoriasJugador++;
    alert("¡Ganaste esta ronda!");
  } else {
    victoriasPC++;
    alert("Perdiste esta ronda.");
  }

  alert(`Marcador actual:\nJugador: ${victoriasJugador}\nPC: ${victoriasPC}`);
  ronda++;
}

if (victoriasJugador === 2) {
  alert("🎉 ¡Ganaste la partida al mejor de 3!");
} else if (victoriasPC === 2) {
  alert("😞 Perdiste la partida al mejor de 3.");
} else {
  alert("Juego cancelado.");
}

