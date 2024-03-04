$(function () {

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        const headerTop = document.querySelector('.header__top');
        const menuBtn = document.querySelector('.menu__btn');

        const headerBottom = header.offsetTop + header.offsetHeight;

        if (window.scrollY >= headerBottom) {
            headerTop.classList.add('fixed');
            headerTop.style.top = '0';
        } else {
            headerTop.classList.remove('fixed');
            headerTop.style.top = '';
        }
    });


    $(".menu a, .footer__link, .header__top-link").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.slider-blog__inner').slick({
        dots: true,
        arrows: false
    });

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top').toggleClass('header__top--active')
    })

    var mixer = mixitup('.gallery__content');


});