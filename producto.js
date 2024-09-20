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
        <img src="${this.imagen}" alt ="${this.altImg}">
        <div class=""card-body>
            <h2 class="card-title">${this.titulo}</h2>
            <p class="card-text">${this.detalle}</p>
            <p class="card-text">${this.precio}</p>
            <p class="card-text">${this.stock}</p>
        </div>
        </div>
        `
    }
}
{/* <div class="card">
  <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto">
  <div class="card-body">
    <h5 class="card-title">Card ${i}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="producto.html" class="btn btn-primary">Ver más</a>
  </div>
</div> */}

const producto1 = new Producto("Auto 1", "150 caballos de fuerza el mas rapido de el mundo wacho", "$150000", "4", "https://example.com/image1.jpg");

let contenedor = document.querySelector(".cards-productos");

contenedor.innerHTML=producto1.verHtml();