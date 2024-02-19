// function sum(x, y) {
//   //check data types first and throw error
//   try {
//     if (typeof x !=="number" || typeof y !=="number") {
//       throw new Error("Please only enter numbers");
//     }
    
//   } catch (error) {
//     console.log(error);
//   } finally {
//     return x + y;
//   }
// }
// console.log(sum("",2));


var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  try {
    if (user.username !==username|| user.password !== password) {
    throw new Error("Please enter the correct Username/Password")
  }
  else{
    console.log("Logging in")
  }
  } catch (error) {
    console.log(error);
  }
  
  
}
login("sam","123abc")