var currentPage = window.location.toString();

function goToCurrentDay() {
    var d = new Date();
    var today = d.getDay();
    var destination = currentPage;

    if(today !== 0 && today !== 6) {
        if(!currentPage.includes('.html#')) {
            destination = currentPage+'#'+today;
            console.log(destination);
            document.location.replace(destination);
        }
    }
}