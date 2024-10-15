

let id = window.location.search.split("=")[1];

const producto = data.find((product)=>product.id==id);

let html;

if (producto) {
   html = `
        <div class="card cardProducto">
        <img src="${producto.img}" class="card-img-top" id="producto-img">
        <div class="card-body">
            <h2 class="card-title h2productos">${producto.title}</h2>
            <p class="card-text">${producto.detail}</p>
            <div class = "lineaInferior">
            <button class ="btn btn-success btnProducto">Comprar</button>
            <p class="card-text precio">$${producto.price}</p>
            <p class="card-text pProducto">Stock: <b>${producto.stock}</b></p>
            </div>
        </div>
        </div>
        `
}




let contenedor = document.querySelector(".cards-productos");


contenedor.innerHTML=html;


