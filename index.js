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

    // favicon linking
    const favicon = document.createElement("link");
    favicon.rel = "shortcut icon";
    favicon.type = "image/png";
    favicon.href = "/indexfiles/favicon.png";
    document.head.appendChild(favicon);
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
        span2.innerText = `. As a fun challenge, kpoovakan built Dragonslayer with almost no HTML. She used a single <!DOCTYPE html> tag and a single <script> tag. Everything else was built dynamically through frontend JavaScript and CSS! Check out Dragonslayer's source code on `;
        const aGitHub = document.createElement("a");
        aGitHub.href = "https://github.com/kpoovakan/dragonslayer";
        aGitHub.innerText = "GitHub";
        const span3 = document.createElement("span");
        span3.innerText = ".";
        p.appendChild(span1);
        p.appendChild(aKpoovakan);
        p.appendChild(span2);
        p.appendChild(aGitHub);
        p.appendChild(span3);
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