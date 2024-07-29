let buttons = document.querySelectorAll('.button');
// console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    document.body.style.backgroundColor = e.target.id;
  });
});
