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

function getRed(colorString) {
    red = parseInt(colorString.substr(1,2), 16);
}

function getGreen(colorString) {
    green = parseInt(colorString.substr(3,2), 16);
}

function getBlue(colorString) {
    blue = parseInt(colorString.substr(5,2), 16);
}

function getSingleColorFromString(colorString, choice) {
    if(choice == "red") {
        return getRed(colorString);
    }
    if(choice == "green") {
        return getGreen(colorString);
    }
    if(choice == "blue") {
        return getBlue(colorString);
    }
    else {
        return "error";
    }
}

function getSingleColorFromObject(id, choice) {
    return getSingleColorFromString(getColorStringFromObject(id), choice);
}

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
    var currentX = fetchAttributeFloat(id, 'cx');
    var currentY = fetchAttributeFloat(id, 'cy');
    var newX = currentX + xChange + "px";
    var newY = currentY + yChange + "px";
    setAttribute(id, 'cx', newX);
    setAttribute(id, 'cy', newY);
}

function getColorStringFromObject(id) {
    return document.getElementById(id).getAttribute('fill');
}

function fetchAttributeFloat(id, attribute) {
    return parseFloat(document.getElementById(id).getAttribute(attribute), 10);
}
function setAttribute(id, attribute, value) {
    document.getElementById(id).setAttribute(attribute, value);
}

var ellipseState = "moving right";
var count = 0;
function doAnimation() {
    ellipseState == "moving right" ? fetchAttributeFloat('test-ellipse','cx') >= 1000 ? ellipseState = "moving down" : moveEllipse('test-ellipse', 10, 0) : null;
    
    ellipseState == "moving down" ? fetchAttributeFloat('test-ellipse','cy') >= 500 ? ellipseState = "moving left" : moveEllipse('test-ellipse', 0, 10) : null;
    
    ellipseState == "moving left" ? fetchAttributeFloat('test-ellipse','cx') <= 300 ? ellipseState = "moving up" : moveEllipse('test-ellipse', -10, 0) : null;

    ellipseState == "moving up" ? fetchAttributeFloat('test-ellipse','cy') <= 300 ? ellipseState = "moving right" : moveEllipse('test-ellipse', 0, -10) : null;
    count ++;
    document.getElementById("counter-display").innerHTML = count;

    //moveRect('test-rect', 1, 1);
    /*if(parseInt(document.getElementById('test-rect').getAttribute('fill').substr(1,2), 16) <= 200){
    setInterval(changeColor('test-rect', "2", "0", "0"));
    }*/
    /*if(parseInt(document.getElementById('test-rect').getAttribute('fill').substr(1,2), 16) > 200){
        changeColor('test-rect', "-1", "0", "0");
    }*/
}

//Takes the id of an element and how much to change it by 
function changeColor(id, redChangeString, greenChangeString, blueChangeString) {
    var element = document.getElementById(id);

    var redChange16 = parseInt(redChangeString, 16);
    var greenChange16 = parseInt(greenChangeString, 16);
    var blueChange16 = parseInt(blueChangeString, 16);

    var currentColor = element.getAttribute('fill');
    console.log("current color:" + currentColor);

    var currentRed = parseInt(currentColor.substr(1,2), 16);
    var currentGreen16 = currentColor.substr(3,2);
    console.log("current green before parse:" + currentGreen16);
    var currentGreen = parseInt(currentColor.substr(3,2), 16);
    console.log("parsed green:" + currentGreen);
    var currentBlue = parseInt(currentColor.substr(5,2), 16);

    var newRed = currentRed + redChange16;
    var newGreen = currentGreen + greenChange16;
    console.log("new green before modification:" + newGreen);
    var newBlue = currentBlue + blueChange16;
    
    if(newRed > 255) {
        newRed = 255;
    }

    if(newGreen > 255) {
        newGreen = 255;
    }
    console.log("new green after limiting:" + newGreen);

    if(newBlue > 255) {
        newBlue = 255;
    }

    var newRedString = newRed.toString(16);
    var newGreenString = newGreen.toString(16);
    console.log("new green string before adding zeros:" + newGreenString);
    var newBlueString = newBlue.toString(16);

    if(newRedString.length < 2) {
        newRedString = "0" + newRedString;
    }

    if(newGreenString.length < 2) {
        newGreenString = "0" + newGreenString;
    }
    console.log("new green string after adding zeros:" + newGreenString);

    if(newBlueString.length < 2) {
        newBlueString = "0" + newBlueString;
    }

    var newColor = "#" + newRedString + newGreenString + newBlueString;
    console.log("final new color:" + newColor);
    element.setAttribute('fill', newColor);
    console.log("what the color was set to:" + element.getAttribute('fill'));
}

