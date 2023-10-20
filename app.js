function scrolll() {
    var left = document.querySelector('.scroll-images')
    left.scrollBy(100,0)
}
function scrollr() {
    var right = document.querySelector('.scroll-images')
    right.scrollBy(-100,0)
}

var targetElement1 = document.getElementById("page-five-scroll");
var targetElement2 = document.getElementById("page-fourth-scroll");
var targetElement3 = document.getElementById("page-seven-scroll")
var targetElement4 = document.getElementById("page-eight-scroll")
var targetElement5 = document.getElementById("page-third-scroll")
var element1 = document.getElementById("myButton1");
var element2 = document.getElementById("myButton2");
var element3 = document.getElementById("myButton3");
var element4 = document.getElementById("myButton4");
var element5 = document.getElementById("myButton5");
var targetOffsetTop1 = targetElement1.offsetTop;
var targetOffsetTop2 = targetElement2.offsetTop;
var targetOffsetTop3 = targetElement3.offsetTop;
var targetOffsetTop4 = targetElement4.offsetTop;
var targetOffsetTop5 = targetElement5.offsetTop;

element1.addEventListener("click", () => {
    window.scrollTo({
        top: targetOffsetTop1,
        behavior: "smooth"
    });
});

element2.addEventListener("click", () => {
    window.scrollTo({
        top: targetOffsetTop2,
        behavior: "smooth"
    });
});

element3.addEventListener("click", () => {
    window.scrollTo({
        top: targetOffsetTop3,
        behavior: "smooth"
    });
});

element4.addEventListener("click", () => {
    window.scrollTo({
        top: targetOffsetTop4,
        behavior: "smooth"
    });
});

element5.addEventListener("click", () => {
    window.scrollTo({
        top: targetOffsetTop5,
        behavior: "smooth"
    });
});
