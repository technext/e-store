$(document).ready(function() {


	/* Owl Carousel ======================================= */

	 $(document).ready(function() {
	      $("#owl-demo").owlCarousel({
	        autoPlay: 3000,
	        items : 4,
	        itemsDesktop : [1199,3],
	        itemsDesktopSmall : [979,3]
	      });

	    });
	 $(document).ready(function() {
	      $("#owl-demo1").owlCarousel({
	        autoPlay: 3000,
	        items : 5,
	        itemsDesktop : [1199,3],
	        itemsDesktopSmall : [979,3]
	      });

	    });

	/* Tabs ======================================= */

	new CBPFWTabs( document.getElementById( 'tabs' ) );
		
	
	/* wow ======================================= */

	new WOW().init({
		offset: 20 
	});

	/* Hero slider ======================================= */

	$('#hero-slides').superslides({
		play: 4000,
		animation: 'fade'
	});

	/* Navbar colapse ======================================= */
	$(document).on('click.nav','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') || $(e.target).is('button')) {
			$(this).collapse('hide');
		}
	});

	

	/* testimonial ======================================= */
	$('.carousel').carousel();
	
	/* One Page Navigation Setup ======================================= */
	$('#main-nav').singlePageNav({
		offset: $('.navbar').height(),
		speed: 750,
		currentClass: 'active',
		filter: ':not(.external)',
		beforeStart: function() {},
		onComplete: function() {}
	});
	
	/* Bootstrap Affix ======================================= */		
	$('#modal-bar').affix({
		offset: {
			top: 10,
		}
	});

/* Smooth Hash Link Scroll ======================================= */	
	$('.smooth-scroll').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				// console.log(offset());
				$('html,body').animate({
						scrollTop: target.offset().top - 60
				}, 1000);
				return false;
			}
		}
	});
});