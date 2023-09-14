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