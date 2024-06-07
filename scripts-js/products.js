function changeImage(thumbnail) {
    let mainImage = document.getElementById("current-image");
    let tempSrc = mainImage.src;
    mainImage.src = thumbnail.src;
    thumbnail.src = tempSrc;
  }
  
  const value = document.getElementById('value');
  const plusButton = document.getElementById('plus');
  const minusButton = document.getElementById('minus');

  const updateValue = () => {
    value.innerHTML = count;
  }

  let count = 0;
  let intervalId = 0;

  plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
    }, 100);
  })

  