var darkModeEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var cssVars =
    ["inactive", "hover", "active", "inactive-underline", "hover-underline", "active-underline",
        "link-underline-width", "background-color", "body-color", "links-background", "title-color",
        "title-background", "underline-color", "gradient-top", "gradient-bottom", "button-background",
        "button-text", "button-hover-background", "button-hover-text"];

function setButtonText() {

    if (darkModeEnabled) {
        document.getElementById("darkModeButton").innerHTML = "Switch to light mode";
    }
    else {
        document.getElementById("darkModeButton").innerHTML = "Switch to dark mode";
    }

}

/* takes the variable name without the hyphens and a string "dark" or "light", then adds that to the front */
function variableThemeSwitch(variable, mode) {
    var realVariableName = "--" + variable;
    var newVariableName = "--" + mode + "-" + variable;

    document.documentElement.style.setProperty(realVariableName, "var(" + newVariableName + ")");

}

function setColors() {
    if (darkModeEnabled) {
        for (remainingVars = cssVars.length + 1; remainingVars >= 0; remainingVars--) {
            variableThemeSwitch(cssVars[remainingVars], "dark");
        }
    }
    else if (!darkModeEnabled) {
        for (remainingVars = cssVars.length + 1; remainingVars >= 0; remainingVars--) {
            variableThemeSwitch(cssVars[remainingVars], "light");
        }
    }

}

function setColorsAndButtonText() {
    setColors();
    setButtonText();
}

function darkModeSwitch() {
    darkModeEnabled = !darkModeEnabled
    setColorsAndButtonText();
}