function loadLinks() {
    document.getElementById("links").innerHTML = 
    "<a href=\"/Schedules/RegularSchedule.html\">Regular Schedule</a> <br> <a href=\"/Schedules/AdvisorySchedule.html\">Advisory Schedule</a> <br> <a href=\"/Schedules/FinalsSchedule.html\">Finals Schedule</a> <br>";
}

window.onload = function(){
    loadLinks();
}