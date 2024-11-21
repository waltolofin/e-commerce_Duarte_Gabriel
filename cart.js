const cardsSection = document.querySelector("#cards")
const boton = document.querySelector(".borrar_carrito");

function getCart(cards) {
    const list = cards.map(
        card => `<div class="card border shadow-none mb-2">
            <div class="card-body">
                <div class="d-flex align-items-start">
                    <div class="me-4">
                        <img src="${card.product.img}" class="img-fluid rounded-start" alt="${card.product.title}">
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                        <h5 class="text-truncate font-size-18">${card.product.title}</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Precio</p>
                                    <h5 class="mb-0 mt-2">$${card.product.price}</h5>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Cantidad</p>
                                    <h5 class="mb-0 mt-2">${card.quantity}</h5>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Total</p>
                                    <h5 class="mb-0 mt-2">$${card.product.price * card.quantity}</h5>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="mt-3">
                                    <p id="eli-prod" onclick="removeitem(${card.product.id})">Eliminar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    )
    cardsSection.innerHTML = list.join("")
}

const total = (cards) =>{
    let cartTotal = document.querySelector(".cart-total");
    let total = cards.reduce((acumulado,actual)=>acumulado + actual.product.price * actual.quantity,0);
    cartTotal.innerHTML= "$" + total;
}

const removeitem=(id)=>{
    const cards = JSON.parse(localStorage.getItem("cart"));
    const newCards = cards.filter(card=>card.product.id !== id)
    localStorage.setItem("cart",JSON.stringify(newCards));
    getCart(newCards);
    total(newCards);

    let quantity = newCards.reduce((acumulado,actual)=>acumulado+actual.quantity,0);
    localStorage.setItem("quantity",quantity);
    let quantityTag = document.querySelector("#quantity");
    quantityTag.innerHTML = quantity;
}

const clearCart=()=>{
    let quantityTag = document.querySelector("#quantity");
    quantityTag.innerText="0";
    localStorage.setItem("cart",JSON.stringify([]))
    getCart([]);
    total(0);
}

const sesion =()=>{
    if(!localStorage.getItem("gmail")){
        window.location.href = "./index.html";
    }
}

getCart(JSON.parse(localStorage.getItem("cart")))
total(JSON.parse(localStorage.getItem("cart")))
function checkout() {
    // Recuperar los datos del localStorage
    const user = localStorage.getItem("email");
    const cart = localStorage.getItem("cart");
  
    // Validar que los datos sean válidos
    if (!user || !cart) {
      Swal.fire({
        icon: "error",
        text: "No hay datos suficientes para procesar el pedido. Por favor, verifica tu cuenta y carrito.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#06f",
      });
      return; // Detener la ejecución si faltan datos
    }
  
    const recurso = {
      user,
      items: JSON.parse(cart),
    };
  
    // Enviar la solicitud al servidor
    fetch("https://673d09dd4db5a341d833d038.mockapi.io/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Aseguramos que el contenido se envíe como JSON
      },
      body: JSON.stringify(recurso),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success", // Ícono de éxito
          text: `Gracias ${recurso.user}. Hemos registrado tu orden número #${data.id}`,
          confirmButtonText: "Okay",
          confirmButtonColor: "#06f",
        });
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("quantity", "0");
      })
      .catch(() =>
        Swal.fire({
          icon: "error", // Ícono de error
          text: "Ups, hubo un problema. Por favor, inténtalo más tarde.",
          confirmButtonText: "Okay",
          confirmButtonColor: "#06f",
        })
      );
  }
