const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', startHandler);
stopBtn.addEventListener('click', stopHandler);
stopBtn.setAttribute('disabled', '');

function changeColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
}

let timerId = null;

function startHandler() {
  startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    startBtn.classList.add("active");
    stopBtn.classList.remove("active");

  changeColor();
  timerId = setInterval(changeColor, 1000);
}

function stopHandler() {
  stopBtn.setAttribute('disabled', '');
    startBtn.removeAttribute('disabled');
    stopBtn.classList.add("active");
    startBtn.classList.remove("active");

  clearInterval(timerId);
}