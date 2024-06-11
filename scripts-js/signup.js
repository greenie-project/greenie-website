function formatCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");

  // Adiciona a máscara
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return cpf;
}

document.getElementById("cpf").addEventListener("input", function () {
  var cpfInput = document.getElementById("cpf");
  cpfInput.value = formatCPF(cpfInput.value);
});

document
  .getElementById("loginForm2")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "../index.html";
  });

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "../index.html";
  });
