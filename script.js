
let jugador = prompt ("vamos a jugar  0-Piedra, 1-Papel, 2-Tijera")
let min = 1
let max = 3
let pc = Math.floor(Math.random() * (max-min+1)+min)


if (pc == 1){
    alert ("El pc escoje piedra" )
    
}
if (pc == 2){
    alert ("El pc escoje papel" )
}
if (pc == 3){
    alert ("El pc escoje tijera" )
}
if (jugador == pc){
    alert ("empate")
}   else if ((jugador == 1 && pc == 2) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
    alert ("ganaste")
}else {
    alert ("escojar una opcion valida - perdiste")
}
