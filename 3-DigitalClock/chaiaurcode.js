let ck = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  ck.textContent = date.toLocaleTimeString();
}, 1000);
