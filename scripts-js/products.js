function changeImage(thumbnail) {
  let mainImage = document.getElementById("current-image");
  let tempSrc = mainImage.src;
  mainImage.src = thumbnail.src;
  thumbnail.src = tempSrc;
}

const value = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

const updateValue = () => {
  value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    count += 1;
    updateValue();
  }, 100);
});

minusButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    count -= 1;
    updateValue();
  }, 100);
});
document.addEventListener("mouseup", () => clearInterval(intervalId));

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.querySelector(".button-add-to-cart a");

  addToCartButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (addToCartButton.textContent === "Product in Cart") {
      if (confirm("Tem certeza que deseja remover este produto do carrinho?")) {
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.style.backgroundColor = "var(--color-bege-full)";
        addToCartButton.style.color = "var(--color-verde-4)";
        addToCartButton.style.pointerEvents = "auto"; // Habilita a capacidade de clicar novamente
      }
    } else {
      if (
        confirm("Tem certeza que deseja adicionar este produto ao carrinho?")
      ) {
        addToCartButton.textContent = "Product in Cart";
        addToCartButton.style.backgroundColor = "var(--color-verde-4)";
        addToCartButton.style.color = "var(--color-white)";
      }
    }
  });
});
