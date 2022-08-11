const swiperFirstSection = new Swiper('.swiper.first-section-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
        el: '.first-section-swiper .swiper-pagination',
        clickable: true,
    }
});

var swiperPhoneSection = new Swiper('.swiper.phone-swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 40,
    allowTouchMove: true,
    // If we need pagination
    pagination: {
        el: '.phone-swiper .swiper-pagination',
        clickable: true,
    }
});

const swiperCyp = new Swiper('.swiper.cyp-swiper', {
    // Default parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 26,
    allowTouchMove: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 28,
            allowTouchMove: false,
        }
    },
    pagination: {
        el: '.cyp-swiper .swiper-pagination',
        clickable: true,
    }
})


var swiperCommentsSection = new Swiper('.swiper.comments-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.6,
    spaceBetween: 12,
    allowTouchMove: true,
    // If we need pagination
    pagination: {
        el: '.comments-swiper .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
});


const swiperHomeBlog = new Swiper('.swiper.home-blog-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 12,
    allowTouchMove: true,
    // If we need pagination
    pagination: {
        el: '.home-blog-swiper .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            allowTouchMove: false,
        }
    },
  })