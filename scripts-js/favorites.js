function removeItem(productId) {
  const productElement = document.getElementById(productId);
  if (confirm("Are you sure you want to remove this item?")) {
    productElement.remove();
  }
}
