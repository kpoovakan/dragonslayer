"use strict";

globalThis.currentScene = 0;
const functions = [
    "sceneZero", "sceneOne", "sceneTwo", "sceneThree", "sceneFour", "sceneFive", "sceneSix", "sceneSeven", "sceneEight", "sceneNine", "sceneTen", "sceneEleven", "sceneTwelve", "sceneThirteen", "sceneFourteen", "sceneFifteen", "sceneSixteen"
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
    enableButtons();
    window[func]();
    if (globalThis.currentScene == (functions.length - 1)) {
        document.getElementById("next").setAttribute("class", "buttonDisabled");
    }
}

function enableButtons(disable = null) {
    document.getElementById("back").removeAttribute("class");
    document.getElementById("next").removeAttribute("class");
    if (disable !== null) {
        document.getElementById(disable).setAttribute("class", "buttonDisabled");
    }
}

function disableAll() {
    document.getElementById("back").setAttribute("class", "buttonDisabled");
    document.getElementById("next").setAttribute("class", "buttonDisabled");
}


function switchButtons(choiceOne = null, choiceTwo = null, main = null) {
    if (main) {
        document.getElementById("buttons").style.display = "flex";
        document.getElementById("choices").style.display = "none";
        return;
    }
    document.getElementById("buttons").style.display = "none";
    document.getElementById("choices").style.display = "flex";
    document.getElementById("choiceOne").innerText = choiceOne;
    document.getElementById("choiceTwo").innerText = choiceTwo;
}

function choice(thisElement) {
    const choice = thisElement.innerText;
    if (choice === "Polish potion bottle") {
        delCharacter("judah");
        character("judah", "potion", "25%", "55%", 1);
        globalThis.choice1 = "potion";
        next();
    } else if (choice === "Polish sword") {
        delCharacter("judah");
        character("judah", "sword", "25%", "55%", 1);
        globalThis.choice1 = "sword";
        next();
    } else if (choice === "Ignore knocking") {
        character("villager", "shocked", "65%", "55%", 1);
        textAdd(" A villager bursts into the shop despite Judah's ignorance.");
        switchButtons(null, null, "main");
        enableButtons("back");
    } else if (choice === "Open door") {
        next();
        return;
    } else if (choice === "Be a dragonslayer") {
        next();
        return;
    } else if (choice === "Find Ruby") {
        textType("The villager convinces Judah that the dragon kidnapped Ruby. Judah decides to slay the dragon so that he may save Ruby.");
        switchButtons(null, null, "main");
        enableButtons("back");
    } else if (choice === "Kill dragon") {
        next();
        return;
    } else if (choice === "End story") {
        window.location.href = "/";
        return;
    } else if (choice === "Continue story") {
        mwehehehehe();
        return;
    }
    if (thisElement.id == "choiceOne") {
        console.log("one");
    } else if (thisElement.id == "choiceTwo") {
        console.log("two");
    }
}

function sceneZero() {
    textType("Dragonslayer is an interactive story by kpoovakan. Use the buttons below to start!");
    delCharacter("dragon");
    backdrop("thumb");
}

function sceneOne() {
    backdrop("field");
    character("dragon", "fly", "50%", "36%", 0, "3.14");
    delCharacter("judah");
    textType("Dragons are dangerous creatures, kidnapping princesses and townsfolk alike. The kingdom of Unus trains strong, noble, and valiant dragonslayers every year.");
}

function sceneTwo() {
    backdrop("shop");
    character("judah", "wave", "45%", "55%");
    delCharacter("dragon");
    delCharacter("ruby");
    textType("Judah is a dragonslayer recruit. When he isn't training, he spends his spare time in his father's shop, maintaining merchandise and serving the townsfolk.");
}

function sceneThree() {
    delCharacter("judah");
    character("judah", "wave", "25%", "55%", 1);
    character("ruby", "blush", "20%", "70%")
    textType("The kingdom's villages are filled with lovely maidens. One of them, Ruby, frequently visits Judah's shop. Judah likes talking to Ruby, but Judah must remember to focus on his work.");
}

function sceneFour() {
    delCharacter("judah");
    character("judah", "wave", "25%", "55%", 1);
    textAdd(" Today, Judah must decide what shop items he will polish.");
    switchButtons("Polish potion bottle", "Polish sword");
}

function sceneFive() {
    enableButtons("back");
    switchButtons(null, null, "main");
    delCharacter("ruby");
    delCharacter("judah");
    character("judah", globalThis.choice1, "25%", "55%", 1);
    textType("Suddenly, Judah hears glass bottles breaking, and hears a scream. Judah looks up, and Ruby is gone!");
}

function sceneSix() {
    delCharacter("judah");
    delCharacter("villager");
    character("judah", "mad", "45%", "55%");
    textType("Empty potion bottles leave broken glass on the floor. The shop's window has been shattered. There is pounding on the shop door.")
    switchButtons("Open door", "Ignore knocking");
}

function sceneSeven() {
    delCharacter("villager");
    character("villager", "shocked", "65%", "55%", 1);
    textType(`"There's a... DRAGON!" the villager shouts. Judah looks out the shop window and sees a dragon flying away. Judah also realizes that Ruby has disappeared.`);
    switchButtons("Find Ruby", "Be a dragonslayer");
    backdrop("shop");
}

function sceneEight() {
    delCharacter("villager");
    switchButtons(null, null, "main");
    enableButtons("back");
    backdrop("field");
    delCharacter("judah");
    delCharacter("dragon");
    character("judah", "stand", "15%", "55%");
    character("dragon", "fly", "75%", "36%", 0, "3.14");
    textType("Judah chases the dragon across a field.")
}

function sceneNine() {
    backdrop("tower");
    delCharacter("dragon");
    character("dragon", "roar", "45%", "75%", 0, "3.14");
    delCharacter("judah");
    character("judah", "stand", "75%", "65%", 1);
    textType("The dragon leads Judah to a tower. The dragon guards the tower suspiciously. What should Judah do? (not really a choice haha)");
    switchButtons("Kill dragon", "Kill dragon");
}

function sceneTen() {
    switchButtons(null, null, "main");
    delCharacter("judah");
    character("judah", "sword", "45%", "55%", 1, 0.5);
    delCharacter("dragon");
    textType("Judah the dragonslayer defeats the dragon!");
    backdrop("tower");
}

function sceneEleven() {
    backdrop("inside");
    textType("Judah enters the tower to check and see if Ruby is inside. However, Ruby is not in the tower.");
    delCharacter("judah");
    character("judah", "tired", "25%", "55%");
}

function sceneTwelve() {
    backdrop("shop");
    textType("Judah returns to his shop to devise a plan for finding Ruby.");
    delCharacter("judah");
    character("judah", "tired", "25%", "55%", 1);
}

function sceneThirteen() {
    delCharacter("judah");
    character("judah", "potion", "25%", "60%", 1);
    textType("Judah suddenly spots the broken potion bottles on the floor. He picks one up to inspect it.");
}

function sceneFourteen() {
    delCharacter("judah");
    character("judah", "potion", "25%", "60%", 1);
    textAdd(` The label on the bottle reads, "Hooman Become Dragin" and Judah realizes that Ruby was splashed by the potion, turned into the purple dragon, and flew out the shop window earlier.`);
}

function sceneFifteen() {
    delCharacter("judah");
    character("judah", "mad", "25%", "55%", 1);
    textType("But... Judah slayed the purple dragon. Judah realizes that Ruby is gone because of him!");
}

function sceneSixteen() {
    textAdd(" Should we end the story here with a sad ending, or continue the story? Ending the story will redirect to kpoovakan's main website.");
    switchButtons("End story", "Continue story");
}