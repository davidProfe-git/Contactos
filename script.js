  function cargarUsuarios() {
      fetch("https://randomuser.me/api/?results=6&nat=us,es")
      .then(res => res.json())
      .then(data => {
          const contenedor = document.getElementById("usuarios");
          contenedor.innerHTML = ""; // Limpia resultados anteriores
          
          data.results.forEach(usuario => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
              <img src="${usuario.picture.large}" alt="Foto de ${usuario.name.first}">
              <h3>${usuario.name.first} ${usuario.name.last}</h3>
              <p>${usuario.email}</p>
              <p>${usuario.phone}</p>
            `;
            contenedor.appendChild(card);
          });
        })
        .catch(err => console.error("Error al traer usuarios:", err));
    }
