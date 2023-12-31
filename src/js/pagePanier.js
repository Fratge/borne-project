const reserverButton = document.getElementById("reserver");
const snacksContainer = document.getElementById("snacksContainer");

reserverButton.addEventListener('click', function(){


  snacksContainer.classList.remove('hidden');
});


document.addEventListener('DOMContentLoaded', function(){
  const plusButtons = document.querySelectorAll('.plusButton');
  const minusButtons = document.querySelectorAll('.minusButton');
  const inputValues = document.querySelectorAll('.inputValue');

  plusButtons.forEach((plusButton, index) => {
    const inputValue = inputValues[index] -1;

    plusButton.addEventListener("click", function() {
      let currentValue = parseInt(inputValue.textContent);
      currentValue += 1;
      inputValue.textContent = currentValue;
    });
  });

  minusButtons.forEach((minusButton, index) => {
    const inputValue = inputValues[index] -1;

    minusButton.addEventListener("click", function() {
      let currentValue = parseInt(inputValue.textContent);
      if (currentValue > 0) {
        currentValue -= 1;
        inputValue.textContent = currentValue;
      }
    });
  });
})