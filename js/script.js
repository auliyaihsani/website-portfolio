// mengambil class page-scroll membuat event pada saat di klik
$('.page-scroll').on('click', function(e){

// mengambil id dari href
var tujuan = $(this).attr('href');
// mengambil section elemen yang bersangkutan
var elemenTujuan = $(tujuan);
// pindah scroll
$("html, body").animate({
  scrollTop: elemenTujuan.offset().top -50
},'easeOutBounce');

e.preventDefault();
});



// parallax jumbotron

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/6 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  // parallax portfolio
  if( wScroll > $('.portfolio').offset().top -200 ) {
    $('.portfolio .thumbnail').each(function(i) {
        setTimeout(function() {
    $('.portfolio .thumbnail').eq(i).addClass('muncul');
  }, 300 * (i+1));
    });


  }

});
