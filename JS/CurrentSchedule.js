function goToCurrentDay(currentPage) {
var d = new Date();
var today = d.getDay();
var destination = currentPage+"#"+today;
document.location.replace(destination);
}
