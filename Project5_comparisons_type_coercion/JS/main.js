// Project5_Comparisons_Type_Coercion Assignment
// Author: Your Name
// This file demonstrates type coercion, typeof operator, and comparison operators.

// 1. Using typeof operator
var myNumber = 42;
document.write("The type of myNumber is: " +  myNumber + "<br><br>");

// 2. Expression combining a string and a number (Type Coercion)
document.write("When we add a string and a number: " + "The answer is " + 10 + "<br><br>");

// 3. Comparison Operators
// == (checks equality with type coercion)
document.write("10 == '10' : " + (10 == "10") + "<br>");

// === (checks equality without type coercion)
document.write("10 === '10' : " + (10 === "10") + "<br>");

// Greater than
document.write("20 > 10 : " + (20 > 10) + "<br>");

// Less than
document.write("5 < 3 : " + (5 < 3) + "<br>");

// AND operator &&
document.write("(5 > 2 && 10 > 5) : " + (5 > 2 && 10 > 5) + "<br>");

// OR operator ||
document.write("(5 > 10 || 10 > 5) : " + (5 > 10 || 10 > 5) + "<br>");

// NOT operator !
document.write("!(20 > 10) : " + (!(20 > 10)) + "<br>");
