//Mobile menu
$('.menu__btn').click(function() {
  $('.menu__list').slideToggle();
});

$('.header__more').click(function(e) {
  event.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('header__more--active');
  $('.header__info').slideToggle();
});

//Hide popups on escape and click outside
$("body").click(function(){
  $('.header__info').slideUp();
  $('.header__more').removeClass('header__more--active');
})

$("body").keydown(function(e) {
  if (e.keyCode == 27) {
    $('.header__info').slideUp();
    $('.header__more').removeClass('header__more--active');
  }
})

if (window.innerWidth < 1270) {
  $('.menu__next').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('menu__next--down');
  })
}

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
