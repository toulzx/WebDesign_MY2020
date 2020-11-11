var welcomePage = document.getElementById("welcomePage");
var waterfallPage = document.getElementById("waterfallPage");
var detailsPage =  document.getElementById("detailsPage");
var navBar = document.getElementById("navBar");

function getViewPortHeight() {
     return document.documentElement.clientHeight || document.body.clientHeight;
}
function getViewPortWidth() {
    return document.documentElement.clientWidth || document.body.clientWidth;
}

window.onload = function() {
    welcomePage.style.marginTop = navBar.clientHeight + "px";
    welcomePage.style.height = getViewPortHeight() - navBar.clientHeight + "px";
    waterfallPage.style.height = getViewPortHeight() + "px";
    detailsPage.style.height = getViewPortHeight() + "px";
}
