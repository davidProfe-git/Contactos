
fetch("https://randomuser.me/api/?results=5&nat=mx")

.then(response => response.json())
 .then(data => {
        const contenedor= document.getElementById("contenedor");
        contenedor.innerHTML = ""
        data.results.forEach(contacto => {  
          const  tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `
            <img src="${contacto.picture.large}"/>
             <p>🙉${contacto.name.first} ${contacto.name.last} </p>
              <p>📩${contacto.email}</p>  
              <p>📞${contacto.phone}</p>
              <p>🏙️${contacto.location.city}, ${contacto.location.country}</p>
             
             
             
             `;
         
           contenedor.appendChild(tarjeta);
            
    })


    })
    