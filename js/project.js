// global $, jquery, alert
$(document).ready(function(){

	// Nice Scroll
	$("html").niceScroll();

	$(".carousel").carousel({
		interval:100000
	});

	// Show option Box
	$(".option-box i").click(function(){
		$(".option-color").fadeToggle(1000);
	});

	// Change Box colors
	var colorsLi = $(".option-color ul li");

	colorsLi
	.eq(0).css("backgroundColor","#E41B17").end()
	.eq(1).css("backgroundColor","#E426D5").end()
	.eq(2).css("backgroundColor","#009AAF").end()
	.eq(3).css("backgroundColor","#FFF400");

	// When Click On Li
	colorsLi.click(function(){
		$("link[href*='theme']").attr("href",$(this).attr("data-value"))
	});

	// Loading
	$(window).load(function(){

		$(".loading .spinner").fadeOut(1000,
		function()
		{
			$("body").css("overflow","auto");
			$(this).parent().fadeOut(2000,
				function()
				{
					$(this).remove();
				});
		})
	});

	// SCroll Top
	$(window).scroll(function(){
		// console.log($(this).scrollTop())

		$(this).scrollTop() >= 700 ? $("#scroll-top").show() : $("#scroll-top").hide();

		// if($(this).scrollTop() >= 700){
		// 	$("#scroll-top").show();
		// }else{
		// 	$("#scroll-top").hide();
		// }
	});

	// Click On Button To Scroll Top
	$("#scroll-top").click(function(){
		$("html,body").animate({scrollTop : 0} , 600)
	});
})