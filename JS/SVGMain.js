var svgInput;
var widthInput;
var heightInput;
var filenameInput;
var fullFilename;

function setValues() {
    svgInput = document.getElementById("main-input").value;
    widthInput = document.getElementById("width-input").value;
    heightInput = document.getElementById("height-input").value;
    filenameInput = document.getElementById("filename-input").value;
    fullFilename = filenameInput + ".svg";
}
function renderSVG() {
    document.getElementById("svg-display").innerHTML = svgInput;
    document.getElementById("svg-display").setAttribute("width", widthInput);
    document.getElementById("svg-display").setAttribute("height", heightInput);
}


