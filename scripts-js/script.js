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

function setDropdownText(text) {
  document.getElementById("dropdownMenuButton").textContent = text;
}
