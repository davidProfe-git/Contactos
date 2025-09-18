fetch("https://randomuser.me/api/")
.then(respuest => respuesta.json())
.then(datos =>{


    const tarjeta=document.getElementById("contenedor")
    tarjeta.innerHTML= ""
    datos.results.forEach(contacto => {
        const contenido =document.createElement("div")
        contenido.className("tarjeta")
        contenido.innerHTML = `
        <img src="${contacto.picture.large}"/>
        `
        tarjeta.appendChild(contenido)
    }) 
})