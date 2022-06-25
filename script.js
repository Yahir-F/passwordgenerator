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
//Function that asks the user if they want Uppercase letters 
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




//Created function that will ask for input if they want numbers in their password and how it will respond given the user input.
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
//function that will ask user if they want special characters
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
//function that brings everything together 
function genPassword(){
inputLength();
console.log(passLength);
checkUp();
console.log(upCheck);
wantNumber();
console.log(checknum);
checkSpec();
console.log(specCheck);

var letters = downLetter;
var pass = "";
if(upCheck && checknum && specCheck){
  letters += upLetter + numbers + special;

}
else if (upCheck && checknum){
  letters += upLetter + numbers;

}
else if (checknum && specCheck){
letters += numbers + special;

}
else if (upCheck && specCheck){
  letters += upLetter + special;
}
else if (upCheck){
  letters += upLetter;
}
else if (checknum){
  letters += numbers;
}
else if (specCheck){
  letters += special;
}
else {
  letters === downLetter;
}
for (var i = 0; i< passLength; i++){
  pass += letters.charAt(Math.floor(Math.random() * letters.length));

}
return pass;
}

function writePassword() {
var passwords = "";
   passwords = genPassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = passwords;
}





//button that will start the application
generateBtn.addEventListener("click", writePassword);
