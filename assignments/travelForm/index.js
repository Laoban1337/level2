const form = document.travel;
//empty array to push checkedbox values
const checkedInputs = [];

form.addEventListener("submit", (event)=> {
  event.preventDefault();
  
//loop over checkbox array
  for (let i = 0; i < form.diet.length; i++) {
    const element = form.diet[i];
    if (element.checked) {
      checkedInputs.push(element.value);
    }
  }
//alert user with the info the user input
  alert(
    "First name : " +
      "" +
      form.firstName.value +
      "\n Last Name: " +
      form.lastName.value +
      " \n Age: " +
      form.age.value +
      " \n Gender: " +
      form.gender.value +
      "\n Dietary restrictions: " +
      checkedInputs+
      "\n Destination: " +
      form.city.value
  );
});
