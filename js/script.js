$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 250) {
      $(".navbar").addClass("compressed");
    } else {
      $(".navbar").removeClass("compressed");
    }
  });
  $(document).ready(function(){
    var animTime = 300,
        clickPolice = false;

    $(document).on('touchstart click', '.acc-btn', function(){
      if(!clickPolice){
         clickPolice = true;

        var currIndex = $(this).index('.acc-btn'),
            targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

        $('.acc-btn h1').removeClass('selected');
        $(this).find('h1').addClass('selected');

        $('.acc-content').stop().animate({ height: 0 }, animTime);
        $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

        setTimeout(function(){ clickPolice = false; }, animTime);
      }

    });
  });


  window.sr = ScrollReveal();
  if(window.innerWidth > 768){
  sr.reveal('.sr-icons', {
    duration: 1100,
    scale: 0.3,
    distance: '100px'
  }, 400);
  sr.reveal('.sr-icons2', {
    duration: 1100,
    scale: 0.3,
    distance: '-100px'
  }, 400);
  sr.reveal('.sr-sub', {
    duration: 1000,
    scale: 0.9,
    distance: '-100px'
  }, 100);}
});
