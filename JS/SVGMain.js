var svgInput;
var widthInput;
var heightInput;
var filenameInput;

function setValues() {
    svgInput = document.getElementById("main-input").value;
    widthInput = document.getElementById("width-input").value;
    heightInput = document.getElementById("height-input").value;
}
function renderSVG() {
    document.getElementById("svg-display").innerHTML = svgInput;
    document.getElementById("svg-display").setAttribute("width", widthInput);
    document.getElementById("svg-display").setAttribute("height", heightInput);
}


/*

//FROM https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function downloadSVG() {
    var element = document.getElementById("download-svg");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filenameInput);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
*/