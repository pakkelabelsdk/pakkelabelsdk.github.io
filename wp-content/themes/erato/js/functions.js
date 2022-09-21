jQuery(document).ready(function($){
	
	"use strict";

	// Main Menu
	jQuery('ul.sf-menu').superfish({
		animation:     {height:'show'},   
		animationOut:  {height:'hide'}, 
		speed:         'fast',           
		speedOut:      'fast', 
		delay:         800,
		pathClass:	'current'           
	});


	// Toggle Submenu Fuction
	jQuery.fn.toggle = function( fn, fn2 ) {
	  if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
	    return oldToggle.apply( this, arguments );
	  }
	  var args = arguments,
	  guid = fn.guid || jQuery.guid++,
	  i = 0,
	  toggler = function( event ) {
	    var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
	    jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
	    event.preventDefault();
	    return args[ lastToggle ].apply( this, arguments ) || false;
	  };
	  toggler.guid = guid;
	  while ( i < args.length ) {
	    args[ i++ ].guid = guid;
	  }
	  return this.click( toggler );
	};
	
	// Responsive Mobile Menu
	var navlist = jQuery('.site-menu > nav ul').clone();
	var submenu = '<span class="submenu"></span>';
    navlist.removeClass().addClass('mobile-menu bottom-0 list-unstyled');
    
    navlist.find('ul').removeAttr('style');
    navlist.find('.sf-with-ul').after(submenu);
    navlist.find('.submenu').toggle(function(){
        jQuery(this).parent().addClass('over').find('>ul').slideDown(200);
    },function(){
        jQuery(this).parent().removeClass('over').find('>ul').slideUp(200);
    });
    jQuery('#mobile-menu .menu-content').after(navlist[0]);
    jQuery('#mobile-menu').mmenu({
    	position: "right",
    	zposition: "front"
    });


	// Background
	jQuery('.section').each(function(){
		var bg = jQuery(this);
		if(bg.data('bg')){
			bg.css('background-image','url('+bg.data('bg')+')');
		}
		if(bg.data('bgcolor')){
			bg.css('background-color',bg.data('bgcolor'));
		}
		bg.css('width',bg.data('width'));
		bg.css('min-height',bg.data('minheight'));
		bg.css('margin',bg.data('margin'));
		bg.css('padding',bg.data('padding'));
	});

	// Icon Box
	jQuery('.iconbox').each(function(){
		var me = jQuery(this);
		var databg = me.data('bg');
		var hoverbg = me.data('hoverbg');
		if (hoverbg){
			me.hover(function(){
				me.css('background-color',hoverbg);
			}, function(){
				me.css('background-color','#f1f1f1');
			});
		}

		if(databg){
			me.css('background-color',databg);
		}
	});

	// Pricing Badge Background
	jQuery('.pricing-item').each(function(){
		var a = jQuery(this);
		a.find('.badge').css('background-color',a.find('.badge').data('bgcolor'));
	});

	// Toggle
	jQuery('.pricing-item').each(function(){
		jQuery(this).collapse({
			toggle: false
		});
	});


	// Elements
	jQuery('.element').each(function(){
		var elm = jQuery(this);
		elm.css('margin',elm.data('margin'));
		elm.css('padding',elm.data('padding'));
	});

    // Blog Item on Hover
	function erivic_hover(){

		jQuery('.post-images').each(function() {

			jQuery(this).find('.media-mark-link .fir-link').css({'left' : jQuery(this).find('.blog-media').width()/2-22.5, 'top' : jQuery(this).find('.blog-media').height()/2-20, 'opacity' : 0});
			jQuery(this).find('.media-mark-link .sec-link').css({'right' : jQuery(this).find('.blog-media').width()/2-22.5, 'top' : jQuery(this).find('.blog-media').height()/2-20, 'opacity' : 0});

			jQuery(this).hover(function(){
				jQuery(this).addClass('hover');
				jQuery(this).find('.media-mark-link .fir-link').stop().animate({'left' : jQuery(this).find('.blog-media').width()/2-47.5, 'opacity' : 1}, 90, 'easeInSine');
				jQuery(this).find('.media-mark-link .sec-link').stop().animate({'right' : jQuery(this).find('.blog-media').width()/2-47.5, 'opacity' : 1}, 90, 'easeInSine');
			}, function(){
				jQuery(this).removeClass('hover');
				jQuery(this).find('.media-mark-link .fir-link').stop().animate({'left' : jQuery(this).find('.blog-media').width()/2-22.5, 'opacity' : 0}, 90, 'easeOutSine');
				jQuery(this).find('.media-mark-link .sec-link').stop().animate({'right' : jQuery(this).find('.blog-media').width()/2-22.5, 'opacity' : 0}, 90, 'easeOutSine');
			});
		});

		jQuery('.portfolio-item').each(function() {
			
			jQuery(this).find('.fir-link').css({'left' : jQuery(this).width()/2-22.5, 'top' : jQuery(this).height()/2-40, 'opacity' : 0});
			jQuery(this).find('.sec-link').css({'right' : jQuery(this).width()/2-22.5, 'top' : jQuery(this).height()/2-40, 'opacity' : 0});

			jQuery(this).hover(function(){
				jQuery(this).addClass('hover');
				jQuery(this).find('.fir-link').stop().animate({'left' : jQuery(this).width()/2-47.5, 'opacity' : 1}, 90, 'easeInSine');
				jQuery(this).find('.sec-link').stop().animate({'right' : jQuery(this).width()/2-47.5, 'opacity' : 1}, 90, 'easeInSine');
			}, function(){
				jQuery(this).removeClass('hover');
				jQuery(this).find('.fir-link').stop().animate({'left' : jQuery(this).width()/2-22.5, 'opacity' : 0}, 90, 'easeOutSine');
				jQuery(this).find('.sec-link').stop().animate({'right' : jQuery(this).width()/2-22.5, 'opacity' : 0}, 90, 'easeOutSine');
			});
		});

		jQuery('.team').each(function() {
			jQuery(this).find('.team-social').css({'top' : jQuery(this).width()/2-10, 'opacity' : 0});
			jQuery(this).hover(function(){
				jQuery(this).addClass('hover');
				jQuery(this).find('.team-social').stop().animate({'top' : jQuery(this).width()/2-20, 'opacity' : 1}, 90, 'easeInSine');
			}, function(){
				jQuery(this).removeClass('hover');
				jQuery(this).find('.team-social').stop().animate({'top' : jQuery(this).width()/2-10, 'opacity' : 0}, 90, 'easeOutSine');
			});
		});

		jQuery('.hoverbox').each(function() {
			jQuery(this).hover(function(){
				jQuery(this).addClass('hover');
				jQuery(this).find('.hoveraction').stop().animate({'bottom' : 20, 'opacity' : 1}, 190, 'easeInSine');
				jQuery(this).find('.hoverinfo p').stop().animate({'opacity' : 0}, 190, 'easeOutSine');
			}, function(){
				jQuery(this).removeClass('hover');
				jQuery(this).find('.hoveraction').stop().animate({'bottom' : -20, 'opacity' : 0}, 190, 'easeOutSine');
				jQuery(this).find('.hoverinfo p').stop().animate({'opacity' : 1}, 190, 'easeInSine');
			});
		});

		jQuery('.portfolio-sub-item').each(function() {
			jQuery(this).hover(function(){
				jQuery(this).addClass('hover');
				jQuery(this).find('.mark a').css({'left': jQuery(this).width()/2-15});
				jQuery(this).find('.mark a').stop().animate({'top' : jQuery(this).height()/2-20, 'opacity' : 1}, 190, 'easeInSine');
				jQuery(this).find('.mark').stop().animate({'opacity' : 1}, 190, 'easeOutSine');
			}, function(){
				jQuery(this).removeClass('hover');
				jQuery(this).find('.mark a').stop().animate({'top' : -20, 'opacity' : 0}, 190, 'easeOutSine');
				jQuery(this).find('.mark').stop().animate({'opacity' : 0}, 190, 'easeInSine');
			});
		});
	};

	jQuery(window).load(function(){
		var resizeTimer;
		jQuery(window).resize(function() {
		  clearTimeout(resizeTimer);
		  resizeTimer = setTimeout(erivic_hover, 0);
		}).resize();
	});
	
	// Post Media Videos
	jQuery(".post-media").fitVids();

	// Carousel
	jQuery('.media-slider').each(function(){
		jQuery(this).nivoSlider({
		    effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
		    prevText: '<i class="fa fa-angle-left"></i>',               // Prev directionNav text
		    nextText: '<i class="fa fa-angle-right"></i>',               // Next directionNav text
		    controlNav: false,
		});
	});

	// Images Popup
	jQuery('.image-link').magnificPopup({
		type:'image',
		closeOnContentClick: true,
    	closeBtnInside: false,
    	fixedContentPos: true,
    	mainClass: 'mfp-no-margins mfp-with-zoom', 
    	image: {
    		verticalFit: true
    	}
	});

	// Portfolio Filter
	jQuery(window).load(function(){

		var jQuerycontainer = jQuery('.portfolio-filter');
		jQuerycontainer.isotope({
			itemSelector: '.element',
			layoutMode: 'fitRows',
		});

		var jQueryoptionSets = jQuery('#options'),
		jQueryoptionLinks = jQueryoptionSets.find('a');

		jQueryoptionLinks.click(function () {
			var jQuerythis = jQuery(this);
			if (jQuerythis.hasClass('selected')) {
				return false;
			}
			var jQueryoptionSet = jQuerythis.parents('.option-set');
			jQueryoptionSet.find('.selected').removeClass('selected');
			jQuerythis.addClass('selected');
			var options = {},
			key = jQueryoptionSet.attr('data-option-key'),
			value = jQuerythis.attr('data-option-value');
			value = value === 'false' ? false : value;
			options[key] = value;
			if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
				changeLayoutMode(jQuerythis, options)
			} else {
				jQuerycontainer.isotope(options);
			}
			return false;
		});
	});

	// Bootrap Tooltip
	jQuery('*[data-toggle="tooltip"]').tooltip();

	// Chart
    jQuery('.chart').each(function(){
    	jQuery(this).easyPieChart({
    		lineWidth: '15',
    		barColor: jQuery(this).data('barcolor'),
    		trackColor: '#f1f1f1',
    		scaleColor: false,
    		lineCap: 'square',
    		animate: 1300,
    		size: jQuery(this).data('size')
    	});
    	jQuery(this).css('background-color',jQuery(this).data('bgcolor'));
    });

    // Search
    jQuery('.header-search').each(function(){
		var ctsearch = jQuery(this),
		ctsearchinput = ctsearch.find('input.header-search-input'),
		body = jQuery('html,body'),
		openSearch = function() {
			ctsearch.data('open',true).addClass('header-search-open');
			ctsearchinput.focus();
			return false;
		},
		closeSearch = function() {
			ctsearch.data('open',false).removeClass('header-search-open');
		};

		ctsearchinput.on('click',function(e) { e.stopPropagation(); ctsearch.data('open',true); });

		ctsearch.on('click',function(e) {
			e.stopPropagation();
			if( !ctsearch.data('open') ) {

				openSearch();

				body.off( 'click' ).on( 'click', function(e) {
					closeSearch();
				} );

			}
			else {
				if( ctsearchinput.val() === '' ) {
					closeSearch();
					return false;
				}
			}
		});
	});

	// jQuery Count to Number
	jQuery(window).scroll(function() {
    	jQuery('.actionhere').each(function() {
    		if(jQuery(window).height() + jQuery(window).scrollTop() - jQuery(this).offset().top - jQuery(window).height()/5 > 0) {
    			jQuery(this).trigger("animate-it");
    		}
    	});
    });

	jQuery('.actionhere').on('animate-it', function() {
    	var anm = jQuery(this);
    	anm.each(function(){
    		anm.find('.number').countTo();
    		anm.find('span').removeClass('number');
    	});
    });

	//Skill Bar
	setTimeout(function(){
		jQuery('.progress .progress-bar').each(function() {
			var me = jQuery(this);
			var perc = me.data('percentage');
			var bgcolor = me.data('bgcolor');
			var current_perc = 0;
			var progress = setInterval(function() {
				if (current_perc>=perc) {
					clearInterval(progress);
				} else {
					current_perc +=1;
					me.css('width', (current_perc)+'%');
					me.css('background-color', (bgcolor))
				}
			}, 10);
		});
	},10);

	jQuery(window).load(function(){

	    // Carousel
		jQuery('.carouselbox').each(function() {
			var next = jQuery(this).find('.prev');
			var prev = jQuery(this).find('.next');
			
			jQuery(this).find('.carousel-area').carouFredSel({
				circular: false,
				responsive: true,
				width: 'variable',
				height: "variable",
				items: {
					width: 320,
					visible: {
						min: 1,
						max: 4
					},
					height: "variable"
				},
				next: next,
				prev: prev,
				scroll : {
		            items           : 1,
		            easing          : "jswing",
		            duration        : 1000,                         
		            pauseOnHover    : true
		        }   
			});

			/*jQuery(this).find('img').css('display','block');*/

		});

		// Equal Height
		function equalHeight(group) {
			var tallest = 0;
			group.each(function() {
				var thisHeight = jQuery(this).height();
				if(thisHeight > tallest) {
					tallest = thisHeight;
				}
			});
			group.height(tallest);
		}

		jQuery('.carouselbox').each(function() {
			equalHeight(jQuery(this).find('.cilent-item'));
		});




	});
	
	// Add class to contac form 7
	jQuery('.wpcf7-form').addClass('form');

	// Add class to table
    jQuery('table').addClass('table');

	// scroll back to top
	(function($){$.fn.backToTop=function(options){var $this=$(this);$this.hide().click(function(){$("body, html").animate({scrollTop:"0px"});});var $window=$(window);$window.scroll(function(){if($window.scrollTop()>0){$this.fadeIn();}else{$this.fadeOut();}});return this;};})(jQuery);

	// adding back to top button
	jQuery('body').append('<a class="back-to-top"><i class="fa fa-angle-up"></i></a>');
	jQuery('.back-to-top').backToTop();

});