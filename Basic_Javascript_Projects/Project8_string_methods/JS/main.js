function my_Sentence() {   
    var read1 = "For every action there is " + "an equal and oppsite reaction." +
    " You receive from the world what " + "you give to the world.";
    document.getElementById("Assign").innerHTML = (read1);
}
    
function slice_Method() {
    var Sentence = "All work and no play makes Dalton a dull boy.";
    var Section = Sentence.slice(26,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 155;
    document.getElementById("loot").innerHTML = X.tostring();
}

function precision_Method() {
    var X = 12938.3012987376112
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Function() {
    var Z = 9.67905;
    var A = Z.toFixed();
    document.getElementById("good").innerHTML = Z;
}

function value_Function() {
    var Z = "Hi" + " there!";
    var A = Z.valueOf();
    document.getElementById("define").innerHTML = Z;
}

