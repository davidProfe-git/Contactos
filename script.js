fetch("https://randomuser.me/api/?results=10&nat=mx")
.then(respuesta => respuesta.json())
.then(datos => {
  
  const contenedor = document.getElementById("contenedor")

  datos.results.forEach(contacto =>{
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
    <img src="${contacto.picture.large}" />
    <p>${contacto.name.first} ${contacto.name.last}</p>
    <p>✉️${contacto.email}</p>
    <p>📞${contacto.phone}</p>
    
    `
    contenedor.appendChild(tarjeta)
  })
  
} )


