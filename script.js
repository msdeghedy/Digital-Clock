const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let date = new Date();
  hourEl.innerText = date.getHours();
  minutesEl.innerText = date.getMinutes();
  secondsEl.innerText = date.getSeconds();

  ampmEl.innerText = date.getHours() > 12 ? "PM" : "AM";
}

setInterval(updateClock, 1000);
