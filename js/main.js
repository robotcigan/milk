$(document).ready(function() {

  $(".main-header a").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top - 130}, 800);
  });


  $(window).scroll(function () {
    if( $(window).scrollTop() > 20 ) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }
  })

  $("html").easeScroll();
  let scroll = 0;

  $('body').mousewheel(function (event) {
    scroll = scroll + event.deltaY;
    if(scroll >= 0) scroll = 0;
    if(scroll <= -60) scroll = -60;
    console.log(scroll)
    $('.parallax img').css({
      "transform": `translateY(${-scroll * 2}px)`
    })
  });

  $('.hero__dots span').eq(0).addClass('active');

  $('.hero__dots span').on('click', function () {
    let index = $(this).index();
    let hero = $('.hero');
    function heroColor (color) {
      hero.removeClass();
      hero.addClass('hero');
      hero.addClass(color);
    }
    switch (index) {
      case 0:
        heroColor('hero--first');
        break;
      case 1:
        heroColor('hero--second')
        break;
      case 2:
        heroColor('hero--third')
        break;
      case 3:
        heroColor('hero--4th')
        break;
      case 4:
        heroColor('hero--5th')
        break;
      case 5:
        heroColor('hero--6th')
        break;
      default:
        break;
    }
    $('.hero__dots span').removeClass('active');
    $(this).addClass('active');
    $('.hero__slider .hero__slide').removeClass('hero__slide--active');
    $('.hero__slider .hero__slide').eq(index).addClass('hero__slide--active');
  })

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.map__slider').slick({
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }); 

})