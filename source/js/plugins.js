// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}


// Backstreches
	var copySize = function(){
		if(Modernizr.mq('only all and (min-width: 781px)')){
			$(".copySize").each(function(){
				var size = $(this).siblings(".columns").height();
				$(this).css("height", size);
			})
		}
		else{
			$(".copySize").each(function(){
				$(this).css("height", "200px");
			})
		}
	}
	copySize();
	$(".backstretch").each(function(){
		$(this).find(".source").hide();
	})
	var autoSize = function(){
		if(Modernizr.mq('only all and (min-width: 781px)')){
			$(".autoSize").each(function(){
				var size = $(this).parent(".columns").height();
				$(this).css("height", size);
			})
		}
		else{
			$(".autoSize").each(function(){
				$(this).css("height", "200px");
			})
		}
	}
	autoSize();

$(window).load(function () {
	// Backstretch
		$(".backstretch").each(function(){
			var src = $(this).find(".source").attr("src");
			if(src){
				$(this).backstretch(src, {speed: 300});	
			}
		})

	// Scroll top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('#scrollTop').addClass("show");
					$('#scrollTop').removeClass("hide");
				} else {
					$('#scrollTop').removeClass("show");
					$('#scrollTop').addClass("hide");
				}
			});

			// scroll body to 0px on click
			$('#scrollTop').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 600);
				return false;
			});
		});

	// Main menu
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#topNav').addClass("compact");
				} else {
					$('#topNav').removeClass("compact");
				}
			});

			// scroll body to 0px on click
			$('#scrollTop').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 600);
				return false;
			});

			// Button
			$('#menuToggle').click(function(event){
				event.preventDefault();
				$(this).toggleClass('active');
				$('#topNav .menu').toggleClass('active');
				$('#contents').toggleClass('active');
			})
		});

	// About
	var openAnim = function(){
		$('html, body').animate({
      scrollTop: 0
    }, 800);
    $('#about').slideToggle(300);
	}
		$('#aboutTrigger').click(function(event){
			event.preventDefault();
			$(this).parent('li').toggleClass('active');
			openAnim();
		})
		$('#closePanel').click(function(event){
			event.preventDefault();
			$('#aboutTrigger').parent('li').toggleClass('active');
			openAnim();
		})
});