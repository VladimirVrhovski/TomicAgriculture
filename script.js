window.onscroll = function() {NavBarScroll();};

function NavBarScroll() {
    if(document.body.scrollTop > document.getElementsByClassName("navbar")[1].clientHeight || document.documentElement.scrollTop > document.getElementsByClassName("navbar")[1].clientHeight) {
        document.getElementById("scroll-nav").style.top = "0";
    } else {
        document.getElementById("scroll-nav").style.top = "-" + document.getElementById("scroll-nav").offsetHeight + "px";
    }
}