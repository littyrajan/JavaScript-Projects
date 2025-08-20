// Function Assignment Example
// This function combines two strings and displays them in a paragraph
// function combineText() {
//     var part1 = "Hello, this is the first part";
//     var part2 = " and this is the second part.";
//     document.getElementById("output").innerHTML = part1 + part2;
// }


// Operator Assignment Example

// Create variable
// var sentence = "JavaScript is powerful";

// Concatenate using += operator
// sentence += " and fun to learn!";

// Display in the element with id="output"
// document.getElementById("output").innerHTML = sentence;


// This file contains functions that demonstrate using the += operator
// and DOM manipulation with getElementById.

// Function that uses the += operator
function showMessage() {
    // Create a variable with an initial string
    let message = "Learning JavaScript";

    // Concatenate a new string using += operator
    message += " is exciting and fun!";

    // Display the concatenated message inside the HTML element with id="output"
    document.getElementById("output").innerHTML = message;
}
