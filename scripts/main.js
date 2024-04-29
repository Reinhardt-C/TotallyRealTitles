(function () {
    const userlinks = [...document.querySelectorAll(":not(h1):is(.ulink,.user-link):not(:has(> .utitle))")];
    for (let l of userlinks) if (l.innerHTML.search("fluoxetine_eater") > -1 || l.innerHTML.search("ReinhardtC") > -1) addTitle(l);
})();

function addTitle(l) {
    const title = document.createElement("span");
    title.className = "utitle"; title.title = "Femboy Master";
    title.innerText = "FM"; title.style.color = "#c634eb";
    const childtext = [...l.childNodes].filter(e => e.nodeValue)[0];
    childtext.nodeValue = "\u00A0" + childtext.nodeValue;
    l.insertBefore(title, childtext);

}
