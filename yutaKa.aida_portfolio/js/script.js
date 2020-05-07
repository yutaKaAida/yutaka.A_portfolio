$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

$('.btn-trigger').on('click',function(){
  $('.btn-trigger').toggleClass('close');
  $('.global-nav').fadeToggle(300);
  $('body').toggleClass('noscroll');
});

$('.global-nav__item>a').on('click',function(){
  $('global-nav').fadeOut(300);
  $('.btn-trigger').removeClass('close');
  $('body').removeClass('noscroll');
});