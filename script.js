window.onscroll = function() {NavBarScroll();};
/* document.addEventListener("resize", widthCheck); */

function NavBarScroll() {
    if(document.body.scrollTop > document.getElementsByClassName("navbar")[1].clientHeight || document.documentElement.scrollTop > document.getElementsByClassName("navbar")[1].clientHeight) {
        document.getElementById("scroll-nav").style.top = "0";
    } else {
        document.getElementById("scroll-nav").style.top = "-" + document.getElementById("scroll-nav").offsetHeight + "px";
    }
}
function mobileNavShow() {
    /* document.getElementById("main-nav").style.visibility="hidden";
    document.getElementById("mobile-nav").style.visibility="visible"; */
    document.getElementById("main-nav").classList.add("main-away");
    document.getElementById("mobile-nav").classList.remove("mobile-away");
}
function mobileNavHide() {
    /* document.getElementById("main-nav").style.visibility="visible";
    document.getElementById("mobile-nav").style.visibility="hidden"; */
    document.getElementById("mobile-nav").classList.add("mobile-away");
    document.getElementById("main-nav").classList.remove("main-away");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("inView");
        } else {
            entry.target.classList.remove("inView");
        }
    });
}, {threshold: 0.4});
const images=document.querySelectorAll(".smallImg");
images.forEach((el) => observer.observe(el))

