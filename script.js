fetch("https://randomuser.me/api/?results=5&nat=es").then(response => response.json())

    
    .then(data => {
        const contenedor= document.getElementById("Padre2");
        contenedor.innerHTML = ""
        data.results.forEach(contacto => {  
          const  tarjeta = document.createElement("div");
            tarjeta.className = "hijo2";
            tarjeta.innerHTML = `
            <img src="${contacto.picture.large}"/>
            <p>👤 ${contacto.name.first} ${contacto.name.last}</p>
            <p>✉️ ${contacto.email}</p>
            <p>📞 ${contacto.phone}</p>


            `;
           contenedor.appendChild(tarjeta);
    })


    })

// let min = 1;
// let max = 3;
// let puntajeJ = 0;
// let puntajePC = 0;

// while (puntajeJ < 3 && puntajePC < 3) {
//     let opciones = parseInt(prompt("JUGUEMOS PIEDRA (1), PAPEL (2) O TIJERA (3)"));
//     let pc = Math.floor(Math.random() * (max - min + 1) + min);

//     if (pc == 1) {
//         alert("PC escoge piedra");
//     }
//     if (pc == 2) {
//         alert("PC escoge papel");
//     }
//     if (pc == 3) {
//         alert("PC escoge tijera");
//     }

//     if (opciones === pc) {
//         alert("EMPATE");
//     } else if (
//         (opciones === 1 && pc === 3) || 
//         (opciones === 2 && pc === 1) ||
//         (opciones === 3 && pc === 2)  
//     ) {
//         alert("Ganaste esta ronda");
//         puntajeJ++;
//     } else if (opciones >= 1 && opciones <= 3) {
//         alert("Perdiste esta ronda");
//         puntajePC++;
//     } else {
//         alert("Elige una opción válida (1, 2 o 3)");
//     }

//     alert(`Marcador: Jugador ${puntajeJ} - PC ${puntajePC}`);
// }

// if (puntajeJ === 3) {
//     alert("¡FELICIDADES! Ganaste el juego 🎉");
// } else {
//     alert("La PC ganó el juego 🧑‍🦳");
// }

// // const tarjeta = document.getElementById("Padre");

// // for (i = 0;i < 10; i++) {
// //     tarjeta.innerHTML += 
    
// //     `<div id="Padre"> 
   
    
// //     <div id="hijo">

// //         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

// //      </div>
// //         <!-- <!-- <div id="Padre"> 
   
    
// //     <div id="hijo">

// //         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

// //      </div> -->

// //       <h4>Hola soy piolin</h4>
// //       <p> Tengo rabia</p>
// //      </div>`;
// // }


// // const tarjeta = document.getElementById("Padre");

// // for (i = 0;i < 10; i++) {
// //     tarjeta.innerHTML += 
    
// //     `<div id="Padre"> 
   
    
// //     <div id="hijo">

// //         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

// //      </div>
// //         <!-- <!-- <div id="Padre"> 
   
    
// //     <div id="hijo">

// //         <img src="piolin.jpg" alt="" width="100%" height="100%" >
        
        

// //      </div> -->

// //       <h4>Hola soy piolin</h4>
// //       <p> Tengo rabia</p>
// //      </div>`;
// // }
