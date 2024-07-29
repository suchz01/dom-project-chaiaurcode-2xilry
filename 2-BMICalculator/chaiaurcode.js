let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let btn = document.querySelector('button');
let res = document.querySelector('#results');
let h = 0;
let w = 0;

btn.addEventListener('click', function (e) {
  e.preventDefault();
  res.textContent = abc();
});

const abc = function () {
  h = parseFloat(height.value);
  w = parseFloat(weight.value);

  if (isNaN(h) || isNaN(w)) {
    return 'Please enter valid numbers for both height and weight.';
  }

  if (h > 0) {
    const bmi = w / (h * h);
    return `Your BMI is ${bmi.toFixed(2)}`;
  } else {
    return 'Invalid height';
  }
};
