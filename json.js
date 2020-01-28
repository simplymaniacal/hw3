let symbolchar = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefjhijklmnopqrstuvwxyz";
let num = "1234567890";
let button = document.querySelector("button");
let arr = []
let amount = parseInt(prompt("how long do you want this password? *must be 8-128 characters long"));
// when prompt is true, the function makes a series of questions
function alerts(){
  let capalert = confirm("do you want capital letters?");
  let lowalert = confirm("do you want lowercase letters?");
  let symalert = confirm("do you want symbols?");
  let numalert = confirm("do you want numbers?");
  numbers = arr.split("")
if (symalert === true) {
  arr.push(symbolchar);
}
if (lowalert === true) {
  arr.push(lower);
}
if (capalert === true) {
  arr.push(capital);
}
if (numalert === true) {
  arr.push(num);
}
if (arr.length === 0) {
  alert("bruv choose something")
}
  return console.log(numbers)
}



// when questions are done, create a function that randomizes a series of strings to create the password
let random = Math.floor(Math.random() * arr.length)
function final() {
  for (i = 0; i < amount.length; i++) {
    random.split(i)
  }
}
// when the generate button is clicked a series of alrets and prompts come up
button.addEventListener("click", function () {

  if (128 > amount && amount > 8) {
    alerts();
  }
  else {
    alert("your response is invalid")
  }

});
