
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Productos";
  let contenedor = document.querySelector(".container");
  let card = data.map((car)=>`<div class="card" id="${car.id}" >
  <img src="${car.img}" class="card-img-top" alt="${car.title}">
  <div class="card-body">
    <h5 class="card-title">${car.title}</h5>
    <p class="card-text">${car.detail}</p>
    <a href="producto.html?prod=${car.id}" class="btn btn-primary">Ver más</a>
  </div>
</div>`);

contenedor.innerHTML = card.join('');


let filterButton = document.getElementById("filter-button");
let input = document.getElementById("input-value");
let resetButton = document.getElementById("clear-button");

const filtrar = (event) =>{
  event.preventDefault();
  let filtered = data.filter((item) => item.title.toLowerCase().includes(input.value.toLowerCase()));
  card = filtered.map((filter) => `<div class="card" id="${filter.id}" >
   <img src="${filter.img}" class="card-img-top" alt="Auto">
   <div class="card-body">
     <h5 class="card-title">Card ${filter.title}</h5>
     <p class="card-text">${filter.detail}</p>
     <a href="producto.html?prod=${filter.id}" class="btn btn-primary">Ver más</a>
   </div>
 </div>`)
  
contenedor.innerHTML = card.join('');
}

const reset = (event) =>{
  event.preventDefault();
  card = data.map((car)=>`<div class="card" id="${car.id}" >
  <img src="${car.img}" class="card-img-top" alt="${car.title}">
  <div class="card-body">
    <h5 class="card-title">${car.title}</h5>
    <p class="card-text">${car.detail}</p>
    <a href="producto.html?prod=${car.id}" class="btn btn-primary">Ver más</a>
  </div>
</div>`);
contenedor.innerHTML = card.join('');
input.value = "";
}

filterButton.addEventListener("click", filtrar);
resetButton.addEventListener("click",reset);

let arrCategoria = document.querySelectorAll(".category-filter");

const verSneakers= (cate) =>{
  let filtered = data.filter((item) => item.category.toLowerCase().includes(cate));
  card = filtered.map((filter) => `<div class="card" id="${filter.id}" >
   <img src="${filter.img}" class="card-img-top" alt="Auto">
   <div class="card-body">
     <h5 class="card-title">Card ${filter.title}</h5>
     <p class="card-text">${filter.detail}</p>
     <a href="producto.html?prod=${filter.id}" class="btn btn-primary">Ver más</a>
   </div>
 </div>`)
  
contenedor.innerHTML = card.join('');
} 
arrCategoria[0].addEventListener("click", () => verSneakers(arrCategoria[0].textContent.toLowerCase()));
arrCategoria[1].addEventListener("click", () => verSneakers(arrCategoria[1].textContent.toLowerCase()));
arrCategoria[2].addEventListener("click", () => verSneakers(arrCategoria[2].textContent.toLowerCase()));





