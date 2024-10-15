let header = document.querySelector("header");
let menu = [];

let arr = [
    {
        name:"Home",
        href:"/index.html",
        category: "Sneakers"
    },
    {
        name:"Nosotros",
        href:"/nosotros",
        category: "T-shirt"
    },
    {
        name:"Productos",
        href:"/productos",
        category: "Jeans"
    }
]

let categoria = {
  name: "Sneakers",
  name: "T-shirts",
  name: "Jeans"
};

for (const i of arr) {
    menu.push(
        `<li><a class="dropdown-item category-filter" href="#">${i.category}</a></li>`
    );
}
let nav = `<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
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
          <form class="d-flex" role="search">
  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="input-value">
  <button class="btn btn-outline-success" id="filter-button" type="button">Search</button>
  <button class="btn btn-outline-secondary" id="clear-button" type="button">
    <i class="bi bi-x-circle"></i>
  </button>
</form>
        </div>
      </div>
    </nav>`;

header.innerHTML = nav;
