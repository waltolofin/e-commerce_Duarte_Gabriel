
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Productos";
  let contenedor = document.querySelector(".container");
//Usamos cada uno de los objetos de data para armar cards en el html
function mapear(objmapear) {
    let card = objmapear.map((car)=>`<div class="card" id="${car.id}" >
  <img src="${car.img}" class="card-img-top" alt="${car.title}">
  <div class="card-body">
    <h5 class="card-title">${car.title}</h5>
    <p class="card-text">${car.detail}</p>
    <a href="producto.html?prod=${car.id}" class="btn btn-primary">Ver más</a>
  </div>
</div>`);
contenedor.innerHTML = card.join('');
  }
mapear(data);

//Seleccionamos los botones y imputs necesarios
let filterButton = document.getElementById("filter-button");
let input = document.getElementById("input-value");
let resetButton = document.getElementById("clear-button");

///filtramos segun lo ingresado en el imput
const filtrar = (event) =>{
  event.preventDefault();
  let filtered = data.filter((item) => item.title.toLowerCase().includes(input.value.toLowerCase()));
  if (filtered.length != 0) {
    mapear(filtered);
  } else{
    contenedor.innerHTML = `<div class = "p-noencontrado"><p class="fw-bold fs-1">ERROR<p/><span class="material-symbols-outlined">
error</span><p class="fw-bold">"Parece que no tenemos lo que buscas. ¿Te gustaría intentar con otras palabras o explorar nuestras categorías populares?"</p></div>`;
  }
  
}

///reseteamos lo buscado y agregamos todas las cards de nuevo
const reset = (event) =>{
  event.preventDefault();
  mapear(data);
  input.value = "";
}

filterButton.addEventListener("click", filtrar);
resetButton.addEventListener("click",reset);

///seleccionamos las categorias y las filtramos para mostrar solo por categoria y despues le añadimos con un for los eventos
let arrCategoria = document.querySelectorAll(".category-filter");

const verSneakers= (cate) =>{
  let filtered = data.filter((item) => item.category.toLowerCase().includes(cate));
  mapear(filtered)
}
for (const i of arrCategoria) {
  i.addEventListener("click", () => verSneakers(i.textContent.toLowerCase()));
} 





