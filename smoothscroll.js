$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	$('.backgroundimgfull').css({
		'transform' : 'translate(0px,'+ (wScroll)/4 +'px)'
	});
   
 });
 
 
 $(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	if(wScroll > $('.breakertext2').offset().top -$(window).height()) {
	
	$('.breakertext2').css({
		'opacity':1 - wScroll/200
	});
	};
	
 });
 

$(window).scroll(function(){
	var wScroll = $(this).scrollTop(); 
	
	if(wScroll > $('.textarea').offset().top -$(window).height()) {
	
	$('.textarea').css({
		'transform' : 'translate(0px,'+ (wScroll)/5 +'px)'
	});
	};
   
 });
  

$(document).ready(function() {
	
		var fade = $("passfirst").offset().top;
		
		$(window).scroll(function() {
			var scrollPos = $(window).scrollTop();
			
			  if(scrollPos >= fade) {
				$("#moreinfo").addClass("breakertextfade");
			} 
			 else{
				$("#moreinfo").removeClass("breakertextfade");
			} 
		});
	
});
