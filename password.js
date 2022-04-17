const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function getCharacterLength (str) {

    return [...str].length;
  }

console.log("Welcome, User, to the Password Validator tool.\n")

reader.question("Please enter your password   ", function(input){
	password = getCharacterLength(input)

   
	

	if (password >= 10 && password <= 16 ) {
        console.log("\n", password, "Characters entered.")
        console.log (`
        '   +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+
        '   |P|a|s|s|w|o|r|d| |S|u|c|c|e|s|s|f|u|l|
        '   +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+
        `, "Be welcome User")
    } else {
        console.log( "\n", password, "characters entered.")
        console.log( `
        '   +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+
        '   |P|a|s|s|w|o|r|d| |F|a|i|l|u|r|e|
        '   +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+
        `, "please enter at least 10 characters but not more than 16.")
    }
    


	reader.close()

});



  
 
  

  