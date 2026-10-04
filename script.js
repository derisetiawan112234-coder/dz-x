function filterGame(game) {

  const products = document.querySelectorAll(".product");

  products.forEach(product => {

    if (game === "all") {

      product.style.display = "block";

    } else if (product.dataset.game === game) {

      product.style.display = "block";

    } else {

      product.style.display = "none";

    }

  });

}
