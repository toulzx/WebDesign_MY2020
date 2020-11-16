var welcomePage = document.getElementById("welcomePage");
var waterfallPage = document.getElementById("waterfallPage");
var detailsPage =  document.getElementById("detailsPage");
var navBar = document.getElementById("navBar");
var bookDetail = document.getElementsByClassName("bookDetail");
var bookDetail2 = document.getElementsByClassName("bookDetail2");

function getViewPortHeight() {
    //console.log(document.documentElement.clientHeight + " " + document.body.clientHeight)
     return document.documentElement.clientHeight || document.body.clientHeight;
}
function getViewPortWidth() {
    return document.documentElement.clientWidth || document.body.clientWidth;
}
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        default: 
            return 0; 
    } 
} 


//fullpage.js插件启用
$(document).ready(function(){
    $('#container').fullpage();
});  //激活fullpage的效果，可以检查页面看效果了　


// 导航栏
$(document).ready(function() {
    $('#container').fullpage({
        anchors:[ 'waterfallPage', 'detailsPage','welcomePage'],
        menu: '#navParts'});
});  


// var tryShowWelcome = setInterval(()=>{
//     if(document.getElementById("welcomePage").className.indexOf('active')>-1){
//         clearInterval(tryShowWelcome)
//     }
// },200)

var tryShowWaterfall = setInterval(()=>{
    if(document.getElementById("waterfallPage").className.indexOf('active')>-1){
        waterfall();
        clearInterval(tryShowWaterfall)
    }
},200)


var titleImgWidth = 342.86;
//避免for循环阻塞，把函数放入主线程，但会导致一些需要效果的失效。
for(let i=0;i<bookDetail.length;i++){
    (function(i){var tryShowDetails=setInterval(()=>{
        if(document.getElementById("detailsPage").className.indexOf('active')>-1){
            waterfallAdd()
            document.getElementsByClassName("Title")[i].className += " title";
            document.getElementsByClassName("Picture")[i].className += " picture";
            document.getElementsByClassName("Pic")[i].className += " pic";
            document.getElementsByClassName("PictureBackground")[i].className += " pictureBackground";
            document.getElementsByClassName("ContentContainer")[i].className += " contentContainer";
            // document.getElementsByClassName("DivideLine")[i].className += " divideLine";
            document.getElementsByClassName("Content")[i].className += " content";
            clearInterval(tryShowDetails);
            
            document.getElementsByClassName("contentContainer")[i].style.width =  1/2*detailsPage.clientWidth + "px";
            if(i%2){//图片在右侧的
                document.getElementsByClassName("picture")[i].style.left = 3/4*detailsPage.clientWidth - 1/2*document.getElementsByClassName("picture")[i].clientWidth + "px"; 
                document.getElementsByClassName("pictureBackground")[i].style.left = 3/4*detailsPage.clientWidth - 1/2*document.getElementsByClassName("pictureBackground")[i].clientWidth + "px"; 
                document.getElementsByClassName("contentContainer")[i].style.left = 1/4*detailsPage.clientWidth - 1/2*document.getElementsByClassName("picture")[i].clientWidth + "px";
                // document.getElementsByClassName("title")[i].style.left = 1/4*detailsPage.clientWidth + "px";
            }else{//图片在左侧的
                document.getElementsByClassName("picture")[i].style.left = 1/4*detailsPage.clientWidth - 1/2*document.getElementsByClassName("picture")[i].clientWidth + "px"; 
                document.getElementsByClassName("pictureBackground")[i].style.left = 1/4*detailsPage.clientWidth - 1/2*document.getElementsByClassName("pictureBackground")[i].clientWidth + "px"; 
                document.getElementsByClassName("contentContainer")[i].style.left = 1/4*detailsPage.clientWidth + 1/2*document.getElementsByClassName("picture")[i].clientWidth + "px"; 
                // document.getElementsByClassName("title")[i].style.left = 3/4*detailsPage.clientWidth + "px";
            }
            bookDetail[i].style.height = 0.5*(getViewPortHeight()- navBar.clientHeight);
            document.getElementsByClassName("picture")[i].style.top = detailsPage.offsetTop + 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("picture")[i].clientHeight +"px";
            document.getElementsByClassName("pictureBackground")[i].style.top = detailsPage.offsetTop + 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("pictureBackground")[i].clientHeight +"px";
            document.getElementsByClassName("contentContainer")[i].style.top = detailsPage.offsetTop + 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("contentContainer")[i].clientHeight +"px";
            // document.getElementsByClassName("title")[i].style.top = 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("title")[i].clientHeight +"px";

            document.getElementById("navBar").style.visibility = "visible";
            document.getElementById("navBar").style.animation = "navColor 1s";
        }
    },200)})(i);
}
for(let i=0;i<bookDetail2.length;i++){
    (function(i){var tryShowDetails=setInterval(()=>{
        if(document.getElementById("detailsPage2").className.indexOf('active')>-1){
            waterfallAdd();
            document.getElementsByClassName("Title2")[i].className += " title2";
            document.getElementsByClassName("Picture2")[i].className += " picture2";
            document.getElementsByClassName("Pic2")[i].className += " pic2";
            document.getElementsByClassName("PictureBackground2")[i].className += " pictureBackground2";
            document.getElementsByClassName("ContentContainer2")[i].className += " contentContainer2";
            // document.getElementsByClassName("DivideLine2")[i].className += " divideLine2";
            document.getElementsByClassName("Content2")[i].className += " content2";
            clearInterval(tryShowDetails);
            
            document.getElementsByClassName("contentContainer2")[i].style.width =  1/2*detailsPage2.clientWidth + "px";
            if(i%2){//图片在右侧的
                document.getElementsByClassName("picture2")[i].style.left = 3/4*detailsPage2.clientWidth - 1/2*document.getElementsByClassName("picture2")[i].clientWidth + "px"; 
                document.getElementsByClassName("pictureBackground2")[i].style.left = 3/4*detailsPage2.clientWidth - 1/2*document.getElementsByClassName("pictureBackground2")[i].clientWidth + "px"; 
                document.getElementsByClassName("contentContainer2")[i].style.left = 1/4*detailsPage2.clientWidth - 1/2*document.getElementsByClassName("picture2")[i].clientWidth + "px";
                // document.getElementsByClassName("title2")[i].style.left = 1/4*detailsPage2.clientWidth + "px";
            }else{//图片在左侧的
                document.getElementsByClassName("picture2")[i].style.left = 1/4*detailsPage2.clientWidth - 1/2*document.getElementsByClassName("picture2")[i].clientWidth + "px"; 
                document.getElementsByClassName("pictureBackground2")[i].style.left = 1/4*detailsPage2.clientWidth - 1/2*document.getElementsByClassName("pictureBackground2")[i].clientWidth + "px"; 
                document.getElementsByClassName("contentContainer2")[i].style.left = 1/4*detailsPage2.clientWidth + 1/2*document.getElementsByClassName("picture2")[i].clientWidth + "px"; 
                // document.getElementsByClassName("title2")[i].style.left = 3/4*detailsPage2.clientWidth + "px";
            }
            bookDetail2[i].style.height = 0.5*(getViewPortHeight()- navBar.clientHeight);
            document.getElementsByClassName("picture2")[i].style.top = detailsPage2.offsetTop + 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("picture2")[i].clientHeight +"px";
            document.getElementsByClassName("pictureBackground2")[i].style.top = detailsPage2.offsetTop + 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("pictureBackground2")[i].clientHeight +"px";
            document.getElementsByClassName("contentContainer2")[i].style.top = detailsPage2.offsetTop + 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("contentContainer2")[i].clientHeight +"px";
            // document.getElementsByClassName("title2")[i].style.top = 1/2*(i+0.5)*(getViewPortHeight()- navBar.clientHeight) - 1/2*document.getElementsByClassName("title2")[i].clientHeight +"px";
        }
    },200)})(i);
}

var tryShowAboutUs = setInterval(()=>{
    if(document.getElementsByTagName("footer")[0].className.indexOf('active')>-1){
        document.getElementById("navLeft").innerHTML = "AboutUs";
        // document.getElementById("navBar").style.backgroundColor = "rgb(255,255,255,0)";
        clearInterval(tryShowAboutUs);
    }
},800)


window.onload = function() {
    welcomePage.style.marginTop = navBar.clientHeight + "px";
    welcomePage.style.height = getViewPortHeight() /*- navBar.clientHeight*/ + "px";
    document.getElementById("HOME_2020").style.top = (getViewPortHeight() - navBar.clientHeight)-(document.getElementById("HOME_2020").clientHeight) + "px";
    waterfallPage.style.height = getViewPortHeight() + "px";
    detailsPage.style.height = getViewPortHeight() + "px";
    detailsPage2.style.height = getViewPortHeight() + navBar.clientHeight + "px";//////
    setTimeout(function(){
        document.getElementById("HOME_2020").src = "HOME_2020.jpg";
    },22280);
    document.getElementById("AboutUs").style.top = 5*getViewPortHeight() - (document.getElementById("AboutUs").clientHeight) + "px";
}








var imgWidth = 300;
var imgHeight = 450;
var D = 50;
var d = 50;
var deg = Math.PI*1/3;
var lColumn = 2;
var rColumn = 3;
var wfLength = 7;

var imgSrc = [
    {src:"facemask.jpg"},
    {src:"youth.jpg"},
    {src:"study.jpg"},
    {src:"dirty.jpg"},
    {src:"history.jpg"},
    {src:"landscape.jpg"},
    {src:"microphone.jpg"},
];

function waterfall() {
    var t = 0;
    for(let m=0; m<wfLength; m++){
        for(let n=0; n<rColumn+lColumn; n++,t++){
            if(t>=imgSrc.length){t=0;}
            newImg = document.createElement("img");
            newDiv = document.createElement("div");
            if(m<4){
                newImg.src = "bookCover/" + imgSrc[t].src;
            }else{
            newImg.src = "bookCover/" + imgSrc[randomNum(0,imgSrc.length-1)].src;
            }
            newImg.style.width = imgWidth + "px";
            newImg.style.height = imgHeight + "px";
            newDiv.className = "bookCover bookCover" + n;
                newDiv.style.left = -0.5*imgWidth - m*(d+imgHeight)*Math.cos(deg) + (n-lColumn+1)*(D+imgWidth)/Math.sin(deg)  - (n-lColumn+1)*0.5*imgWidth + "px";
                newDiv.style.top = -0.5*imgHeight + 2*getViewPortHeight() + m*(d+imgHeight)*Math.sin(deg) + (n-lColumn+1)*0  + Math.tan(deg)*(n-lColumn+1)*0.5*imgWidth + "px"; 
            waterfallPage.appendChild(newDiv);
            newDiv.appendChild(newImg);
        }
    }
    for(let i=0;i<rColumn+lColumn;i++){
            anime({
        easing: 'cubicBezier(.13,1.15,0,1)',
        targets: '.bookCover'+i,
        rotate: (Math.PI*1/2-deg)/Math.PI*180,
        translateY: {value: -2000, duration:5000, delay:500},
        delay: anime.stagger(100, {easing: 'easeOutQuad'}),
    });
    }
    
}
function waterfallAdd() {
    let n = rColumn + lColumn;
    for(let m=0; m<((--wfLength>6)?wfLength:6); m++){//三目要有大括号！！！
        newImg = document.createElement("img");
        newDiv = document.createElement("div");
        newImg.src = "bookCover/" + imgSrc[randomNum(0,imgSrc.length-1)].src;
        newImg.style.width = imgWidth + "px";
        newImg.style.height = imgHeight + "px";
        newDiv.className = "bookCover bookCover" + n;
        newDiv.style.left = -0.5*imgWidth - m*(d+imgHeight)*Math.cos(deg) + (n-lColumn+1)*(D+imgWidth)/Math.sin(deg)  - (n-lColumn+1)*0.5*imgWidth + "px";
        newDiv.style.top = -0.5*imgHeight + 2*getViewPortHeight() + m*(d+imgHeight)*Math.sin(deg) + (n-lColumn+1)*0  + Math.tan(deg)*(n-lColumn+1)*0.5*imgWidth + "px"; 
        waterfallPage.appendChild(newDiv);
        newDiv.appendChild(newImg);
    }
    anime({
        easing: 'cubicBezier(.13,1.15,0,1)',
        targets: '.bookCover'+ (rColumn + lColumn),
        rotate: (Math.PI*1/2-deg)/Math.PI*180,
        translateY: {value: -1000, duration:5000, delay:500},
        delay: anime.stagger(100, {easing: 'easeOutQuad'}),
    });
    rColumn++;
}