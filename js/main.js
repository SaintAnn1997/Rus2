const sliderOne = new Swiper('.slider-one', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    grabCursor: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    }
});

const sliderTwo = new Swiper('.slider-two', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    grabCursor: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
    }
});

