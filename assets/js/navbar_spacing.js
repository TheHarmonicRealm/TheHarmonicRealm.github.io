const navbar = document.querySelector("#navbar");
const navbar_spacer = document.querySelector("#navbar-spacer");

function matchSpacerHeight() {
    let navbar_height = navbar.getBoundingClientRect().height;
    navbar_spacer.style.height = `${navbar_height}px`;
    // set CSS variable for anchor adjustments
    document.documentElement.style.setProperty("--navbar-height", `${navbar_height}px`);
}

const observer = new ResizeObserver(matchSpacerHeight);
observer.observe(navbar);

// only float if user has JS
navbar.style.position = "fixed";

matchSpacerHeight();