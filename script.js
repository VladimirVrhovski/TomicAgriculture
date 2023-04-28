window.onscroll = function() {NavBarScroll();};

function NavBarScroll() {
    if(document.body.scrollTop > document.getElementsByClassName("navbar")[1].clientHeight || document.documentElement.scrollTop > document.getElementsByClassName("navbar")[1].clientHeight) {
        document.getElementById("scroll-nav").style.top = "0";
    } else {
        document.getElementById("scroll-nav").style.top = "-" + document.getElementById("scroll-nav").offsetHeight + "px";
    }
}
function mobileNavShow() {
    document.getElementById("main-nav").style.transitionDelay="0s";
    document.getElementById("main-nav").style.visibility="hidden";
    document.getElementById("mobile-nav").style.right="0";
}
function mobileNavHide() {
    document.getElementById("main-nav").style.transitionDelay="0.3s";
    document.getElementById("main-nav").style.visibility="visible";
    document.getElementById("mobile-nav").style.right="-100vw";
}
