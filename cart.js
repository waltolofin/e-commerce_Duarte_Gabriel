const cardsSection = document.querySelector("#cart #cards")

function getCart(cards) {
    const list = cards.map(
        card => `<div class="card border shadow-none mb-2">
            <div class="card-body">
                <div class="d-flex align-items-start">
                    <div class="me-4">
                        <img src="${card.product.img}.jpg" class="img-fluid rounded-start" alt="${card.product.title}">
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
                                    <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
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

getCart(JSON.parse(localStorage.getItem("cart")))