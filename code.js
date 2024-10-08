
function cards() {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Productos";
  let contenedor = document.querySelector(".container");
  const card = data.map((car)=>`<div class="card" id="${car.id}" >
  <img src="${car.img}" class="card-img-top" alt="Auto">
  <div class="card-body">
    <h5 class="card-title">Card ${car.title}</h5>
    <p class="card-text">${car.detail}</p>
    <a href="producto.html?prod=${car.id}" class="btn btn-primary">Ver más</a>
  </div>
</div>`);

contenedor.innerHTML = card.join().replaceAll(",", "");
  }

cards();


