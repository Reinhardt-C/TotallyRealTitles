const TEMPVISTITLES = {
    "fluoxetine_eater": ["Cutie Master", "CM", false],
    "ReinhardtC": ["Not Master", "NM", false],
    "alireza2003": ["Lose Master", "LM", true],
    "german11": ["Super Grandmaster", "SGM", true],
    "KiwiCoach": ["Horde Master", "HM", true]
};

function run(muts) {
    const userlinks = [...(muts ? muts[0].target : document).querySelectorAll(":is(a, span):is(.ulink,.user-link):not(:has(> .utitle))")];
    for (let l of userlinks) for (let u in TEMPVISTITLES) 
        if (l.innerHTML.search(u) > -1) 
            addTitle(l, ...TEMPVISTITLES[u].slice(0,2));
    const userlinkst = [...(muts ? muts[0].target : document).querySelectorAll(":is(a, span):is(.ulink,.user-link):has(> .utitle)")];
    for (let l of userlinkst) for (let u in TEMPVISTITLES) 
        if (TEMPVISTITLES[u][2] && l.innerHTML.search(u) > -1) {
            l.querySelector(".utitle").remove();
            addTitle(l, ...TEMPVISTITLES[u].slice(0,2), true);
        }
}

function addTitle(l, name = "Master", abbr = "M", repl = false, colour = "#d6483e") {
    const title = document.createElement("span");
    title.className = "utitle"; title.title = name;
    title.innerText = abbr; title.style.color = colour;
    const childtext = [...l.childNodes].filter(e => e.nodeValue)[0];
    childtext.nodeValue = (repl ? "" : "\u00A0") + childtext.nodeValue;
    l.insertBefore(title, childtext);

}

(function () {
    run();    
    const options = {subtree:true,childList:true,attributes:true};
    const observer = new MutationObserver(run);
    observer.observe(document.body, options);
})();
