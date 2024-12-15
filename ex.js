document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { name: "Baskets", price: 100, quantity: 0 },
    { name: "Socks", price: 20, quantity: 0 },
    { name: "Bag", price: 50, quantity: 0 }
  ];

  // Sélectionner tous les éléments du DOM pour l'interaction
  const totalPriceElement = document.querySelector(".total");
  
  // Calculer et mettre à jour le prix total
  function updateTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price * products[i].quantity;
    }
    totalPriceElement.textContent = total + " $";
  }

  // Gérer les clics sur les boutons de quantité
  const increaseButtons = document.querySelectorAll(".fa-plus-circle");
  const decreaseButtons = document.querySelectorAll(".fa-minus-circle");
  const quantityElements = document.querySelectorAll(".quantity");
  
  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", function () {
      products[i].quantity++;
      quantityElements[i].textContent = products[i].quantity;
      updateTotal();
    });
  }
  
  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", function () {
      if (products[i].quantity > 0) {
        products[i].quantity--;
        quantityElements[i].textContent = products[i].quantity;
        updateTotal();
      }
    });
  }
  

  // Gérer les clics sur les boutons de supprime
  const trashButtons = document.querySelectorAll(".fa-trash-alt");
  
  for (let i = 0; i < trashButtons.length; i++) {
    trashButtons[i].addEventListener("click", function() {
      products[i].quantity = 0;
      quantityElements[i].textContent = products[i].quantity;
      updateTotal();
    });
  }
  
  // Gérer les clics sur les boutons "J'aime"
  const heartButtons = document.querySelectorAll(".fa-heart");
  
  heartButtons.forEach((button) => {
    button.addEventListener("click", () => {
       // Toggle the "liked" class to change color
      button.classList.toggle("liked");  
    });
  });
});
