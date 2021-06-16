var counter = 0;
var currentId = "mouseRect 0";

function setAttribute(id, attribute, value) {
    document.getElementById(id).setAttribute(attribute, value);
}

function drawObject(mouseX, mouseY) {
 var newRect = document.createElement("rect");
 newRect.setAttribute("id", currentId);
 var displayDiv = document.getElementById("svg-display");
 displayDiv.appendChild(newRect);
 setAttribute(currentId, "x", mouseX);
 setAttribute(currentId, "y", mouseY);
 setAttribute(currentId, "width", "100px");
 setAttribute(currentId, "height", "200px");
 setAttribute(currentId, "fill", "red");
     
     
 counter++;
 currentId = "mouseRect" + counter;
    
 //document.getElementById("svg-display").innerHtml = 
}