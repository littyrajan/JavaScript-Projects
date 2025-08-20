// Project6_Ternary_Operators_Constructors
// Author: Your Name
// This file demonstrates ternary operators, constructors, and nested functions.

// ----------------------
// 1. Ternary Operator Example
// ----------------------
function checkAge() {
    let age = document.getElementById("age").value;
    // Ternary operator: condition ? trueValue : falseValue
    let result = (age >= 18) ? "You are old enough to vote!" : "You are NOT old enough to vote.";
    document.getElementById("ternaryResult").innerHTML = result;
}

// ----------------------
// 2. Constructor Function Example
// ----------------------
// Creating a constructor function for Vehicle
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Create a function to display the result of constructor
function displayVehicle() {
    let myCar = new Vehicle("Toyota", "Corolla", 2022); // new keyword used
    document.getElementById("vehicleResult").innerHTML =
        "I drive a " + myCar.year + " " + myCar.make + " " + myCar.model + ".";
}

// ----------------------
// 3. Nested Function Example
// ----------------------
function countExample() {
    document.getElementById("nestedResult").innerHTML = count();

    function count() {
        let startingPoint = 0;

        // Nested function inside count()
        function plusOne() {
            startingPoint += 1;
        }

        plusOne(); // calling nested function
        return startingPoint;
    }
}
