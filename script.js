

let opciones = prompt ("JUGUEMOS PIEDRA (1) PAPEL (2) O TIJERA (3)")
let min = 1
let max = 3

let pc = Math.floor(Math.random() * (max - min + 1) + min) 



if (pc == 1) {
   alert ( "pc escoje piedra")
}
if (pc == 2) {
    alert ("pc escoje papel")
}

if (pc == 3) {
    alert ("pc escoje tijera")
}   

if (opciones == pc) {
    alert ("EMPATE")
}   else if (opciones == 1 && pc == 2){ 
    alert ("ganaste")  
}else if (opciones == 2 && pc == 1){
    alert ("ganaste")
}else if (opciones == 3 && pc == 2){
    alert ("ganaste")   
}else{
    alert ("eliga algo hpta")
}





/*let numero1
let numero2

numero1 = parseInt (prompt("Digite su numero1"))
numero2 = parseInt (prompt("Digite su numero2"))


if(numero1 > numero2){
 alert ("el mayor es el: " + numero1)



}else if (numero1 === numero2) {
     alert ("los numeros son iguales: " + numero2)

}else{
    alert ("el mayor es el: " + numero2)
}
*/



