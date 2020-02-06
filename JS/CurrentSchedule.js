function goToCurrentDay() {
    var d = new Date();
    var today = d.getDay();
    var currentPage = window.location;
    var destination = currentPage+"#"+today;
    document.location.replace(destination);
    }