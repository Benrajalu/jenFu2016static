window.console&&console.log||!function(){for(var o=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],e=t.length,i=window.console={};e--;)i[t[e]]=o}();var copySize=function(){$(".copySize").each(Modernizr.mq("only all and (min-width: 781px)")?function(){var o=$(this).siblings(".columns").height();$(this).css("height",o)}:function(){$(this).css("height","200px")})};copySize(),$(".backstretch").each(function(){$(this).find(".source").hide()});var autoSize=function(){$(".autoSize").each(Modernizr.mq("only all and (min-width: 781px)")?function(){var o=$(this).parent(".columns").height();$(this).css("height",o)}:function(){$(this).css("height","200px")})};autoSize(),$(window).load(function(){$(".backstretch").each(function(){var o=$(this).find(".source").attr("src");o&&$(this).backstretch(o,{speed:300,centeredX:!1})}),$(function(){$(window).scroll(function(){$(this).scrollTop()>200?($("#scrollTop").addClass("show"),$("#scrollTop").removeClass("hide")):($("#scrollTop").removeClass("show"),$("#scrollTop").addClass("hide"))}),$("#scrollTop").click(function(){return $("body,html").animate({scrollTop:0},600),!1})}),$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$("#topNav").addClass("compact"):$("#topNav").removeClass("compact")}),$("#scrollTop").click(function(){return $("body,html").animate({scrollTop:0},600),!1}),$("#menuToggle").click(function(o){o.preventDefault(),$(this).toggleClass("active"),$("#topNav .menu").toggleClass("active"),$("#contents").toggleClass("active")})});var o=function(){$("html, body").animate({scrollTop:0},800),$("#about").slideToggle(300)};$("#aboutTrigger").click(function(t){t.preventDefault(),$(this).parent("li").toggleClass("active"),o()}),$("#closePanel").click(function(t){t.preventDefault(),$("#aboutTrigger").parent("li").toggleClass("active"),o()})});