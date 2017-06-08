"use strict";

$(document).ready(function () {

  // Переход по якорям
  $(".main-header a").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top - 130 }, 800);
  });

  function mainHeaderScroll() {
    if ($(window).scrollTop() > 20) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }
  }

  // Шапка
  $(window).scroll(function () {
    mainHeaderScroll();
  });

  mainHeaderScroll();

  // Плавный скролл
  $("html").easeScroll();

  // Параллакс
  var scroll = 0;

  $('body').mousewheel(function (event) {
    scroll = scroll + event.deltaY;
    if (scroll >= 30) scroll = 30;
    if (scroll <= -30) scroll = -30;
    $('.parallax img').css({
      "transform": "translateY(" + scroll * 4 + "px)"
    });
  });

  // Переключатели кругового слайдера
  $('.hero__dots span').eq(0).addClass('active');

  $('.hero__dots span').on('click', function () {
    var index = $(this).index();
    var hero = $('.hero');
    // SVG колдунство
    $('#bar').css({
      'stroke-dashoffset': 200 - 180 / 6 * index + "rem"
    });
    // function heroColor (color) {
    //   hero.removeClass();
    //   hero.addClass('hero');
    //   hero.addClass(color);
    // }
    // switch (index) {
    //   case 0:
    //     heroColor('hero--first');
    //     break;
    //   case 1:
    //     heroColor('hero--second')
    //     break;
    //   case 2:
    //     heroColor('hero--third')
    //     break;
    //   case 3:
    //     heroColor('hero--4th')
    //     break;
    //   case 4:
    //     heroColor('hero--5th')
    //     break;
    //   case 5:
    //     heroColor('hero--6th')
    //     break;
    //   default:
    //     break;
    // }
    // $('.hero__dots span').removeClass('active');
    // $('.hero__slider .hero__slide').eq(index).find('.hero__dots span').eq(index).addClass('active');
    // $('.hero__slider .hero__slide').removeClass('hero__slide--active');
    // $('.hero__slider .hero__slide').eq(index).addClass('hero__slide--active');
  });

  // Слайдеры
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('.map__slider').slick({
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  // Мобильное меню
  $('.mobile-menu-toggle').on('click', function () {
    $('.mobile-header').toggleClass('mobile-header--active');
    $(this).toggleClass('mobile-menu-toggle--active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
  });

  // Модалка
  $('.open-modal').magnificPopup({
    type: 'inline'
  });

  // Поля
  $('.form-control input').on('keyup change', function () {
    formValidation($(this));
  });
  $('.form-control textarea').on('keyup change', function () {
    formValidation($(this));
  });

  function formValidation(self) {
    if (self.val().length || self.text().length) {
      self.parent().find('label').addClass('form-control__label--active');
    } else {
      self.parent().find('label').removeClass('form-control__label--active');
    }
  }

  // SVG колдунство
  var val = 70;
  var $circle = $('#svg #bar');

  if (isNaN(val)) {
    val = 100;
  } else {
    var r = $circle.attr('r');
    var c = Math.PI * (r * 2);

    if (val < 0) {
      val = 0;
    }
    if (val > 100) {
      val = 100;
    }

    var pct = (100 - val) / 100 * c;

    $circle.css({ strokeDashoffset: pct });

    $('#cont').attr('data-pct', val);
  }
});