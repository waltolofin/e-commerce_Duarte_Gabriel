class Producto {
    constructor(titulo,detalle,precio,stock,imagen, altImg) {
        this.titulo=titulo;
        this.detalle=detalle;
        this.precio=precio;
        this.stock=stock;
        this.imagen=imagen;
        this.altImg=altImg;
    }
    verHtml(){
        return `
        <div class="card cardProducto">
        <img src="${this.imagen}" alt ="${this.altImg}" class="card-img-top">
        <div class="card-body">
            <h2 class="card-title h2productos">${this.titulo}</h2>
            <p class="card-text">${this.detalle}</p>
            <div class = "lineaInferior">
            <button class ="btn btn-success btnProducto">Comprar</button>
            <p class="card-text precio">${this.precio}</p>
            <p class="card-text pProducto">${this.stock}</p>
            </div>
        </div>
        </div>
        `
    }
}

const producto1 = new Producto("Auto 1", "El Toyota Corolla 2021 es un sedán gris metálico con motor de 2.0L de 4 cilindros que genera 168 caballos de fuerza. Viene con transmisión automática de 10 velocidades y tracción delantera, ofreciendo un consumo de combustible de 30 mpg en ciudad y 38 mpg en carretera.", "$150000", "Stock: 4", "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");



let contenedor = document.querySelector(".cards-productos");

contenedor.innerHTML=producto1.verHtml();