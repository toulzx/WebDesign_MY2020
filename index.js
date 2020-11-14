var welcomePage = document.getElementById("welcomePage");
var waterfallPage = document.getElementById("waterfallPage");
var detailsPage =  document.getElementById("detailsPage");
var navBar = document.getElementById("navBar");
var bookDetailLength = document.getElementsByClassName("bookDetail").length;

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

//避免for循环阻塞，把函数放入主线程，但会导致一些需要效果的失效。
for(let i=0;i<bookDetailLength;i++)
{
    (function(i){var tryShowDetails=setInterval(()=>{
    if(document.getElementById("detailsPage").className.indexOf('active')>-1)
    {
        //这句其实可以不用，和前面的visibility没什么用一起删了就行。
        document.getElementsByClassName("bookDetail")[i].style.visibility="visible";
        document.getElementsByClassName("titl")[i].className+=" title";
        document.getElementsByClassName("pictur")[i].className+=" picture";
        document.getElementsByClassName("pictureContaine")[i].className+=" pictureContainer";
        document.getElementsByClassName("contentContaine")[i].className+=" contentContainer";
        document.getElementsByClassName("divideLin")[i].className+=" divideLine";
        document.getElementsByClassName("conten")[i].className+=" content";
        clearInterval(tryShowDetails);
    }
},200)})(i);
    
}



//fullpage.js插件启用
$(document).ready(function(){
    $('#container').fullpage();
});  //激活fullpage的效果，可以检查页面看效果了　