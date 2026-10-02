"use strict";

globalThis.currentScene = 0;
const functions = [
    "sceneZero", "sceneOne", "sceneTwo"
];
function back() {
    globalThis.currentScene = globalThis.currentScene - 1;
    if (globalThis.currentScene < 0) {
        globalThis.currentScene = 0;
    }
    var func = functions[globalThis.currentScene];
    window[func]();
    enableButtons();
    if (globalThis.currentScene == 0) {
        document.getElementById("back").setAttribute("class", "buttonDisabled");
    }
}
function next() {
    globalThis.currentScene = globalThis.currentScene + 1;
    if (globalThis.currentScene > (functions.length - 1)) {
        globalThis.currentScene = functions.length - 1;
    }
    var func = functions[globalThis.currentScene];
    window[func]();
    enableButtons();
    if (globalThis.currentScene == (functions.length - 1)) {
        document.getElementById("next").setAttribute("class", "buttonDisabled");
    }
}

function enableButtons() {
    document.getElementById("back").removeAttribute("class");
    document.getElementById("next").removeAttribute("class");
}

function disableAll() {
    document.getElementById("back").setAttribute("class", "buttonDisabled");
    document.getElementById("next").setAttribute("class", "buttonDisabled");
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

function sceneZero() {
    backdrop("field");
    character("dragon", "fly", "50%", "36%", "2");
    delCharacter("judah");
    textType("Dragons are dangerous creatures, kidnapping princesses and townsfolk alike. The kingdom of Unus trains strong, noble, and valiant dragonslayers every year.");
}

function sceneOne() {
    backdrop("shop");
    character("judah", "wave", "50%", "50%");
    delCharacter("dragon");
    textType("Judah is a dragonslayer recruit. When he isn't training, he spends his spare time in his father's shop, maintaining merchandise and serving the townsfolk.", "mainText");
}

function sceneTwo() {
    textType("Hello, world!");
}