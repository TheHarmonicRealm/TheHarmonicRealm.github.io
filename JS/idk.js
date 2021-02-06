/*
var rectangle1 = document.createElement('rect');
rectangle1.setAttribute('width', '100px');
rectangle1.setAttribute('height', '200px');
rectangle1.setAttribute('x', '40px');
rectangle1.setAttribute('y', '500px');
rectangle1.setAttribute('fill', 'red');
var svgDiv = document.getElementById('svg-display');
svgDiv.appendChild(rectangle1);
*/

function moveRect(id, xChange, yChange) {
    var element = document.getElementById(id);
    var currentX = parseFloat(element.getAttribute('x'), 10);
    var currentY = parseFloat(element.getAttribute('y'), 10);
    var newX = currentX + xChange + "px";
    var newY = currentY + yChange + "px";
    element.setAttribute('x', newX);
    element.setAttribute('y', newY);
}

function moveEllipse(id, xChange, yChange) {
    var element = document.getElementById(id);
    var currentX = parseFloat(element.getAttribute('cx'), 10);
    var currentY = parseFloat(element.getAttribute('cy'), 10);
    var newX = currentX + xChange + "px";
    var newY = currentY + yChange + "px";
    element.setAttribute('cx', newX);
    element.setAttribute('xy', newY);
}

function doAnimation() {
    //moveEllipse('test-ellipse', 10, -10);
    moveRect('test-rect', 1, 1);
    changeColor('test-rect', "1", "0", "0");
}

function changeColor(id, redChangeString, greenChangeString, blueChangeString) {
    var element = document.getElementById(id);

    var redChange16 = parseInt(redChangeString, 16);
    var greenChange16 = parseInt(greenChangeString, 16);
    var blueChange16 = parseInt(blueChangeString, 16);

    var currentColor = element.getAttribute('fill');

    var currentRed = parseInt(currentColor.substr(1,2), 16);
    var currentGreen = parseInt(currentColor.substr(3,4), 16);
    var currentBlue = parseInt(currentColor.substr(5,6), 16);

    var newRed = currentRed + redChange16;
    var newGreen = currentGreen + greenChange16;
    var newBlue = currentBlue + blueChange16;
    
    if(newRed > 255) {
        newRed = 255;
    }

    if(newGreen > 255) {
        newGreen = 255;
    }

    if(newBlue > 255) {
        newBlue = 255;
    }

    var newRedString = newRed.toString(16);
    var newGreenString = newGreen.toString(16);
    var newBlueString = newBlue.toString(16);

    if(newRedString.length < 2) {
        newRedString = "0" + newRedString;
    }

    if(newGreenString.length < 2) {
        newGreenString = "0" + newGreenString;
    }

    if(newBlueString.length < 2) {
        newBlueString = "0" + newBlueString;
    }

    var newColor = "#" + newRedString + newGreenString + newBlueString;
    console.log(newColor);
    element.setAttribute('fill', newColor);
}