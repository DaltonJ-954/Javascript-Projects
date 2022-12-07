function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 7) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let WWE = "Wrestlemania!";
let length = WWE.length;
console.log(WWE.length);

var Animal = ["Elephant", "Tiger", "Python", "Hyena", "Zebra", "Lion", "Baboon", "Parrot", "Bear"];
var Species = "";
var V;
function the_Loop() {
    for (Y = 0; Y < Animal.length; Y++) {
    Species += Animal[Y] + "<br>";
    }
    document.getElementById("animal_List").innerHTML = Species;
}

function my_house() {
    var sections = [];
    Kitchen[0] = "for cooking";
    Bedroom[1] = "for sleeping";
    Dining_room[2] = "to eat dinner";
    Bathroom[3] = "to shower or bathe";
    Garage[4] = "for storage and cars";
    document.getElementById("Home").innerHTML = "This part of the house is " + Garage[4] + ".";
}

function constant_function() {
    const Musical_Instruments = {type:"guitar", brand:"Fender", color:"black"}
    Musical_Instruments.color = "blue";
    Musical_Instruments.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instruments.type + " was " + Musical_Instruments.price;

}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

var X = 82;
document.write(X);
{
  var X = 33;
  document.write("<br>" + X);
}
document.write("<br>" + X);

function my_Function() {
    return Math.PI;
}

function myFunction(Dalton) {
    return "What's poppin " + Dalton;
    document.getElementById("greet").innerHTML = ("Dalton");
}

let car = {
    make: "GMC ",
    model: "Acadia AT-4 ",
    year: "2023 ",
    color: "Smoke Gray ",
    description: function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementsByTagName("revver").innerHTML = car.description();

const names = ["Nontle", "Dalton", "Patrick", "Sylvia", "Donald", "Jaylen", "Paul"]; // This is an array list that has a loop function that searches for a specific value within the array.
for (person of names) {
    console.log(person);
    if (person === "Sylvia") {
        console.log("Sylvia is in my list!")
        break; // A break function that stops the loop at a certain point in the code.
    }
}

let loading = 0; // This is a "let" function

while(loading < 100){ // This is a "while" function
    console.log("Website is still loading");

    loading++; // Loading value that has an assigned add + 1 function till it reaches a specific number.
}