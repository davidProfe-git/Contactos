// //sintaxis basica 

// //tipos de datos nativos
// let texto = "texto";
// let entero =5 
// let decimal = 5.4
// let objeto ={nombre :"Juan"}
// let indefinido;
// let nulo = null
// let boleano = true


// //console.log(typeof(texto))
// //console.log(typeof(entero))
// //console.log(typeof(decimal))

// //variables y constantes 
// // let numero1 = 5
// // let numero2 = 5
// // numero1 = parseInt (prompt("¿ingresa un numero?"))
// // numero2 = parseInt (prompt("¿ingresa otro numero?"))



// //estructuras de control
// //if (numero1 > numero2)
//   //  {
// //     alert("El numero es mayor es:"+ numero1)
// // }
// // else if(numero1 === numero2){
// //     alert("Son iguales")
// // }
// // else{
// //     alert("Numero ,as mayor es:"+ numero2)
// // }


// //Juego 
// //let juego = ""
// //let numero3 = 3
// //let numero4 = 4
// //let numero5 = 5
// //juego = parseInt(prompt("Elije : Piedra, Papel ,Tijera"))
// //numero3 = parseInt(prompt( "Piedra"))
// //numero4 = parseInt(prompt("Papel"))
// //numero5 = parseInt(prompt("Tijera"))

// //if( numero3 > numero5  ){
//   //  alert("Ganaste" + numero3 )
// //}
// //else if(numero3 < numero4){
//   //  alert("Perdiste" + numero3 )
// //}
// //else if(numero2 < numero5){
//  //   alert("Perdiste" + numero2 )
// //}
// //else{
//  //   alert("Intenta de nuevo")
// //}
let victorias_usuario = 0
let victoria_pc = 0
let min = 1
let max = 3
let partidas = 3 
let empates = 0
while ( victorias_usuario < 3 && victoria_pc <  3   )
  { 
let opcion = prompt ("Elige una opcion para jugar :  1 Piedra , 2 Papel, 3. Tijera ")
let pc = Math.floor(Math.random()*(max-min+1)+min)


if ((opcion == "1" && pc == 3)
  ||(opcion == "2" && pc == 1)
  ||(opcion == "3" && pc == 2))
  {
    alert("Ganaste !!!")
    victorias_usuario += 1
  }else if(opcion == pc ){
    alert("Empataste !!!")
    empates +=1
  }else{
    ("Perdiste !!!")
    victoria_pc += 1
  }


  }

  if (victorias_usuario > victoria_pc) 
    {
      alert ("Ganaste la partida ")
    }else if(victoria_pc > victorias_usuario){
      alert ("El pc gano la partida")
    }