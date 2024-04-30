const TEMPVISTITLES = {
    "fluoxetine_eater": ["Cute Master", "CM"],
    "ReinhardtC": ["Not Master", "NM"]
};

function run(muts) {
    const userlinks = [...(muts ? muts[0].target : document).querySelectorAll(":not(h1):is(.ulink,.user-link):not(:has(> .utitle))")];
    for (let l of userlinks) for (let u in TEMPVISTITLES) 
        if (l.innerHTML.search(u) > -1) 
            addTitle(l, ...TEMPVISTITLES[u]);
}

function addTitle(l, name = "Master", abbr = "M", colour = "var(--c-brag)") {
    const title = document.createElement("span");
    title.className = "utitle"; title.title = name;
    title.innerText = abbr; title.style.color = colour;
    const childtext = [...l.childNodes].filter(e => e.nodeValue)[0];
    childtext.nodeValue = "\u00A0" + childtext.nodeValue;
    l.insertBefore(title, childtext);

}

(function () {
    run();    
    const options = {subtree:true,childList:true,attributes:true};
    const observer = new MutationObserver(run);
    observer.observe(document.body, options);
})();
