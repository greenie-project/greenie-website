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

