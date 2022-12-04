function my_List() { 
    var Animal = { // List of arrays in one variable
        Species:"Birds",
        Color:"Blue",
        Breed:"Canary",
        Age:"10",
        Sound:"Warbling"
    };
    delete Animal.Age; // delete an array before its displayed
    document.getElementById("List").innerHTML = Animal.Species ; // to show JS code in html
}

document.write(typeof "Word ");
document.write(typeof 3 );
document.write("10" + 5);
document.write(10 >= 30 );
document.write(12 < 27 );
document.write(-3E310);

console.log(28 / 2);