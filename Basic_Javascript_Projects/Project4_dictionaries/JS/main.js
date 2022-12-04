function my_List() { //name of function
    Animal = { //
        Species:"Reptile", 
        Color:"Brown",
        Type:"Komodo",
        Weight:"90lbs",
        Length:"10ft"
    };
    delete Animal.Type; // This allows you to delete an array of code without going into the JS file
    document.getElementById("List").innerHTML = Animal.Type;
}