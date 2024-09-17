
function cards() {
  let h1 = document.querySelector("h1");
h1.innerHTML = "Productos";
let contenedor = document.querySelector(".container");

let arr = [];

for (let i = 1; i <= 9; i++) {
    arr.push(`
        <div class="card">
  <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto">
  <div class="card-body">
    <h5 class="card-title">Card ${i}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>
`);
}

contenedor.innerHTML = arr.join(``);

}

cards();



