let symbolchar = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefjhijklmnopqrstuvwxyz";
let num = "0123456789";
let amount= parseInt(prompt("how long do you want this password? *must be 8-128 characters long"));
let lowalert= alert("do you want lower case letters?");
let capalert= alert("do you want capital letters?");
let symalert= alert("do you want symbols?");
let numalert= alert("do you want numbers?")
let button= document.querySelector("button")


if (128>amount<8){
  alert("can you read? I said between 8-128 charachters chief.");
  break;
}

// function getRandom(arr) {
//     var randIndex = Math.floor(Math.random() * arr.length);
//     var randElement = arr[randIndex];
//     return randElement;
//   }


// var generateBtn = document.querySelector("#generate");


// generateBtn.addEventListener("click", writePassword);



  function sran(){
    let symbolran= Math.floor(Math.random()*symbolchar.length)
    return (symbolchar[symbolran])
  }

  function cran(){
    let capitalran= Math.floor(Math.random()*capital.length)
    return (capital[capitalran])
  }

  function lran(){
    let lowerran= Math.floor(Math.random()*lower.length)
    return (lower[lowerran])
  }
  function nran(){
    let numran= Math.floor(Math.random()* num.length)
    return(num[numran])
  }

let arr= [sran(), cran(), lran(), nran()]

for( let i=0; i<amount; i++){
 console.log(Math.floor(Math.random()* arr.length))
}



button.addEventListener("clicked", function(){
  let password= '';
  if (lowalert===false && capalert===false && numalert===false && symalert===false){
     alert("PICK SOMETHING FOR THE LOVE OF GOD!!!");
  }
  if (lowalert===true && capalert===false && numalert===false && symalert===false){
    password=== lran()
  }
 if (lowalert===true && capalert===true && numalert===false && symalert===false){
  alert("PICK SOMETHING FOR THE LOVE OF GOD!!!");
}
if (lowalert===true && capalert===true && numalert===true && symalert===false){
  alert("PICK SOMETHING FOR THE LOVE OF GOD!!!");
}
if (lowalert===true && capalert===true && numalert===true && symalert===true){
  alert("PICK SOMETHING FOR THE LOVE OF GOD!!!");
}

  
})
