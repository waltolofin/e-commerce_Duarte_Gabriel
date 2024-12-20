let header = document.querySelector("header");
let menu = [];

let arr = [
    {
        name:"Home",
        href:"/index.html",
        category: "Accesorios"
    },
    {
        name:"Nosotros",
        href:"/nosotros",
        category: "Pesas"
    },
    {
        name:"Productos",
        href:"/productos",
        category: "Equipamiento"
    }
]

let categoria = {
  name: "Accesorios",
  name: "Pesas",
  name: "Equipamiento"
};

for (const i of arr) {
    menu.push(
        `<li><a class="dropdown-item category-filter" href="#">${i.category}</a></li>`
    );
}
let nav = `<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html" id="gymworld">GymWorld</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse div-navbar" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu">
                ${menu[0]}
                ${menu[1]}
                ${menu[2]}
              </ul>
            </li>
          </ul>
          <ul class='navbar-nav session'>${localStorage.getItem('email')
    ? `<li class="email-li" id="li-nav">Bienvenido ${localStorage.getItem('email').split('@')[0]}</li>
       <span>|</span>
       <li id="li-nav"><a href="cart.html" id="cart-link"><img height="25" src="./cart.png" alt="comprar"><b id="quantity">${localStorage.getItem("quantity")}</b></a></li>
       <span>|</span>
       <li id="li-nav" onclick="logout()" class="logout-li">Cerrar sesión</li>`
    : `<li><a class="nav-link" href="./login.html">Iniciar sesión</a></li>`}
</ul>
        </div>
      </div>
    </nav>`;

const logout=()=>{
  localStorage.clear();
  window.location.href = "./login.html";
}
  
header.innerHTML = nav;
