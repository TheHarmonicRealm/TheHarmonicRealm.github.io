var completeSVG;
var downloadLink;

function generateContentOfFile() {
    completeSVG = `<?xml version="1.0" standalone="no"?>\n <svg version="1.1" baseProfile="full" width="${widthInput}" height="${heightInput}" xmlns="http://www.w3.org/2000/svg">` + "\n" + svgInput + "\n" + "</svg>";
} 

//FROM https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function downloadSVG(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}