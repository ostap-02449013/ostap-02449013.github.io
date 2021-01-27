$(document).ready(function(){
    $('.promo__carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 1000,
        arrows: false
    });
    $('.customers__carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 1000,
        speed: 3000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
      });
  });

  let $scrollToTop = $('.scroll-to-top');

  $(window).on('scroll', function () {
      if ($(document).scrollTop() > 0) {
          $scrollToTop.removeClass('hidden');
      } else {
          $scrollToTop.addClass('hidden');
      }
  });
  $scrollToTop.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0});
  });

// for all except IE11
// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.header__nav-item'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })


// for IE11
window.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.header__nav-item'),
        hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
    menuItem.forEach(function (item) {
      item.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
      });
    });
  });
