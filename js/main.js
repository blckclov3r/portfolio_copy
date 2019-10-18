

$(document).ready(function(){



	$('.navbar a').on('click',function(event){
		if(this.hash !== ''){
			event.preventDefault();
			const hash = this.hash;
			$('html,body').animate({
				scrollTop: $(hash).offset().top
			},500);
		}
	});


	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
         event.preventDefault();
         $(this).ekkoLightbox();
    });

    new WOW().init();
});




