let button = document.querySelector("button");
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let car3 = document.querySelector(".car3");
let finishText = document.querySelector(".finish-text");

car1.style.marginLeft = 0;
car2.style.marginLeft = 0;
car3.style.marginLeft = 0;

button.addEventListener("click", function () {
  console.log(window.innerWidth);
  finishText.innerHTML = "";
  button.disabled = true;
  car1.timer = setInterval(function () {
    car1.style.marginLeft =
      parseInt(car1.style.marginLeft) + parseInt(Math.random() * 10) + "px";
    if (parseInt(car1.style.marginLeft) > window.innerWidth - 50) {
      finishText.innerText = "Yellow car won!";
      reset(car1, car2, car3);
    }
  }, 60);

  car2.timer = setInterval(function () {
    car2.style.marginLeft =
      parseInt(car2.style.marginLeft) + parseInt(Math.random() * 10) + "px";
    if (parseInt(car2.style.marginLeft) > window.innerWidth - 50) {
      finishText.innerText = "Red car won!";
      reset(car1, car2, car3);
    }
  }, 60);
  car3.timer = setInterval(function () {
    car3.style.marginLeft =
      parseInt(car3.style.marginLeft) + parseInt(Math.random() * 10) + "px";
    if (parseInt(car3.style.marginLeft) > window.innerWidth - 50) {
      finishText.innerText = "White car won!";
      reset(car1, car2, car3);
    }
  }, 60);
});

function reset(car1, car2, car3) {
  clearInterval(car1.timer);
  clearInterval(car2.timer);
  clearInterval(car3.timer);
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;
  car3.style.marginLeft = 0;
  button.disabled = false;
}
