// Nome flutuante dos ícones da navbar
const iconNames = document.querySelectorAll(".icon-name");

iconNames.forEach((iconName) => {
  iconName.parentNode.addEventListener("mousemove", (event) => {
    const newX = event.clientX - iconName.offsetWidth - 10;
    const newY = event.clientY - iconName.offsetHeight / 2;

    iconName.style.left = `${newX}px`;
    iconName.style.top = `${newY}px`;
  });
});

// Navbar visivel apenas ao scrollar para cima
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Rolando para baixo
      navbar.classList.add("navbar-hidden");
    } else {
      // Rolando para cima
      navbar.classList.remove("navbar-hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar números negativos
  });
});

// Trocar a foto de perfil
document
  .getElementById("upload-button")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        document.getElementById("profile-pic").src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  });

function changeImage(thumbnail) {
  let mainImage = document.getElementById("current-image");
  let tempSrc = mainImage.src;
  mainImage.src = thumbnail.src;
  thumbnail.src = tempSrc;
}

function setDropdownText(text) {
  document.getElementById("dropdownMenuButton").textContent = text;
}

const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
const pageNumbers = document.querySelectorAll(".number-pages h3");

let currentPage = 1; // Start on page 1

setaEsquerda.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

setaDireita.addEventListener("click", () => {
  if (currentPage < pageNumbers.length) {
    currentPage++;
    updatePage();
  }
});

function updatePage() {
  // Remove 'active' class from all page numbers
  pageNumbers.forEach((page) => page.classList.remove("active"));

  // Add 'active' class to the current page number
  document.getElementById(`page${currentPage}`).classList.add("active");
}
