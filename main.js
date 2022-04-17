console.log("elements rendering");

let seconds = 00;
let mins = 00;
let hours = 00;

// const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const appendMins = document.getElementById("mins");
const appendHours = document.getElementById("hours");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");

let Interval;

startButton.onclick = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1100);
  seconds = "00";
  mins = "00 :";
  hours = "00 :";
};

stopButton.onclick = () => {
  clearInterval(Interval);
};

resetButton.onclick = () => {
  clearInterval(Interval);
  seconds = "00";
  mins = "00 :";
  hours = "00 :";

  appendSeconds.innerHTML = seconds;
  appendMins.innerHTML = mins;
  appendHours.innerHTML = hours;
};

const startTimer = () => {
  seconds++;

  // if (tens <= 9) {
  //   appendTens.innerHTML = "0" + tens;
  // }
  // if (tens > 9) {
  //   appendTens.innerHTML = tens;
  // }
  // if (tens > 99) {
  //   seconds++;
  //   appendSeconds.innerHTML = "0" + seconds;
  //   tens = 0;
  //   appendTens.innerHTML = "0" + 0;
  // }

  if (seconds <= 9) {
    appendSeconds.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    mins++;
    appendMins.innerHTML = "0" + mins;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (mins > 9) {
    appendMins.innerHTML = mins;
  }
  if (mins > 59) {
    hours++;
    appendHours.innerHTML = "0" + hours;
    mins = 0;
    appendMins.innerHTML = "0" + 0;
  }
  if (hours <= 9) {
    appendHours.innerHTML = "0" + seconds;
  }
  if (hours > 9) {
    appendHours.innerHTML = hours;
  }
};
