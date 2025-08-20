// Dictionary Assignment

// Create a dictionary (object) with Key-Value Pairs
function dictionary_Function() {
    var Car = {
        Brand: "Tesla",
        Model: "Model 3",
        Color: "Red",
        Year: 2024,
        Electric: true
    };

    // Displaying one of the dictionary values
    document.getElementById("Dictionary").innerHTML =
        "The car is a " + Car.Color + " " + Car.Brand + " " + Car.Model + " (" + Car.Year + ")";
}

// Delete Assignment

function dictionary_Function1() {
    var Car = {
        Brand: "Tesla",
        Model: "Model 3",
        Color: "Red",
        Year: 2024,
        Electric: true
    };

    // Delete the "Model" property
    delete Car.Model;

    // Try to display deleted value
    document.getElementById("Dictionary1").innerHTML =
        "The car model is: " + Car.Model;
}
