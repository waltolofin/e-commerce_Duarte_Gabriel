const data = [
    {
      id: 1,
      title: "Bloody Angels (1732 Høtten: Marerittet har et postnummer)",
      detail:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 7,
      stock: 100,
      category: "Toyota",
    },
    {
      id: 2,
      title: "Ski Patrol",
      detail:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 5,
      stock: 73,
      category: "BMW",
    },
    {
      id: 3,
      title: "Ladybird Ladybird",
      detail:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 48,
      stock: 99,
      category: "Ford",
    },
    {
      id: 4,
      title: "Cannonball Run II",
      detail:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 27,
      stock: 91,
      category: "Ford",
    },
    {
      id: 5,
      title: "Looking for Mr. Goodbar",
      detail:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 5,
      stock: 49,
      category: "Mercury",
    },
    {
      id: 6,
      title: "White Night Wedding (Brúðguminn)",
      detail:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 2,
      stock: 73,
      category: "Saturn",
    },
    {
      id: 7,
      title: "Godzilla vs. Megalon (Gojira tai Megaro)",
      detail:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 55,
      stock: 5,
      category: "Lexus",
    },
    {
      id: 8,
      title: "Big Doll House, The",
      detail:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 47,
      stock: 39,
      category: "Nissan",
    },
    {
      id: 9,
      title: "Stars and Stripes Forever",
      detail:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 26,
      stock: 80,
      category: "Toyota",
    },
    {
      id: 10,
      title: "Plato's Academy",
      detail:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 19,
      stock: 69,
      category: "Mercedes-Benz",
    },
    {
      id: 11,
      title: "Winter's Bone",
      detail:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 35,
      stock: 72,
      category: "Honda",
    },
    {
      id: 12,
      title: "Pirates of the Caribbean: At World's End",
      detail:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      price: 52,
      stock: 76,
      category: "Lotus",
    },
  ];


let id = window.location.search.split("=")[1];

const producto = data.find((product)=>product.id==id);

let html;

if (producto) {
   html = `
        <div class="card cardProducto">
        <img src="${producto.img}" class="card-img-top">
        <div class="card-body">
            <h2 class="card-title h2productos">${producto.title}</h2>
            <p class="card-text">${producto.detail}</p>
            <div class = "lineaInferior">
            <button class ="btn btn-success btnProducto">Comprar</button>
            <p class="card-text precio">${producto.price}</p>
            <p class="card-text pProducto">${producto.stock}</p>
            </div>
        </div>
        </div>
        `
}




let contenedor = document.querySelector(".cards-productos");


contenedor.innerHTML=html;
