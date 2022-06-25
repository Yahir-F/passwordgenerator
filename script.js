// Declared Variables
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var upLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var downLetter = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var passLength;
var checknum;
var specCheck;
var upCheck;
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

function checkUp(){
  upCheck = prompt("Do you want UpperCase Letters in the Password? \n (N = No or Y = Yes)");
  upCheck = upCheck.toLowerCase();

  if (upCheck === null || upCheck === ""){
    alert("Invalid Answer Try again.")
    wantNumber();
  
  }else if (upCheck === "y" || upCheck === "yes"){
  upCheck = true;
  return upCheck;
  
  
  }else if (upCheck === "n" || upCheck === "no"){
    upCheck = false;
    return upCheck;
  
  }else {
    alert("Invalid Answer Try again.");
    wantNumber();
  }
  return upCheck;
}




//Created varible that will ask for input if they want numbers in their password and how it will respond given the user input.
function wantNumber(){
    checknum = prompt("Do you want the password to include numbers? \n (N = No or Y = Yes)");
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
   specCheck = prompt("Do you want the password to inclue special Characters? \n (N = No or Y = Yes)");
   specCheck = specCheck.toLowerCase();

if (specCheck === null || specCheck === ""){
  alert("Invalid Answer Try again.");
  wantNumber();

}else if (specCheck === "y" || specCheck === "yes"){
specCheck = true;
return specCheck;


}else if (specCheck === "n" || specCheck === "no"){
  specCheck = false;
return specCheck;

}else {
  alert("Invalid Answer Try again.");
  wantNumber();
}
return specCheck;

}
function genPassword(){
inputLength();
console.log(passLength);
console.log(checknum);

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
