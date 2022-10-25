const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
const mainSection = document.getElementById('main');

function scrollToMain() {
    scroll.scrollTo(mainSection);
}