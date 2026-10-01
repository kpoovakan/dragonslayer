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