// Declared Variables
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var upLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var downLetter = "abcdefghijklmnopqrstuvwxyz";
var passLength;



function inputLength() {
  passLength = prompt("Input desired password length 8-128 Characters.");

if (passLength<8){
  alert("Try again, Desired password must be between 8-128 Characters.");
  inputLength();
}else if(passLength>128) {
  alert("Try again, Desired password must be between 8-128 Characters.");
  inputLength();
}
}

function genPassword(){
inputLength();
console.log(passLength);


}

// Write password to the #password input
function writePassword() {
var passwords = "";
   passwords = genPassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = passwords;
}

// Add event listener to generate button




generateBtn.addEventListener("click", writePassword);
