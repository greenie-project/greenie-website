function setDropdownText(text) {
  document.getElementById("dropdownMenuButton").textContent = text;
}

document.addEventListener("DOMContentLoaded", function () {
  const setaEsquerda = document.querySelector(".seta-esquerda");
  const setaDireita = document.querySelector(".seta-direita");
  const pages = document.querySelectorAll(".number-pages h3");

  // Função para adicionar classe 'active' ao número da página selecionada
  function setActivePage(pageId) {
    pages.forEach((page) => {
      if (page.id === pageId) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  }

  // Event listener para a seta esquerda
  setaEsquerda.addEventListener("click", function () {
    const activePage = document.querySelector(".number-pages h3.active");
    let previousPage;
    if (activePage.previousElementSibling) {
      previousPage = activePage.previousElementSibling.id;
    } else {
      previousPage = pages[pages.length - 1].id; // Volta para o último se estiver no primeiro
    }
    setActivePage(previousPage);
  });

  // Event listener para a seta direita
  setaDireita.addEventListener("click", function () {
    const activePage = document.querySelector(".number-pages h3.active");
    let nextPage;
    if (activePage.nextElementSibling) {
      nextPage = activePage.nextElementSibling.id;
    } else {
      nextPage = pages[0].id; // Volta para o primeiro se estiver no último
    }
    setActivePage(nextPage);
  });

  // Event listener para cada número da página
  pages.forEach((page) => {
    page.addEventListener("click", function () {
      setActivePage(page.id);
    });
  });
});
