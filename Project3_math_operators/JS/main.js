// Function to perform an addition operation
function addition_Function() {
    // Adding two numbers
    var result1 = 5 + 7;
    // Displaying result inside the paragraph with id="Math"
    document.getElementById("Math1").innerHTML = "5 + 7 = " + result1;
}

function subtraction_Function() {
    var result2 = 20 - 7;
    document.getElementById("Math2").innerHTML = "20 - 7 = " + result2;
}

// Multiplication Function
function multiplication_Function() {
    var result3 = 8 * 6;
    document.getElementById("Math3").innerHTML = "8 × 6 = " + result3;
}

// Division Function
function division_Function() {
    var result4 = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 ÷ 6 = " + result4;
}
// Modulus Function using % operator
function modulus_Function() {
    var result = 25 % 4; // Finds remainder
    document.getElementById("Modulus").innerHTML = "25 % 4 = " + result;
}

// Increment Function using ++ operator
function increment_Function() {
    var number = 10;
    number++; // Increments by 1
    document.getElementById("Increment").innerHTML = "10 incremented = " + number;
}

// Decrement Function using -- operator
function decrement_Function() {
    var number = 10;
    number--; // Decrements by 1
    document.getElementById("Decrement").innerHTML = "10 decremented = " + number;
}

// Random Function using Math.random()
function random_Function() {
    var randomNum = Math.random() * 100; // Random number between 0–100
    document.getElementById("Random").innerHTML = "Random Number (0–100): " + randomNum.toFixed(2);
}