var completeSVG;
function generateContentOfFile() {
    completeSVG = `<?xml version="1.0" standalone="no"?> <svg version="1.1" baseProfile="full" width="${widthInput}" height="${heightInput}" xmlns="http://www.w3.org/2000/svg">` + "\n" + svgInput + "\n" + "</svg>";
} 
