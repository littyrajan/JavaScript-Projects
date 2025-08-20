// Main function to generate receipt
function getReceipt() {
    let text1 = "<h2>- - - Order - - -</h2>";
    let total = 0;

    // --- SIZE ---
    let sizeArray = document.getElementsByName("size");
    let selectedSize;
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
        }
    }
    if (selectedSize === "Personal") total = 6;
    else if (selectedSize === "Medium") total = 10;
    else if (selectedSize === "Large") total = 14;
    else if (selectedSize === "Extra Large") total = 16;

    text1 += selectedSize + " Pizza - $" + total + "<br>";

    // --- CRUST ---
    let crustArray = document.getElementsByName("crust");
    let selectedCrust;
    for (let i = 0; i < crustArray.length; i++) {
        if (crustArray[i].checked) {
            selectedCrust = crustArray[i].value;
        }
    }
    text1 += selectedCrust + " Crust<br>";
    if (selectedCrust === "Cheese Stuffed") {
        total += 3;
    }

    // --- SAUCE ---
    let sauceArray = document.getElementsByName("sauce");
    let selectedSauce;
    for (let i = 0; i < sauceArray.length; i++) {
        if (sauceArray[i].checked) {
            selectedSauce = sauceArray[i].value;
        }
    }
    text1 += selectedSauce + "<br>";

    // --- CHEESE ---
    let cheeseArray = document.getElementsByName("cheese");
    let selectedCheese;
    for (let i = 0; i < cheeseArray.length; i++) {
        if (cheeseArray[i].checked) {
            selectedCheese = cheeseArray[i].value;
        }
    }
    text1 += selectedCheese + "<br>";
    if (selectedCheese === "Extra Cheese") {
        total += 3;
    }

    // --- VEGGIES ---
    let veggiesArray = document.getElementsByName("veggies");
    let selectedVeggies = [];
    for (let i = 0; i < veggiesArray.length; i++) {
        if (veggiesArray[i].checked) {
            selectedVeggies.push(veggiesArray[i].value);
        }
    }
    if (selectedVeggies.length > 0) {
        text1 += selectedVeggies.join(", ") + "<br>";
        if (selectedVeggies.length > 1) {
            total += selectedVeggies.length - 1;
        }
    }

    // --- MEAT ---
    let meatArray = document.getElementsByName("meat");
    let selectedMeat = [];
    for (let i = 0; i < meatArray.length; i++) {
        if (meatArray[i].checked) {
            selectedMeat.push(meatArray[i].value);
        }
    }
    if (selectedMeat.length > 0) {
        text1 += selectedMeat.join(", ") + "<br>";
        if (selectedMeat.length > 1) {
            total += selectedMeat.length - 1;
        }
    }

    // --- FINAL TOTAL ---
    text1 += "<h3>Total Price: $" + total + ".00</h3>";
    document.getElementById("receipt").innerHTML = text1;
}
$(window).ready(function(){
  $('.menu-toggle').click(function(){
    //console.log(2);
    $('.main-nav').toggleClass('main-nav-open',500);
    $(this).toggleClass('open');
  });
});