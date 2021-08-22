var logoRotationDegrees = 0;
function doAnimation() {
    logoRotationDegrees ++;
    if(logoRotationDegrees >=360)
        logoRotationDegrees = 0;
    document.getElementById("gear").style.transform = "rotate(" + logoRotationDegrees +"deg)";
    requestAnimationFrame(doAnimation);
}