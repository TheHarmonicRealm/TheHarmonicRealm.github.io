var darkModeEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function setButtonText() {

    if (darkModeEnabled) {
        document.getElementById("darkModeSwitch").innerHTML = "Switch to light mode";
    }
    else {
        document.getElementById("darkModeSwitch").innerHTML = "Switch to dark mode";
    }

}

function darkModeSwitch() {
    darkModeEnabled = !darkModeEnabled
    setButtonText();
}