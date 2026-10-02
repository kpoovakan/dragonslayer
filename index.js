"use strict";
window.addEventListener("load", function() {
    // add a comment to explain things to people who opened the inspect element
    const comment = document.createComment("You see a lot of HTML tags here because they were dynamically added through JavaScript. The source code for Dragonslayer does not have these HTML tags. Check that I'm telling the truth by exploring Dragonslayer's actual source code. https://github.com/kpoovakan/dragonslayer");
    document.prepend(comment);

    // stylesheet linking
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = "style.css";
    document.head.appendChild(stylesheet);

    // font linking
    const pre1 = document.createElement("link");
    pre1.rel = "preconnect";
    pre1.href = "https://fonts.googleapis.com";
    document.head.appendChild(pre1);
    const pre2 = document.createElement("link");
    pre2.rel = "preconnect";
    pre2.href = "https://fonts.gstatic.com";
    pre2.crossOrigin = "";
    document.head.appendChild(pre2);
    const pre3 = document.createElement("link");
    pre3.href = "https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&display=swap";
    pre3.rel = "stylesheet";
    document.head.appendChild(pre3);

    // favicon linking
    const favicon = document.createElement("link");
    favicon.rel = "shortcut icon";
    favicon.type = "image/png";
    favicon.href = "/indexfiles/favicon.png";
    document.head.appendChild(favicon);

    // title
    const title = document.createElement("title");
    title.textContent = "Dragonslayer || interactive story game by kpoovakan";
    document.head.appendChild(title);

    // meta viewport
    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(viewport);

    // main body container
    const main = document.createElement("div");
    main.className = "container";
    main.id = "container";
    //document.body.appendChild(main);

    // main inner containers
    const stage = document.createElement("div");
    stage.className = "stage";
    stage.id = "stage";
    main.appendChild(stage);
    const column = document.createElement("div");
    column.className = "column";
    column.id = "column";
    main.appendChild(column);

    // append main
    document.body.appendChild(main);

    // header
    const heading = document.createElement("p");
    heading.className = "header";
    heading.textContent = "Dragonslayer";
    const h1 = document.createElement("a");
    h1.href = "javascript:void(0);";
    h1.setAttribute("onclick", "dialogAbout('show')");
    h1.textContent = "about";
    heading.appendChild(h1);
    const h2 = document.createElement("a");
    h2.href = "https://github.com/kpoovakan/dragonslayer";
    h2.textContent = "source";
    heading.appendChild(h2);
    document.getElementById("column").appendChild(heading);

    // other script linking
    const scriptStory = document.createElement("script");
    scriptStory.src = "story.js";
    document.head.appendChild(scriptStory);

    // intro
    const textbox = document.createElement("p");
    textbox.id = "mainText";
    textbox.innerText = "Dragons are dangerous creatures, kidnapping princesses and townsfolk alike. The kingdom of Unus trains strong, noble, and valiant dragonslayers every year.";
    document.getElementById("column").appendChild(textbox);
    backdrop("field");
    character("dragon", "fly", "50%", "36%", "2");

    // buttons
    const buttons = document.createElement("div");
    buttons.className = "buttons";
    buttons.id = "buttons";
    const back = document.createElement("button");
    back.id = "back";
    back.innerText = "< back";
    back.setAttribute("onclick", "back()");
    back.className = "buttonDisabled";
    buttons.appendChild(back);
    const next = document.createElement("button");
    next.id = "next";
    next.innerText = "next >";
    next.setAttribute("onclick", "next()");
    buttons.appendChild(next);
    buttons.style.display = "flex";
    document.getElementById("column").appendChild(buttons);

    // button choices
    const choices = document.createElement("div");
    choices.className = "buttons";
    choices.id = "choices";
    const one = document.createElement("button");
    one.id = "choiceOne";
    one.setAttribute("onclick", "choice(this)");
    const two = document.createElement("button");
    two.id = "choiceTwo";
    two.setAttribute("onclick", "choice(this)");
    choices.appendChild(one);
    choices.appendChild(two);
    choices.style.display = "none";
    document.getElementById("column").appendChild(choices);
});

function dialogAbout(what) {
    var grab = document.getElementById("about");
    if (grab === null) {
        const dialog = document.createElement("dialog");
        dialog.id = "about";
        const p = document.createElement("p");
        const span1 = document.createElement("span");
        span1.innerText = `Welcome to Dragonslayer! This is an interactive story created by `;
        const aKpoovakan = document.createElement("a");
        aKpoovakan.href = "https://kpoovakan.github.io";
        aKpoovakan.innerText = "kpoovakan";
        const span2 = document.createElement("span");
        span2.innerText = `. As a fun challenge, kpoovakan built Dragonslayer with almost no HTML. She used a single <!doctype html> tag and a single <script> tag. Everything else was built dynamically through frontend JavaScript and CSS! Check out Dragonslayer's source code on `;
        const aGitHub = document.createElement("a");
        aGitHub.href = "https://github.com/kpoovakan/dragonslayer";
        aGitHub.innerText = "GitHub";
        const span3 = document.createElement("span");
        span3.innerText = ".";
        const aClose = document.createElement("a");
        aClose.href = "javascript:void(0);";
        aClose.innerText = "back to game >"
        aClose.setAttribute("onclick", "dialogAbout('hide')");
        aClose.style.position = "absolute";
        aClose.style.right = "0";
        aClose.style.bottom = "0";
        aClose.style.padding = "31px";
        aClose.style.backgroundColor = "var(--colorGrey)";
        aClose.style.borderRadius = "3px";
        const img = document.createElement("img");
        img.src = "assets/html.png";
        const span4 = document.createElement("span");
        span4.innerText = "the entire HTML source code";
        p.appendChild(span1);
        p.appendChild(aKpoovakan);
        p.appendChild(span2);
        p.appendChild(aGitHub);
        p.appendChild(span3);
        p.appendChild(img);
        p.appendChild(aClose);
        p.appendChild(span4);
        dialog.appendChild(p);
        document.body.appendChild(dialog);
        var grab = document.getElementById("about");
    }
    if (what == "show") {
        grab.showModal();
    } else if (what == "hide") {
        grab.close();
    } else {
        console.error(`cmd: ${what} in attempt to show/hide dialogAbout`);
    }
}

async function textType(text, id = "mainText") {
    const element = document.getElementById(id);
    const length = text.length;
    var current = "";
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    for (let i = 0; i < length; i++) {
        var current = current + text[i];
        await wait(3.14);
        element.innerHTML = current;
    }
}

function backdrop(filename) { // uses just the name, no file extension
    var backdropContainer = document.getElementById("backdropContainer");
    if (backdropContainer === null) {
        var backdropContainer = document.createElement("div");
        backdropContainer.className = "backdropContainer";
        backdropContainer.id = "backdropContainer";
        document.getElementById("stage").appendChild(backdropContainer);
    } else {
        backdropContainer.replaceChildren();
    }
    const path = `assets/backdrops/${filename}.svg`;
    const backdrop = document.createElement("img");
    backdrop.src = path;
    backdrop.className = "backdrop";
    backdropContainer.appendChild(backdrop);
    if (filename === "shop") {
        backdropContainer.style.backgroundColor = "var(--colorForeground)";
    } else if (filename === "tower" || filename === "field") {
        backdropContainer.style.backgroundColor = "var(--colorBlue)";
    }
}

function character(name, costume, x, y, size = 1) {
    var char = document.getElementById(name);
    if (char === null) {
        var char = document.createElement("img");
        char.className = "character";
        char.id = name;
        document.getElementById("stage").appendChild(char);
    }
    char.src = `assets/${name}/${costume}.svg`;
    char.style.top = y;
    char.style.left = x;
    char.style.transform = `scale(${size}) translate(-50%, -50%)`;
}

function delCharacter(name) {
    let char = document.getElementById(name);
    if (char == null) {
        return;
    }
    char.remove();
}