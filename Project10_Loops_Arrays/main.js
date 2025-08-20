// Project 10 - Loops & Arrays

// WHILE LOOP FUNCTION
function whileLoop() {
    let text = "";
    let i = 1; // start from 1
    while (i <= 5) { // loop until i = 5
        text += "Number " + i + "<br>";
        i++; // increment
    }
    document.getElementById("whileOutput").innerHTML = text;
}

// FOR LOOP FUNCTION
function forLoop() {
    let text = "";
    for (let i = 0; i < 5; i++) { // run loop 5 times
        text += "Iteration " + (i + 1) + "<br>";
    }
    document.getElementById("forOutput").innerHTML = text;
}

// ARRAY FUNCTION
function arrayFunction() {
    let fruits = ["Apple", "Banana", "Cherry", "Mango"]; // create array
    let text = "My favorite fruits are: <br>";
    for (let i = 0; i < fruits.length; i++) {
        text += fruits[i] + "<br>"; // loop through array
    }
    document.getElementById("arrayOutput").innerHTML = text;
}

// OBJECT FUNCTION
function objectFunction() {
    // create object using let
    let car = {
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Blue"
    };
    // display object properties
    let text = "Car Information:<br>" +
               "Make: " + car.make + "<br>" +
               "Model: " + car.model + "<br>" +
               "Year: " + car.year + "<br>" +
               "Color: " + car.color;
    document.getElementById("objectOutput").innerHTML = text;
}
