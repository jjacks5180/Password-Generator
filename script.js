// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // var passwordText = document.querySelector("#password");
  //passwordText.value = "some word";
  // return passwordText.value;
  var lengthOption = prompt("Choose a length between 8 and 128 characters");
  var typeOption = prompt(
    "Would you like lowercase, uppercase, numeric, or special characters?"
  );
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
