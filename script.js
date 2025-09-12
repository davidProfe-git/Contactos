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
}   else if (opciones == 2 && pc == 1){ 
    alert ("ganaste")  
}else if (opciones == 1 && pc == 2){
    alert ("perdiste")
}else if (opciones == 3 && pc == 2){
    alert ("ganaste")   
}else{
    alert ("eliga algo hpta")
}


if (opciones <= 2) {

    let opciones = prompt ("sigamos jugando-> PIEDRA (1) PAPEL (2) O TIJERA (3)"  )
    let min = 1
    let max = 3 
    alert ("sigue jugando")


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
}   else if (opciones == 2 && pc == 1){ 
    alert ("ganaste")  
}else if (opciones == 1 && pc == 2){
    alert ("perdiste")
}else if (opciones == 3 && pc == 2){
    alert ("ganaste")   
}else{
    alert ("eliga algo hpta")
}
}   else {
    alert ("fin del juego")
}    



// const tarjeta = document.getElementById("Padre");

// for (i = 0;i < 10; i++) {
//     tarjeta.innerHTML += 
    
//     `<div id="Padre"> 
   
    
//     <div id="hijo">

//         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

//      </div>
//         <!-- <!-- <div id="Padre"> 
   
    
//     <div id="hijo">

//         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

//      </div> -->

//       <h4>Hola soy piolin</h4>
//       <p> Tengo rabia</p>
//      </div>`;
// }


// const tarjeta = document.getElementById("Padre");

// for (i = 0;i < 10; i++) {
//     tarjeta.innerHTML += 
    
//     `<div id="Padre"> 
   
    
//     <div id="hijo">

//         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

//      </div>
//         <!-- <!-- <div id="Padre"> 
   
    
//     <div id="hijo">

//         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

//      </div> -->

//       <h4>Hola soy piolin</h4>
//       <p> Tengo rabia</p>
//      </div>`;
// }




