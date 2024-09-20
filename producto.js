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
        <div class="card">
        <img src="${this.imagen}" alt ="${this.altImg}" class="card-img-top">
        <div class="card-body">
            <h2 class="card-title">${this.titulo}</h2>
            <p class="card-text">${this.detalle}</p>
            <p class="card-text">${this.precio}</p>
            <p class="card-text">${this.stock}</p>
        </div>
        </div>
        `
    }
}

const producto1 = new Producto("Auto 1", "150 caballos de fuerza el mas rapido de el mundo wacho", "$150000", "4", "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");



let contenedor = document.querySelector(".cards-productos");

contenedor.innerHTML=producto1.verHtml();