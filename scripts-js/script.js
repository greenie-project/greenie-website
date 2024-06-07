document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve email and password values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Define the valid email and password
    var validEmail = "username@gmail.com";
    var validPassword = "123456";

    // Check if the entered email and password are correct
    if (email === validEmail && password === validPassword) {
      // If validation is successful, redirect to the profile page
      window.location.href = "pages-html/profile.html";
    } else {
      // Display error message
      alert("Invalid email or password. Please try again.");
    }
  });

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

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".form-control");

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita o comportamento padrão do formulário

      const searchTerm = searchInput.value.trim();

      if (searchTerm !== "") {
        window.location.href = "/pages-html/allproducts.html";
      }
    }
  });
});
