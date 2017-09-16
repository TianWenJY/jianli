$(window).on('load', function() {
	// Preloader
	$('.preloader img').fadeOut(); // will first fade out
	$('.preloader').delay(320).fadeOut('slow', function() {

	});
});
$(function () {
	$("#PopupOk").mouseenter(function() {
		$(".Popup").fadeIn();
	})
	.mouseleave(function() {
		$(".Popup").fadeOut();
	});
	$("#navone").mouseenter(function() {
		// $(".navfixedone").stop().slideDown(200);
		$(".navfixedone").show();
		$("#navone a").addClass('colorone');
		$("#navone").find("span").css("-webkit-transform", "scaleX(1)").css("transform", "scaleX(1)");
    })
	.mouseleave(function() {
			// $(".navfixedone").stop().slideUp(200);
			$(".navfixedone").hide();
			$("#navone a").removeClass('colorone');
			$(".active #navone a").addClass('colortwo');
			$("#navone").find("span").css("-webkit-transform", "scaleX(0)").css("transform", "scaleX(0)");
    });
	 $(".navfixedone").mouseenter(function() {
		// $(".navfixedone").stop().slideDown(200);
		$(".navfixedone").show();
		$("#navone a").addClass('colorone');
		$("#navone").find("span").css("-webkit-transform", "scaleX(1)").css("transform", "scaleX(1)");
    })
	.mouseleave(function() {
        // $(".navfixedone").stop().slideUp(200);
		$(".navfixedone").hide();
			$("#navone a").removeClass('colorone');
			$(".active #navone a").addClass('colortwo');
		$("#navone").find("span").css("-webkit-transform", "scaleX(0)").css("transform", "scaleX(0)");
    });

	$("#navthree").mouseenter(function() {
		//$(".navfixedthree").stop().slideDown(200);
		$(".navfixedthree").show();
		$("#navthree a").addClass('colorone');
		$("#navthree").find("span").css("-webkit-transform", "scaleX(1)").css("transform", "scaleX(1)");
    })
	.mouseleave(function() {
			//$(".navfixedthree").stop().slideUp(200);
			$(".navfixedthree").hide();
			$("#navthree a").removeClass('colorone');
			$(".active #navthree a").addClass('colortwo');
			$("#navthree").find("span").css("-webkit-transform", "scaleX(0)").css("transform", "scaleX(0)");
    });
	 $(".navfixedthree").mouseenter(function() {
		//$(".navfixedthree").stop().slideDown(200);
		$(".navfixedthree").show();
		$("#navthree a").addClass('colorone');
		$("#navthree").find("span").css("-webkit-transform", "scaleX(1)").css("transform", "scaleX(1)");
    })
	.mouseleave(function() {
        //$(".navfixedthree").stop().slideUp(200);
		$(".navfixedthree").hide();
			$("#navthree a").removeClass('colorone');
			$(".active #navthree a").addClass('colortwo');
		$("#navthree").find("span").css("-webkit-transform", "scaleX(0)").css("transform", "scaleX(0)");
    });

	$("#navtwo").mouseenter(function() {
		//$(".navfixedtwo").stop().slideDown(200);
		$(".navfixedtwo").show();
		$("#navtwo").addClass('colorone');
		$("#navtwo").find("span").css("-webkit-transform", "scaleX(1)").css("transform", "scaleX(1)");
    })
	.mouseleave(function() {
		//$(".navfixedtwo").stop().slideUp(200);
		$(".navfixedtwo").hide();
		$("#navtwo").addClass('colorone');
		$(".active #navtwo").addClass('colortwo');
		$("#navtwo").find("span").css("-webkit-transform", "scaleX(0)").css("transform", "scaleX(0)");
    });
	 $(".navfixedtwo").mouseenter(function() {
		//$(".navfixedtwo").stop().slideDown(200);
		$(".navfixedtwo").show();
		$("#navtwo").addClass('colorone');
		$("#navtwo").find("span").css("-webkit-transform", "scaleX(1)").css("transform", "scaleX(1)");
    })
	.mouseleave(function() {
        //$(".navfixedtwo").stop().slideUp(200);
		$(".navfixedtwo").hide();
        $("#navtwo").addClass('colorone');
        $(".active #navtwo").addClass('colortwo');
		$("#navtwo").find("span").css("-webkit-transform", "scaleX(0)").css("transform", "scaleX(0)");
    });
	$("#NavPcweb").mouseenter(function() {
		$(".CaseShownavSecond").stop().fadeIn();
		$(".CaseShownavSecondone").stop().fadeOut();
    });
	$("#NavWx").mouseenter(function() {
		$(".CaseShownavSecondone").stop().fadeIn();
		$(".CaseShownavSecond").stop().fadeOut();
    });
	$(".NavApp").mouseenter(function() {
		$(".CaseShownavSecondone").stop().fadeOut();
		$(".CaseShownavSecond").stop().fadeOut();
    });
		$('.CaseShownav li').mouseenter(
				function(){
				 $(".CaseShownav li span").removeClass('ActivationUnderline')
				}
		);
});
$(function () {
	$(window).scroll(function(){
		var float_top = $(this).scrollTop();
		$(".float_qq").stop().animate({"top":float_top+200+"px"})
	});
	$(".float_qq-m1").hover(function() {
			$(this).stop();
			$(".float_qq-m1").animate({"width":"240px"}, 200)
			$(".float_qq1 img").fadeOut();
		}, function() {
			$(this).stop();
			$(".float_qq-m1").animate({"width":"55px"}, 200);
			$(".float_qq1 img").fadeIn('slow/400/fast');
	});
	$(".float_qq-m2").hover(function() {
			$(this).stop();
			$(".float_qq-m2").animate({"width":"240px"}, 200)
			$(".float_qq2 img").fadeOut();
		}, function() {
			$(this).stop();
			$(".float_qq-m2").animate({"width":"55px"}, 200);
			$(".float_qq2 img").fadeIn('slow/400/fast');
	});
	$(".float_qq-m3").hover(function() {
			$(".float_qq-m3").animate({"width":"240px","height":"240px","border-radius":"30px"}, 200)
			$(".float_qq3 a img").fadeOut();
			$(".float_qr").animate({"width":"200px","height":"200px"}, 500);
		}, function() {
			$(".float_qq-m3").animate({"width":"55px","height":"55px"}, 200);
			$(".float_qq3 a img").fadeIn();
			$(".float_qr").animate({"width":"0px","height":"0px"}, 500);
	});
});
