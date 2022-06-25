// Declared Variables
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var upLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var downLetter = "abcdefghijklmnopqrstuvwxyz";
var passLength;
var checknum;

//Function that will prompt user to input desired password lenght
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

//function to ask user if they want numbers in their password.

function wantNumber(){
    checknum = prompt("Do you want the password to include numbers? \n (N = No or Y = Yes");
    checknum = checknum.toLowerCase();

if (checknum === null || checknum === ""){
  alert("Invalid Answer Try again.")
  wantNumber();

}else if (checknum === "y" || checknum === "yes"){
checknum = true;
return checknum;


}else if (checknum === "n" || checknum === "no"){
  checknum = false;
  return checknum;

}else {
  alert("Invalid Answer Try again.");
  wantNumber();
}
return checknum;
}


function checkSpec(){
  
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
