const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    direction: "horizontal",
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,    
    },
    mousewheel: {
        invert: true,
    },

    breakpoints : {
        768: {
            initialSlide: 0,
            spaceBetween: 0,
            enabled: false,
        },
    }
})

let button = document.querySelector(".read-more")
let brandOpen = document.querySelector(".brand")
let brandClose = document.querySelector(".hide")

button.addEventListener("click", function () {
    button.classList.add("read-more--hide")
    brandOpen.classList.add("brand--open")
    brandClose.classList.remove("hide--close")
});

brandClose.addEventListener("click", function () {
    button.classList.remove("read-more--hide")
    brandOpen.classList.remove("brand--open")
    brandClose.classList.add("hide--close")
});