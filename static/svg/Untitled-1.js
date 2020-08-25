setInterval(() => {
    var frame = document.getElementById("activityFrame").contentWindow;
    var elements = frame.document.getElementsByClassName("slide-control-button-next");
    var element = elements[0];
    if (!element[]0.classList.contains("cs-disabled")) {
        element.click();
    }
}, 2000);
