// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var characters = "!@#$%^&*()?";
var captureOptions = "";
var password = "";

function generatePassword() {
  // return passwordText.value;
  var lengthOption = prompt("Choose a length between 8 and 128 characters");

  var lowercaseOption = confirm("Would you like lowercase?");
  var uppercaseOption = confirm("Would you like uppercase?");
  var numericOption = confirm("Would you like numeric?");
  var characterOption = confirm("Would you like characters?");

  if (lowercaseOption) {
    captureOptions += lowerCase;
  }
  if (uppercaseOption) {
    captureOptions += upperCase;
  }
  if (numericOption) {
    captureOptions += numbers;
  }
  if (characterOption) {
    captureOptions += characters;
  }

  for (var i = 0; i < lengthOption; i++) {
    password +=
      captureOptions[Math.floor(Math.random() * captureOptions.length)];
  }
  console.log(password);
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
