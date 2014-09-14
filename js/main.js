(function($){
	//rating vote script
		//default rating
		$('.rating .current').addClass('good');
		$('.rating .current').prevAll().addClass('good');
		$('.rating .current').nextAll().addClass('bad');

		//rating on hover
		$(".rating li").on('hover',
			function() {
				$( this,".rating li").addClass('current').addClass('good').removeClass('bad');
				$( this,".rating li").prevAll().removeClass('current');

				$('.rating .current').prevAll().addClass('good');
				$('.rating .current').prevAll().removeClass('bad');
				$('.rating .current').nextAll().removeClass('good');
				$('.rating .current').nextAll().addClass('bad');
			}
		);
})(window.jQuery);

(function($){
	//Homepage Slider
		$('.flexslider').flexslider({
			direction: "vertical",
			animation: "slide",
			slideshow: true,
			startAt: 0,
			controlNav: true,
			directionNav: true
		});
})(window.jQuery);