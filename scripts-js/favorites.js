function removeItem(productId) {
  const productElement = document.getElementById(productId);
  if (confirm("Tem certeza que deseja remover este item?")) {
    productElement.remove();
  }
}
