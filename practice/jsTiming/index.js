const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clearButton = document.getElementById("clear");
const timer = document.getElementById("timer");

let timerCounter = 0;
//declared globally for use in clearintervaleq
let intervalId;

//display timer on page
timer.textContent = timerCounter;
//write a function to handle buttons
function incrementTimer() {
  if (timerCounter % 60 === 0) {
    const minutes = Math.floor(timerCounter / 60);
    const hours = Math.floor(timerCounter /3600);
    const seconds = timerCounter % 60;
    timer.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else {
    timer.textContent = (timerCounter % 60) + " Seconds";
  }
  timerCounter++;
}
// setInterval to tick after starting
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  intervalId = setInterval(incrementTimer, 1000);
});

// clearInterval to stop the timer
stopButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearInterval(intervalId);
});
//clear out timer and reset
clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  timerCounter = 0;
  timer.textContent = timerCounter;
});
