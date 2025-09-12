let opciones = parseInt(prompt("JUGUEMOS PIEDRA (1) PAPEL (2) O TIJERA (3)"));
let min = 1;
let max = 3;

let pc = Math.floor(Math.random() * (max - min + 1) + min);

if (pc == 1) {
    alert("PC escoge piedra");
}
if (pc == 2) {
    alert("PC escoge papel");
}
if (pc == 3) {
    alert("PC escoge tijera");
}

if (opciones < 1 || opciones > 3 || isNaN(opciones)) {
    alert("Por favor, elige una opción válida: 1, 2 o 3.");
} else if (opciones == pc) {
    alert("EMPATE");
} else if (
    (opciones == 1 && pc == 3) || // piedra gana a tijera
    (opciones == 2 && pc == 1) || // papel gana a piedra
    (opciones == 3 && pc == 2)    // tijera gana a papel
) {
    alert("¡Ganaste!");
} else {
    alert("Perdiste");
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




