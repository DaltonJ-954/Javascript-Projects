// These are all different math problems in JavaScript using functions and variables
function modulus_Op() { 
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of. " + simple_Math;
}

function negation_Op() {
    var X = 10; 
    document.getElementById("Neg").innerHTML = -X;
}

function addition_Op() {
    var G = 77;
    var N = 1356;
    document.getElementById("Add").innerHTML = G + N;
}

function subtraction_Op() { 
    var v = 2375;
    var w = 1267;
    document.getElementById("Sub").innerHTML = v - w;
}

function division_Op() { 
    var hi = 354;
    var bye = 8;
    document.getElementById("Div").innerHTML = hi / bye;
}

function percentage_Op() { 
    var stock = 100;
    var market = 36;
    document.getElementById("Per").innerHTML = stock % market;
}

function inc_Op() {
    var B = 45;
    B++;
    document.getElementById("Inc").innerHTML = B++;
}

function dec_Op() {
    var K = 87.5600;
    K--;
    document.getElementById("Dec").innerHTML = K--;
}
// End off operator function and variables

//Math Object variables
function getRoot1Over2() {
    return Math.SQRT1_2;
  }
  
  console.log(getRoot1Over2());
  

  function getNatLog2() {
    return Math.LN2;
  }

  console.log(getRoot1Over());
  // End of Math Object variables


  
