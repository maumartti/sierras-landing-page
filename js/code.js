$(document).ready(function(){

	setInterval(function(){
		$("#slider li").each(function(){
			$(this).fadeToggle(2000);
		});

	},7000);
});