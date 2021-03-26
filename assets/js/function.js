// JavaScript Document
$(document).ready(function(e) {
			$(".device-nav").click(function(){
				$(this).find('span').toggleClass('fa-times').toggleClass('fa-bars');
				$("nav").toggleClass("reveal");
			});
			 $('#upload-file').change(function() {
                var filename = $(this).val();
                $('#file-upload-name').html(filename);
                if(filename!=""){
                    setTimeout(function(){
                        $('.upload-wrapper').addClass("uploaded");
                    }, 600);
                    setTimeout(function(){
                        $('.upload-wrapper').removeClass("uploaded");
                        $('.upload-wrapper').addClass("success");
                    }, 1600);
                }
            });
	$('#home-hero-slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		infinite:true,
		autoplay:2000,
		prevArrow: $('.prev1'),
		nextArrow: $('.next1'),
	});
	$('.product-slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		infinite:true,
		autoplay:2000,
		prevArrow: $('.prev2'),
		nextArrow: $('.next2'),
	});
});