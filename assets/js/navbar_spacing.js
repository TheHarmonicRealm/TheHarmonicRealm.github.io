const navbar = document.querySelector("#navbar");
const navbar_spacer = document.querySelector("#navbar-spacer");

function matchSpacerHeight() {
    var navbar_height = navbar.getBoundingClientRect().height;
    navbar_spacer.style.height = `${navbar_height}px`;
    // set CSS variable for anchor adjustments
    document.documentElement.style.setProperty("--navbar-height", `${navbar_height}px`);
}

var started_resizing = false;

try {
    const observer = new ResizeObserver(matchSpacerHeight);
    observer.observe(navbar);
    started_resizing = true;
}
catch (e) { // optional catch elements are only from ~2018
    try {
        console.log("You have an old browser! Falling back from ResizeObserver");
        window.addEventListener("resize", matchSpacerHeight);
        started_resizing = true;
    }
    catch (e) {
        console.log("Didn't work either. No floating navbar for you.")
    }
}

if (started_resizing) {
    // only float if user has JS
    navbar.style.position = "fixed";
    // also don't do the onload sizing of spacer -- keep it at 0
    matchSpacerHeight();
}