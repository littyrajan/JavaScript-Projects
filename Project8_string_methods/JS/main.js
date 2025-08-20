// Project 8 - String Methods
// Each function demonstrates one string/number method

// concat() - joins two or more strings
function concatStrings() {
    let str1 = "Hello";
    let str2 = "World!";
    let result = str1.concat(" ", str2); // joins with a space
    document.getElementById("concatResult").innerHTML = result;
}

// slice() - extracts part of a string
function sliceString() {
    let text = "JavaScript String Methods";
    let result = text.slice(0, 10); // extracts "JavaScript"
    document.getElementById("sliceResult").innerHTML = result;
}

// toString() - converts a number to a string
function numberToString() {
    let num = 12345;
    let result = num.toString(); // number → string
    document.getElementById("stringResult").innerHTML = "Converted number: " + result + " (Type: " + typeof result + ")";
}

// toPrecision() - formats a number to a specified length
function precisionExample() {
    let num = 123.456789;
    let result = num.toPrecision(5); // keeps 5 digits total
    document.getElementById("precisionResult").innerHTML = "Formatted number: " + result;
}
