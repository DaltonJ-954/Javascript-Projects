if (12 < 3) {
    document.write("The left number is larger than the number on the right.")
}

function get_Date() {
    if (new Date().getHours() < 21) {
        document.getElementById("Greetings").innerHTML = "How are you today?";
    }
}

function Shooting_Per() {
    Make = document.getElementById("Make").value;
    if (Make >= 25) {
        Attempt = "You win a top prize!!";
    }
    else if (Make > 14) {
        Attempt = "You win a prize!";
    }
    else {
        Attempt = "You lost! Start over!";
    }
    document.getElementById("Buckets").innerHTML = Attempt;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}