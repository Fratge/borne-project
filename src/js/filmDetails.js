const selectedFilm = JSON.parse(localStorage.getItem('selectedFilm'));


// Affichage des films dans la page filmDetails.html
if (selectedFilm) {
  console.log(selectedFilm)
  filmId.innerText = selectedFilm.id ;
  filmName.innerText = selectedFilm.filmName;
  filmSynopsis.innerText = selectedFilm.synopsis;
  filmHoraire.innerText = selectedFilm.horaire;
  filmDuree.innerText = selectedFilm.duree;
  filmPriceAdulte.innerText = 'Prix adulte : ' + selectedFilm.adultePrice + ' $';
  filmPriceEtudiant.innerText = 'Prix etudiant : ' + selectedFilm.etudiantPrice + ' $';
  filmPriceEnfant.innerText = 'Prix enfant : ' + selectedFilm.enfantPrice + ' $';
  filmImage.src = selectedFilm.filmImage;
} else {
  filmId.innerText = "Aucun film sélectionné";
}

// Compteur de billets pour les adultes page filmDetails et page panier
const plusButtonAdulte = document.getElementById("plusButtonAdulte");
const minusButtonAdulte = document.getElementById("minusButtonAdulte");
const inputValueAdulte = document.getElementById("inputValueAdulte");

plusButtonAdulte.addEventListener("click", function() {
  let currentValue = parseInt(inputValueAdulte.textContent);
  currentValue += 1;
  inputValueAdulte.textContent = currentValue;
});

minusButtonAdulte.addEventListener("click", function() {
  let currentValue = parseInt(inputValueAdulte.textContent);
  if (currentValue > 0) {
    currentValue -= 1;
    inputValueAdulte.textContent = currentValue;
  }
});

// Compteur de billets pour les étudiants page filmDetails et page panier
const plusButtonEtudiant = document.getElementById("plusButtonEtudiant");
const minusButtonEtudiant = document.getElementById("minusButtonEtudiant");
const inputValueEtudiant = document.getElementById("inputValueEtudiant");

plusButtonEtudiant.addEventListener("click", function() {
  let currentValue = parseInt(inputValueEtudiant.textContent);
  currentValue += 1;
  inputValueEtudiant.textContent = currentValue;
});

minusButtonEtudiant.addEventListener("click", function() {
  let currentValue = parseInt(inputValueEtudiant.textContent);
  if (currentValue > 0) {
    currentValue -= 1;
    inputValueEtudiant.textContent = currentValue;
  }
});

// Compteur de billets pour les adultes page filmDetails et page panier
const plusButtonEnfant = document.getElementById("plusButtonEnfant");
const minusButtonEnfant = document.getElementById("minusButtonEnfant");
const inputValueEnfant = document.getElementById("inputValueEnfant");

plusButtonEnfant.addEventListener("click", function() {
  let currentValue = parseInt(inputValueEnfant.textContent);
  currentValue += 1;
  inputValueEnfant.textContent = currentValue;
});

minusButtonEnfant.addEventListener("click", function() {
  let currentValue = parseInt(inputValueEnfant.textContent);
  if (currentValue > 0) {
    currentValue -= 1;
    inputValueEnfant.textContent = currentValue;
  }
});

// Affichage des snacks
const reserverButton = document.getElementById("reserver");
const reserverButton2 = document.getElementById("reserver2");
const snacksContainer = document.getElementById("snacksContainer");
const filmContainer = document.getElementById("filmContainer");
const billetsContainer = document.getElementById("billetsContainer");

console.log(snacksContainer)

// Au clique sur le boutton réserver, on remove la propriété hidden du container de snack pour afficher les snacks et on initialise les valeurs des billets à 0 
reserverButton.addEventListener('click', function(){
  if (parseInt(inputValueAdulte.textContent) === 0 && parseInt(inputValueEnfant.textContent) === 0 && parseInt(inputValueEtudiant.textContent) === 0) {
    return;
  }else{
    inputValueAdulte.textContent = "0";
    inputValueEnfant.textContent = "0";
    inputValueEtudiant.textContent = "0";
    snacksContainer.classList.remove('hidden');
    filmContainer.classList.add('hidden');
  }

});

// Même chose, sauf que dans ce cas c'est pour le boutton au responsive (2 bouttons différents car ils ont des emplacements différents)
reserverButton2.addEventListener('click', function(){
  console.log("test2")
  if (parseInt(inputValueAdulte.textContent) === 0 && parseInt(inputValueEnfant.textContent) === 0 && parseInt(inputValueEtudiant.textContent) === 0) {
    return;
  }else{
    inputValueAdulte.textContent = "0";
    inputValueEnfant.textContent = "0";
    inputValueEtudiant.textContent = "0";
    snacksContainer.classList.remove('hidden');
    filmContainer.classList.add('hidden');
    billetsContainer.classList.add('hidden');

  }

});


document.addEventListener('DOMContentLoaded', function(){
  const plusButtons = document.querySelectorAll('.plusButton');
  const minusButtons = document.querySelectorAll('.minusButton');
  const inputValues = document.querySelectorAll('.inputValue');

  plusButtons.forEach((plusButton, index) => {
    const inputValue = inputValues[index];

    plusButton.addEventListener("click", function() {
      let currentValue = parseInt(inputValue.textContent);
      currentValue += 1;
      inputValue.textContent = currentValue;
    });
  });

  minusButtons.forEach((minusButton, index) => {
    const inputValue = inputValues[index];

    minusButton.addEventListener("click", function() {
      let currentValue = parseInt(inputValue.textContent);
      if (currentValue > 0) {
        currentValue -= 1;
        inputValue.textContent = currentValue;
      }
    });
  });
})
