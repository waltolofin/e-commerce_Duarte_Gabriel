

let idProducto = Number(window.location.search.split("=")[1]);

const producto = data.find((product)=>product.id==idProducto);



if (producto) {
    let html = `
        <div class="card" id="cardProducto">
        <img src="${producto.img}" class="card-img-top" id="producto-img">
        <div class="card-body">
            <div class="texto">
            <h2 class="card-title">${producto.title}</h2>
            <p class="card-text">${producto.detail}</p>
            </div>
            <div class = "lineaInferior">
            <p class="card-text precio">$${producto.price}</p>
            <p class="card-text pProducto">Stock: <b>${producto.stock}</b></p>
            </div>
            ${
                localStorage.getItem('email')?`
    <div class="input-group">
      <!-- Botón de decremento -->
      <button class="btn btn-outline-secondary" type="button" onclick="decrementStock()">-</button>
      
      <!-- Input para el stock -->
      <input type="number" id="stock" class="form-control text-center" value="1" min="0" readonly>
      
      <!-- Botón de incremento -->
      <button class="btn btn-outline-secondary" type="button" onclick="incrementStock()">+</button>
    </div>
    <button class ="btn btn-success btnProducto" onclick="addItems()">Comprar</button>
`
                : `<a href="./login.html" class ="btn btn-success btnProducto">Ingrese sesion para comprar</a>`
              }
        </div>
        </div>
        `
        let contenedor = document.querySelector("main");
        contenedor.innerHTML=html;
}
const counter = document.querySelector("#stock");

function incrementStock() {
    if (Number(producto.stock)>counter.value) {
        counter.value = Number(counter.value)+1;
    }
}
function decrementStock() {
    if(counter.value>1){
        counter.value = Number(counter.value)-1;
    }
}

function addItems() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    const productoExistente = cart.find(item => Number(item.product.id) === idProducto);
    if (productoExistente) {
        productoExistente.quantity += Number(counter.value);
    }else{
        cart.push({product:producto,quantity:Number(counter.value)});
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    let quantity = cart.reduce((acumulado,actual)=>acumulado+Number(actual.quantity),0);
    localStorage.setItem("quantity",quantity);
    let quant = document.querySelector("#quantity");
    quant.innerText = quantity;
}





