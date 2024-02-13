const body = document.body;
let clickCounter = 0;

function clickHandler(event) {
  clickCounter++;
  event.preventDefault();
  console.log("clicked " + clickCounter + " times");

  localStorage.setItem("clicks", clickCounter);
  const storedClicks = localStorage.getItem("clicks");
  console.log("clicks stored "+storedClicks)

  const resultOfClicks = document.getElementById("clickResult");
  resultOfClicks.textContent = storedClicks;
  let timer = setTimeout(stopClick, 1000);
  if (timer) {
    stopClick();
  }
  function stopClick() {
    document.removeEventListener("click", clickHandler);
  }
}

body.addEventListener("click", clickHandler);
stopClick();

//   const clickCounterTextNode = document.createTextNode(storedClicks);
//   document.body.appendChild(clickCounterTextNode)
