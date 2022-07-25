export function scrollToTop() {
    window.scrollTo(0,0);
    return  window.scrollY;
}

export function getCheckHeightScroll(goTopBtn, goDownBtn, scrollPositionY) {
    if (window.scrollY < 200) {
        if (scrollPositionY > 200) {
            goDownBtn.style.display = "flex";
        }
        goTopBtn.style.display = "none";
    } else {
        goTopBtn.style.display = 'flex';
        goDownBtn.style.display = "none";
    }
}