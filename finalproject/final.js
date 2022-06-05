// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const burger = document.querySelector('.navbar-toggler');

window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 100)
        header.classList.add('navbarDark');
    else
        header.classList.remove('navbarDark');
}

window.addEventListener("resize", function() {
    if ($(window).width() < 992) {
        $(burger).addClass('navbar-dark bg-dark');
    }
})