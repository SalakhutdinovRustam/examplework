$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black',  'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
		$('.hamburger').removeClass('is-active');
	})

	$('.carousel-servises').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		}, 100);
		});
	
  $('.carousel-servises-content').equalHeights();

	$('.carousel-servises').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-right"></i>', '<i class="fas fa-angle-double-left"></i>'],
		responsiveClass:true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800:{
				items:2
			},
			1100:{
				items:3
			}
		}
	



	});

	function carouselService() {
			$('.carousel-servises-item').each(function(){
				var ths = $(this),
						thsh = ths.find('.carousel-servises-content').outerHeight();
						ths.find('.carousel-servises-image').css('min-height', thsh);
			});
	}carouselService();

	$('.carousel-servises-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	})

	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	})

	$('select').selectize();

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});

	$('.partners').owlCarousel({
		loop: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		smartSpeed: 700,
		nav: true,
		responsiveClass: true,
		responsive: {
			0:{
				items: 1
			},
			768:{
				items: 2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}else{
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	// });

	//Resize window
	function onResize() {
		$('.carousel-servises-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});