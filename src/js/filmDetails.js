const selectedFilm = JSON.parse(localStorage.getItem('selectedFilm'));

if (selectedFilm) {
  filmId.innerText = selectedFilm.id ;
  filmName.innerText = selectedFilm.filmName;
  filmPrice.innerText = selectedFilm.price + ' €';
  filmImage.src = selectedFilm.filmImage;
} else {
  filmId.innerText = "Aucun film sélectionné";
}
