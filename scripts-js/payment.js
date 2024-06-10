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

document.addEventListener("DOMContentLoaded", function () {
  const paymentButton = document.querySelector(".payment-card-button button");
  const termsCheckbox = document.getElementById("termsCheckbox");

  paymentButton.addEventListener("click", function () {
    // Verifica se o checkbox de termos está marcado
    if (!termsCheckbox.checked) {
      alert("Please select the terms and conditions checkbox to continue.");
      return;
    }

    if (confirm("Are you sure you want to make this purchase?")) {
      // Exibir o alerta de compra realizada
      alert("Purchase made successfully!");

      // Redirecionar para a página de índice
      window.location.href = "../index.html";
    }
  });
});

function showPaymentMethod(method) {
  const methods = ["credit-debit", "pix", "bar-code"];
  methods.forEach((m) => {
    document.getElementById(`payment-${m}`).style.display =
      m === method ? "block" : "none";
  });
}
