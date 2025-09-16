let opciones = ["✊", "🧻", "✂️"];
let puntosUsuario = 0;
let puntosPC = 0;

const juegoDiv = document.createElement('div');
juegoDiv.innerHTML = `
    <h2>Piedra, Papel o Tijera</h2>
    <p>Elige una opción:</p>
    <button id="piedra">✊</button>
    <button id="papel">🧻</button>
    <button id="tijera">✂️</button>
    <p id="resultado"></p>
    <p id="marcador">Tú 0 - PC 0</p>
    <p id="final"></p>
`;
document.body.appendChild(juegoDiv);

function obtenerPC() {
    let indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}
function reiniciarPartida() {
    puntosUsuario = 0;
    puntosPC = 0;
    document.getElementById("resultado").textContent = "";
    document.getElementById("marcador").textContent = "Tú 0 - PC 0";
    document.getElementById("final").textContent = "";
}

function jugar(opcion) {
    if (puntosUsuario < 2 && puntosPC < 2) {
        let PC = obtenerPC();
        let resultado = "";

        if (
            (opcion == "✊" && PC == "✂️") ||
            (opcion == "🧻" && PC == "✊") ||
            (opcion == "✂️" && PC == "🧻")
        ) {
            puntosUsuario++;
            resultado = `La PC eligió: ${PC}. ¡Ganaste esta ronda! 🎉`;
        } else if (opcion == PC) {
            resultado = `La PC eligió: ${PC}. ¡Empate!`;
        } else {
            puntosPC++;
            resultado = `La PC eligió: ${PC}. ¡Perdiste esta ronda! 🏴‍☠️`;
        }

        document.getElementById("resultado").textContent = resultado;
        document.getElementById("marcador").textContent = `Tú ${puntosUsuario} - PC ${puntosPC}`;

        if (puntosUsuario == 2 || puntosPC == 2) {
            document.getElementById("final").textContent =
                puntosUsuario == 2
                    ? "¡Ganaste la partida 2 de 3! 🏆"
                    : "¡Perdiste la partida 2 de 3! Mejor suerte la próxima vez.";
        }
    }
}

document.getElementById("piedra").onclick = () => jugar("✊");
document.getElementById("papel").onclick = () => jugar("🧻");
document.getElementById("tijera").onclick = () => jugar("✂️");
document.getElementById("reset").onclick = reiniciarPartida;


