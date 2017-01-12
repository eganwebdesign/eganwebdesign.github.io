 	$(document).ready(function() {

	//disable contact link in pull out

   	$(".menu-wrap a.contact").click(function() {
     return false;
	   });


   	//back to top arrow

	$(function() {
		var offset = 500;
		$(window).scroll(function() {
			if($(this).scrollTop() > offset) {
				$('#toTop').fadeIn();	
			} else {
				$('#toTop').fadeOut();
			}
		});
	 
		$('#toTop').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});	

	});

	//scroll to ID (from within pull-out menu)

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

	// menu toggle slide from left taken from Link Template (http://www.blacktie.co/2013/11/link-bootstrap-3-agency-theme)

	$(function(){
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
	});

	// owl carousel

	$(".carousel").owlCarousel({
           
                // autoPlay: 0, //Set AutoPlay to XX seconds
           
                items : 1,
                itemsDesktop : [1199,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [768,1],
                itemsTabletSmall : false,
                itemsMobile : [479,1],


            //Basic Speeds
                paginationSpeed : 400                
           
            });


	});