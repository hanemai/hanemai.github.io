let fname = "";

// Ctrl + shift + I shows errors (console output).

// function for the greet
function greet() {
    //grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // show the result!
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";

}

// function to trivia game
function trivia() {
    //grab the greet paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    // get the checked values from the form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // decide what to "print"
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?"
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!"
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }

}

// function to two truths and a lie game
function ttl() {
    //grab the greet paragraph
    let ttlAnswer = document.getElementById("ttl-answer");

    // get the checked values from the form
    let sixteenSelected = document.getElementById("sixteen").checked;
    let siblingSelected = document.getElementById("sibling").checked;
    let dogSelected = document.getElementById("dog").checked;

    // decide what to "print"
    if (sixteenSelected) {
        ttlAnswer.innerHTML = fname + ", you are correct!"
    } else if (siblingSelected) {
        ttlAnswer.innerHTML = fname + ", you are wrong. I have a sibling who is 8 years old."
    } else if (dogSelected) {
        ttlAnswer.innerHTML = fname + ", you are wrong. I have a 2 year old dog."
    }


}