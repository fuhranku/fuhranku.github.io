$(document).ready(function() {
	animatePic();

	$('a[href*=#]:not([href=#])').click(function() {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
		return false;
		}
	});
	
	var changeNav = $('#content').offset().top;
	$(document).scroll(function() {
		if($(window).scrollTop() >= changeNav) {
			$('.navbar.navbar-default.navbar-fixed-top').css('background', "url('images/graph-tile.png')");
			$('.navbar a').css({'color' : 'rgb(137, 171, 224)', 'text-shadow' : 'none'});
		}
		else {
			$('.navbar.navbar-default.navbar-fixed-top').css('background', 'transparent');
			$('.navbar a').css({'color' : 'white', 'text-shadow' : '-1px -1px 0px gray, 1px -1px 0px gray, -1px 1px 0px gray, 1px 1px 0px gray'});
		}
	});
	
	$('.proj-bubble').hover(function() {
		if(/transparent|rgba\(0, 0, 0, 0\)/.test($(this).parent().css('background-color'))) {
			var og = $(this).css('border-left-color');
			$(this).css('box-shadow', '0 0 0 10px ' + og);
			$(this).css('border-color', shade(og, 0.75));
		}
	}, function() {
		if(/transparent|rgba\(0, 0, 0, 0\)/.test($(this).parent().css('background-color'))) {
			$(this).css('border-color', $(this).css('box-shadow').replace(/^.*(rgba?\([^)]+\)).*$/,'$1'));
			$(this).css('box-shadow', 'none');
		}
	});

	$('.proj-bubble').click(function() {
		if(/transparent|rgba\(0, 0, 0, 0\)/.test($(this).parent().css('background-color'))) {
			var og = $(this).css('box-shadow').replace(/^.*(rgba?\([^)]+\)).*$/,'$1');
			$(this).css('border-color', shade(og, 0.75));
			$(this).css('box-shadow', '0 0 0 10px ' + og);
			$(this).parent().css('background', og);
			$(this).next("p").removeClass('hide');
			$(this).next().next().removeClass('hide');
			$(this).next().hide().slideDown(500);
		}

		else {
			og = $(this).parent().css('background-color');
			$(this).next().slideUp(500, function() {
				$(this).addClass('hide').show();
				$(this).next().addClass('hide');
				$(this).parent().css('background', 'transparent');
				$(this).prev().css('border-color', og);
				$(this).prev().css('box-shadow', 'none');
			});
		}
	});
});

function animatePic() {
	var element = document.getElementById('face');
	element.style.transition = "opacity 1s linear .5s";
	element.style.opacity = 0;
}

function shade(color, num) {
	var rgb = parseColor(color);
	return "rgb(" + Math.floor(rgb[0]*num) + "," + Math.floor(rgb[1]*num) + "," + Math.floor(rgb[2]*num) + ")";
}

function parseColor(color) {
	var r = parseInt(color.substring(4));
	color = color.substring(color.indexOf(',') + 1);
	var g = parseInt(color);
	color = color.substring(color.indexOf(',' + 1));
	var b = parseInt(color);
	return [r, g, b];
}