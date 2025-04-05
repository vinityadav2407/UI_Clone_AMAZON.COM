const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Fetch values and parse them to integers
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  // Validate height and weight
  if (isNaN(height) || height <= 0) {
    result.innerHTML = "Please enter a valid height (positive number)";
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = "Please enter a valid weight (positive number)";
  } else {
    // Calculate BMI
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Determine BMI category
    if (bmi < 18.5) {
      result.innerHTML = `<span>${bmi} - Underweight</span>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = `<span>${bmi} - Normal weight</span>`;
    } else {
      result.innerHTML = `<span>${bmi} - Overweight</span>`;
    }
  }
});

