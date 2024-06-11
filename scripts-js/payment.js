window.onload = function () {
  var cepInput = document.getElementById("cep");

  cepInput.addEventListener("input", function () {
    var cep = cepInput.value.replace(/\D/g, "");
    if (cep.length > 5) {
      cep = cep.replace(/^(\d{5})(\d{1,3})/, "$1-$2");
    }
    cepInput.value = cep;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleSections = (summarySelector, detailsSelector, arrowSelector) => {
    const summaryElement = document.querySelector(summarySelector);
    const detailsElement = document.querySelector(detailsSelector);
    const arrowElement = document.querySelector(arrowSelector);

    summaryElement.addEventListener("click", () => {
      if (
        detailsElement.style.display === "none" ||
        detailsElement.style.display === ""
      ) {
        detailsElement.style.display = "block";
        arrowElement.classList.add("open");
      } else {
        detailsElement.style.display = "none";
        arrowElement.classList.remove("open");
      }
    });
  };

  toggleSections(
    ".order-review",
    ".order-review-details",
    ".toggle-arrow-order"
  );
  toggleSections(
    ".billing-summary",
    ".billing-details",
    ".billing-discount",
    ".toggle-arrow-billing"
  );
});

function validarFormulario() {
  // Obtém todos os campos do formulário
  var campos = document.querySelectorAll("#shippingForm input");

  // Verifica se algum campo está vazio
  for (var i = 0; i < campos.length; i++) {
    if (campos[i].value.trim() === "") {
      alert("Please fill in all fields of the form.");
      return false;
    }
  }

  // Verifica se o checkbox dos termos foi marcado
  var termsCheckbox = document.getElementById("termsCheckbox");
  if (!termsCheckbox.checked) {
    alert("Please check the checkbox to accept the privacy and terms policy.");
    return false;
  }

  // Se todos os campos estão preenchidos e o checkbox dos termos foi marcado, retorna true
  return true;
}

// Adiciona um evento de clique ao botão de pagamento
var botaoPagamento = document.querySelector(".payment-card-button button");
botaoPagamento.addEventListener("click", function (event) {
  // Cancela o evento padrão de clique no botão
  event.preventDefault();

  // Executa a função de validação do formulário
  var formularioValido = validarFormulario();

  // Se o formulário for válido, prossegue com o pagamento
  if (formularioValido) {
    if (confirm("Are you sure you want to make this purchase?")) {
      alert("Purchase made successfully");
      window.location.href = "../index.html";
    }
  }
});

function showPaymentMethod(method) {
  const methods = ["credit-debit", "pix", "bar-code"];
  methods.forEach((m) => {
    document.getElementById(`payment-${m}`).style.display =
      m === method ? "block" : "none";
  });
}
