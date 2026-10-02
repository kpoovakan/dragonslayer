"use strict";

function enableButtons() {
    document.getElementById("back").removeAttribute("class");
    document.getElementById("next").removeAttribute("class");
}

function switchButtons(choiceOne, choiceTwo) {
    const mainDisplay = document.getElementById("buttons").style.display;
    if (mainDisplay == "flex") {
        document.getElementById("buttons").style.display = "none";
        document.getElementById("choices").style.display = "flex";
        document.getElementById("choiceOne").innerText = choiceOne;
        document.getElementById("choiceTwo").innerText = choiceTwo;
    } else if (mainDisplay == "none") {
        document.getElementById("buttons").style.display = "flex";
        document.getElementById("choices").style.display = "none";
    }
}

function choice(thisElement) {
    if (thisElement.id == "choiceOne") {
        console.log("one");
    } else if (thisElement.id == "choiceTwo") {
        console.log("two");
    }
}

function sceneOne() {
    character("judah", "wave", "50%", "50%");
    textType("Judah is a dragonslayer recruit. When he isn't training, he spends his spare time in his father's shop, maintaining merchandise and serving the townsfolk.", "mainText");
}