function myFunction() {
    var greet1="Morning ";
    var greet2="How's it going!";
    var greet3 = greet1 + greet2;

document.getElementById("demo").innerHTML = myFunction = greet3;
}

function greet(name,lastName) {
    window.alert('knock KNOCK! ' + name + lastName)
}

greet('Mario ', 'Luigi');


