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

$(function() {
  $('.dlbtn a').on('click', function(e){
    var href_url = $(this).attr('href');
    var href_name = $(this).attr('href').replace(/\\/g,'/').replace( /.*\//, '' );
    $(e.target).attr({
      download: href_name,
      href: href_url
    });
  });
});