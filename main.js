function showTitle () {
$('.title').hide();  
$('.title').fadeIn(2000);
}

function showArrow () {
  $('.scrolldown').hide();  
  setTimeout( function() { 
    $('.scrolldown').fadeIn('slow');
  }, 4000);
}

function playSoundtrack () {
  $("#soundtrack").trigger('load').trigger('play');
}

// SUBTITLE ANIMATION
var SPY = function() {
    function e(a, d, b) {
      var c, f, g, h;
      b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 === a[b] ? 32 : a[b] - h, f = setInterval(function() {
        d.innerHTML = g + String.fromCharCode(c);
        c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
          e(a, d, b);
        }, 10)) : c++;
      }, 5));
    }
    var k = {};
    return k = {animationComplete:!1, text:function(a) {
      this.animationComplete = !1;
      a = document.getElementById(a);
      for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
        b.push(d.charCodeAt(c));
      }
      a.innerHTML = "";
      e(b, a, 0);
    }};
}();
var SPY = function() {
    function e(a, d, b) {
      var c, f, g, h;
      b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 === a[b] ? 32 : a[b] - h, f = setInterval(function() {
        d.innerHTML = g + String.fromCharCode(c);
        c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
          e(a, d, b);
        }, 10)) : c++;
      }, 5));
    }
    var k = {};
    return k = {animationComplete:!1, text:function(a) {
      this.animationComplete = !1;
      a = document.getElementById(a);
      for (var d = a.innerHTML, b = [], c = 0;c < d.length;c++) {
        b.push(d.charCodeAt(c));
      }
      a.innerHTML = "";
      e(b, a, 0);
    }};
}();

function showSubtitle () {
  $( '.header' ).hide();
    $( '.subtitle' ).fadeIn( 1200 );
    setTimeout( function() { 
      $( '.header' ).fadeIn( 'slow' );
        SPY.text( 'op' );
    }, 1500);
}



$( document ).ready(function() {
  $('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: true,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: false,
		verticalCentered: true,
		sectionsColor : ['#030321', '#030321', '#BD0034', '#030321', 'ghostwhite'],
		paddingTop: 0,
		paddingBottom: 0,
		fixedElements: '',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){

			// 1 PAGE
			if(nextIndex === 1) { 
				$('.arrowdown').addClass('animated fadeIn').css({'animation-delay':'2.8s', 'animation-duration': '2s'});
			}

			// 2 PAGE
			if(nextIndex === 2) {
				$('.aboutme-title').addClass('animated fadeIn').css({'animation-delay':'0.7s', 'animation-duration': '2s'});
				$('.quick').addClass('animated fadeIn').css({'animation-delay':'1.2s', 'animation-duration': '2s'});
				$('.one').addClass('animated fadeInLeft').css({'animation-delay':'1.4s', 'animation-duration': '2s'});
				$('.two').addClass('animated fadeInRight').css({'animation-delay':'1.6s', 'animation-duration': '2s'});
				$('.three').addClass('animated fadeInLeft').css({'animation-delay':'1.8s', 'animation-duration': '2s'});
				$('.four').addClass('animated fadeInRight').css({'animation-delay':'2s', 'animation-duration': '2s'});
				$('.five').addClass('animated fadeInLeft').css({'animation-delay':'2.2s', 'animation-duration': '2s'});
				$('.six').addClass('animated fadeInRight').css({'animation-delay':'2.4s', 'animation-duration': '2s'});
				$('.learn').addClass('animated fadeIn').css({'animation-delay':'2.6s', 'animation-duration': '2s'});
				$('.arrowdown').addClass('animated fadeIn').css({'animation-delay':'2.8s', 'animation-duration': '2s'});

			}

			if(index === 2) {
				$('.aboutme-title').removeClass('animated fadeIn');
				$('.quick').removeClass('animated fadeIn');
				$('.one').removeClass('animated fadeInLeft');
				$('.two').removeClass('animated fadeInRight');
				$('.three').removeClass('animated fadeInLeft');
				$('.four').removeClass('animated fadeInRight');
				$('.five').removeClass('animated fadeInLeft');
				$('.six').removeClass('animated fadeInRight');
				$('.learn').removeClass('animated fadeIn');
				$('.arrowdown').removeClass('animated fadeIn');

			
				$('#am2').removeClass('animated fadeInUp');
				$('#am3').removeClass('animated fadeInUp');
				$('#am4').removeClass('animated fadeInUp');
				$('#am5').removeClass('animated fadeInUp');
			}

			// 3 PAGE
			if(nextIndex === 3) {
				$('.arrowdown').addClass('animated fadeIn').css({'animation-delay':'2.8s', 'animation-duration': '2s'});
				$('.arrowdown').removeClass('animated fadeIn');
			}


			
			// 5 PAGE
				if (nextIndex === 5) {
					$('#cinfo').addClass('animated fadeInUp').css({'animation-delay':'0.7s', 'animation-duration': '2s'})
					$('#cbar a:eq( 0 )').addClass('animated fadeIn').css({'animation-delay':'1.8s', 'animation-duration': '2s'})
					$('#cbar a:eq( 1 )').addClass('animated fadeIn').css({'animation-delay':'2s', 'animation-duration': '2s'})
					$('#cbar a:eq( 2 )').addClass('animated fadeIn').css({'animation-delay':'2.2s', 'animation-duration': '2s'})
					$('.arrowdown').removeClass('animated fadeIn');
				} 

				if(index === 5) {
					$('#cinfo').removeClass('animated fadeInUp');
					$('#cbar').children().removeClass('animated fadeIn')
				}
			
				

		},
		afterLoad: function(anchorLink, index){
			$('.arrowdown').addClass('animated fadeIn').css({'animation-delay':'2.8s', 'animation-duration': '2s'});
			setTimeout(function () {$('.arrowdown').removeClass('animated fadeIn')}, 3000);

		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			
			if(index === 2 && nextSlideIndex === 1 ) {
				$('#am1').addClass('animated fadeInUp').css({'animation-delay':'0.7s', 'animation-duration': '2s'});
				$('#am2').addClass('animated fadeInUp').css({'animation-delay':'1s', 'animation-duration': '2s'});
				$('#am3').addClass('animated fadeInUp').css({'animation-delay':'1.3s', 'animation-duration': '2s'});
				$('#am4').addClass('animated fadeInUp').css({'animation-delay':'1.5s', 'animation-duration': '2s'});
				$('#am5').addClass('animated fadeInUp').css({'animation-delay':'1.7s', 'animation-duration': '2s'});			
			}

		}
	});
  
	showTitle();
	showSubtitle();
  
  
});


