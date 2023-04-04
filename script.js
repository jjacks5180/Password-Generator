// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var characters ="!@#$%^&*()?";
var captureOptions ="";
var password ="";

function generatePassword() {
  
  
  // return passwordText.value;
  var lengthOption = prompt("Choose a length between 8 and 128 characters");
  
  var lowercaseOption = confirm("Would you like lowercase?");
  var uppercaseOption = confirm("Would you like uppercase?");
  var numericOption = confirm("Would you like numeric?");
  var characterOption = confirm("Would you like characters?");

  if(lowercaseOption){
    //console.log("how will I know")
    captureOptions += lowerCase;
  } 
  if(uppercaseOption){
    //console.log("how will I know")
    captureOptions += upperCase;
  }  
  if(numericOption){
    //console.log("how will I know")
    captureOptions += numbers;
  } 
  if(characterOption){
    //console.log("how will I know")
    captureOptions += characters;
  } 
  console.log(captureOptions);

  for(var i =0; i < lengthOption; i++ ){
   password += characterOption[Math.floor(Math.random() * characterOption.length)]
  }
  return(password);
}
// Write password to the #password input
function writePassword() {
  //var password = 
  generatePassword();
  passwordText.value = (password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
