$(document).ready(function(){

	setInterval(function(){
		$("#slider li").each(function(){
			$(this).fadeToggle(2000);
		});

	},7000);

	//efecto scroll sueve 
	$('nav a').click(function(e){
	e.preventDefault();
	$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

});
