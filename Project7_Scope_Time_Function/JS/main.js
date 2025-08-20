// Project7_Scope_Time_Function
// Author: Your Name
// Demonstrates scope, if statements, debugging, and time-based function

// ----------------------
// 1. Global vs Local Variables
// ----------------------

// Global variable (accessible anywhere)
let globalVar = "I am a GLOBAL variable.";

function scopeExample() {
    // Local variable (accessible only inside this function)
    let localVar = "I am a LOCAL variable.";
    document.getElementById("scopeResult").innerHTML =
        globalVar + "<br>" + localVar;
}

// ----------------------
// 2. If Statement Example
// ----------------------
function greeting() {
    let hour = new Date().getHours(); // get current hour (0–23)
    let message = "";

    if (hour < 12) {
        message = "Good morning!";
    }
    else if (hour < 18) {
        message = "Good afternoon!";
    }
    else {
        message = "Good evening!";
    }

    document.getElementById("greetingResult").innerHTML = message;
}

// ----------------------
// 3. Debugging Example (Intentional Error)
// ----------------------
function debugExample() {
    try {
        // Intentionally using a variable that is not defined
        console.log(undefinedVar); // This will cause an error
    } catch (err) {
        console.log("Error caught: " + err.message);
    }
    console.log("Debugging complete — check console output.");
}

// ----------------------
// 4. Time_function() Example
// ----------------------
function Time_function() {
    let Time = new Date().getHours(); // current hour
    let Reply;

    if (Time < 12 && Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    document.getElementById("timeResult").innerHTML = Reply;
}
