const selectedFilm = JSON.parse(localStorage.getItem('selectedFilm'));

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const inputValue = document.getElementById("inputValue");

plusButton.addEventListener("click", function() {
  let currentValue = parseInt(inputValue.textContent);
  currentValue += 1;
  inputValue.textContent = currentValue;
});

minusButton.addEventListener("click", function() {
  let currentValue = parseInt(inputValue.textContent);
  if (currentValue > 1) {
    currentValue -= 1;
    inputValue.textContent = currentValue;
}
});

if (selectedFilm) {
  filmId.innerText = selectedFilm.id ;
  filmName.innerText = selectedFilm.filmName;
  filmPrice.innerText = selectedFilm.price + ' €';
  filmImage.src = selectedFilm.filmImage;
} else {
  filmId.innerText = "Aucun film sélectionné";
}
