/*
var hasRedirected = false;
var currentPage = window.location.toString();

function goToCurrentDay() {
    var d = new Date();
    var today = d.getDay();
    var destination = currentPage;
    //if (currentPage.slice(-1) == today){
    //    destination = currentPage.replace(currentPage.slice(-1),'');;
    //}

    if(!currentPage.includes('#'+today)) {
        destination = currentPage+'#'+today;
        return destination;
    }
    //document.location.replace("https://google.com");
    window.replace("https://google.com");
}


goToCurrentDay();*/