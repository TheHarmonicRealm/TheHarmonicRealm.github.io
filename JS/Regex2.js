var regexInput;
var regexOutput;

function setValues() {
    regexInput = document.getElementById("main-input").value;
}
function runRegexes() {
    regexOutput = regexInput;

    regexOutput = regexOutput.replace(/("|'|“|”|‘|’)/g, "");
    regexOutput = regexOutput.replace(/\./g, ",");
    regexOutput = regexOutput.replace(/, /g, ",");
    regexOutput = regexOutput.replace(/\d/g, "");
    regexOutput = regexOutput.replace(/-/g, ",");
    regexOutput = regexOutput.replace(/[^\w,\n ]/g, "");
    regexOutput = regexOutput.replace(/(\w)\n\n*(\w)/g, "$1,$2");
    regexOutput = regexOutput.replace(/(\w)  *(\w)/g, "$1,$2");
    regexOutput = regexOutput.replace(/(\w)  *(\w)/g, "$1,$2");
    regexOutput = regexOutput.replace(/ /g, "");
    regexOutput = regexOutput.replace(/\n/g, "");
    regexOutput = "," + regexOutput;
    regexOutput = regexOutput.replace(/,/g, ",,");

    document.getElementById("output-display").innerHTML = regexOutput;
}