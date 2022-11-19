"use strick";

new Swiper(".slider-main", {
    direction: "vertical",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true,
    },
    loop: true,
});

new Swiper(".swiper-popular", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
    const menuBody = document.querySelector(".menu__block");
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}