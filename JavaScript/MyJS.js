$(document).ready(function () {
	var scrollTop = 0;
	var Logo = document.getElementById("Logo")

	$(window).scroll(function () {
		scrollTop = $(window).scrollTop();
		$('.counter').html(scrollTop);

		if (scrollTop >= 100) {
			$('#global-nav').addClass('scrolled-nav');
			Logo.style.width = '40px';


		} else if (scrollTop < 100) {
			$('#global-nav').removeClass('scrolled-nav');
			Logo.style.width = '60px';
		}

	});

});

$(document).ready(function () {
	$('#camp-toggler').click(function () {
		$('#camp').toggleClass('CAMPAIGN');
		$('#ul').toggleClass('ul-togger');
	});
});





