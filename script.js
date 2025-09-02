//sintaxis basica 

//tipos de datos nativos
let texto = "texto";
let entero =5 
let decimal = 5.4
let objeto ={nombre :"Juan"}
let indefinido;
let nulo = null
let boleano = true


//console.log(typeof(texto))
//console.log(typeof(entero))
//console.log(typeof(decimal))

//variables y constantes 
let numero1 = 5
let numero2 = 5
numero1 = parseInt (prompt("¿ingresa un numero?"))
numero2 = parseInt (prompt("¿ingresa otro numero?"))



//estructuras de control
if (numero1 > numero2)
    {
    alert("El numero es mayor es:"+ numero1)
}
else if(numero1 === numero2){
    alert("Son iguales")
}
else{
    alert("Numero ,as mayor es:"+ numero2)
}
