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
	
	if(wScroll > $('.whyback').offset().top -$(window).height()) {

	$('.whyback').css({
		'transform' : 'translate('+ (wScroll - $('.whyback').offset().top +$(window).height())/5 +'px,0px)'
	});
	
	$('.introtext').css({
		'transform' : 'translate('+ (wScroll - $('.whyback').offset().top +$(window).height())/-5 +'px, '+ (wScroll - $('.whyback').offset().top +$(window).height())/6 +'px)'
	});
	
   };
   
 });
 
	
	
  
$(document).ready(function() {
	
		var fade = $("passfirst").offset().top;
		
		$(window).scroll(function() {
			var scrollPos = $(window).scrollTop();
			
			  if(scrollPos >= fade) {
				$("header").addClass("headerfade");
			} 
			 else{
				$("header").removeClass("headerfade");
			} 
		});
	
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
