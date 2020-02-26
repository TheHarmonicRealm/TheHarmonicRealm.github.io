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
        //set it to be dark
        variableThemeSwitch("inactive", "dark");
        variableThemeSwitch("hover", "dark");
        variableThemeSwitch("active", "dark");
        variableThemeSwitch("inactive-underline", "dark");
        variableThemeSwitch("hover-underline", "dark");
        variableThemeSwitch("active-underline", "dark");
        variableThemeSwitch("link-underline-width", "dark");
        variableThemeSwitch("background-color", "dark");
        variableThemeSwitch("body-color", "dark");
        variableThemeSwitch("links-background", "dark");
        variableThemeSwitch("title-color", "dark");
        variableThemeSwitch("title-background", "dark");
        variableThemeSwitch("underline-color", "dark");
        variableThemeSwitch("gradient-top", "dark");
        variableThemeSwitch("gradient-bottom", "dark");
        variableThemeSwitch("button-background", "dark");
        variableThemeSwitch("button-text", "dark");
        variableThemeSwitch("button-hover-text", "dark");
        variableThemeSwitch("button-hover-background", "dark");
        variableThemeSwitch("button-border", "dark");
    }
    else if (!darkModeEnabled) {
        //set it to be light
        variableThemeSwitch("inactive", "light");
        variableThemeSwitch("hover", "light");
        variableThemeSwitch("active", "light");
        variableThemeSwitch("inactive-underline", "light");
        variableThemeSwitch("hover-underline", "light");
        variableThemeSwitch("active-underline", "light");
        variableThemeSwitch("link-underline-width", "light");
        variableThemeSwitch("background-color", "light");
        variableThemeSwitch("body-color", "light");
        variableThemeSwitch("links-background", "light");
        variableThemeSwitch("title-color", "light");
        variableThemeSwitch("title-background", "light");
        variableThemeSwitch("underline-color", "light");
        variableThemeSwitch("gradient-top", "light");
        variableThemeSwitch("gradient-bottom", "light");
        variableThemeSwitch("button-background", "light");
        variableThemeSwitch("button-text", "light");
        variableThemeSwitch("button-hover-text", "light");
        variableThemeSwitch("button-hover-background", "light");
        variableThemeSwitch("button-border", "light");
    }

}

function darkModeSwitch() {
    darkModeEnabled = !darkModeEnabled
    setColors();
    setButtonText();
}