$(document).ready(function(){

				$('.owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:false,
			    autoplay:true,
			    autoplayTimeout:5000,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:4
			        }
			    }
});
			})





jQuery(function($) {
   $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
       $('.navbar-wrapper').stickUp();
                });
              });
                    

                    jQuery(function($) {
   $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
       new WOW().init();
                });
              });                                

                    
jQuery(function($) {
   $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class
      	$('.demo').animationCounter({

  start: 0,
  end: 90,
  delay:10,

});

   		$('.css3').animationCounter({

  start: 0,
  end: 80,
  delay:10,

});

   			$('.folder').animationCounter({

  start: 0,
  end: 100,
  delay:10,

});
                });
              });