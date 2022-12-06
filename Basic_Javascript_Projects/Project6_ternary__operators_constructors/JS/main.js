function Drink_Function() {
    var Age, Cant_drink;
    Age = document.getElementById("Age").value;
    Can_drink = (Age < 21) ? "You are too young":"You are old enough";
    document.getElementById("rules").innerHTML = Can_drink + " to ride ";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emiky = new Vehicle("Jeep", "Trail Hawk", "2019", "White adnd Black")
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
    " manufactured in " + Jack.Vehicle_Year;
}

function myage(y) {
            
    document.write("My age is " +y);
}

function myname(x,y) {
    
    document.write("My name is John<br>");
    myage(y);
}
myname("John",33);
document.getElementsByTagName("nested"),innerHeight = myname(x,y);