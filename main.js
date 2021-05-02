const p = document.querySelector('p');

function counter () {
  let number = 0;

  function updateTime (){
    number++;
    p.textContent = `Jesteś na mojej stronie już ${number} sekund`;

  }

  return updateTime;

}

const start = counter();

setInterval(start, 1000);