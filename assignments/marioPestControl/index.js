const form = document.myForm;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log("submit button pushed")
  const goomba = form.goomba.value * 5;
  form.goomba.value = "";
  const bomb = form.bomb.value * 7;
  form.bomb.value = "";
  const cheep = form.cheep.value * 11;
  form.cheep.value = "";
  const totalCoins = goomba + bomb + cheep;
  console.log(goomba + bomb + cheep);

  const result = document.getElementById("result");
  const footer = document.getElementById("footer");
  result.textContent = "You are owed:" + totalCoins + " Gold Coins";
  document.body.insertBefore(result, footer);
});
