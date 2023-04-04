// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var characters ="!@#$%^&*()?";

function generatePassword() {
  // var passwordText = document.querySelector("#password");
  //passwordText.value = "some word";
  // return passwordText.value;
  var lengthOption = prompt("Choose a length between 8 and 128 characters");
  
  var lowercaseOption = confirm("Would you like lowercase?");
  var uppercaseOption = confirm("Would you like uppercase?");
  var numericOption = confirm("Would you like numeric?");
  var characterOption = confirm("Would you like characters?");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
