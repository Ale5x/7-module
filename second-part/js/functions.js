const functionHelper = {
    scrollToTop: function () {
        window.scrollTo(0,0);
        console.log("function scroll")
        return  window.scrollY;
    },
    test2: function () {
        console.log("function test")
    }
};

export const getScrollTop = functionHelper.scrollToTop();

export function scrollToTop() {
    window.scrollTo(0,0);
    console.log("function scroll")
    return  window.scrollY;
}