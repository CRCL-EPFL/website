$(document).ready(function(){
	$("aside#control-panel button#emergency-button").click(function(){
		
		$("header").hide(1000);
		$("nav").delay(1000).hide(1000);
		$("section#video").delay(2000).hide(1000);
		$("section#gallery").delay(3000).hide(1000);
		$("section#about").delay(4000).hide(1000);
		$("section#news").delay(5000).hide(1000);
		$("div#team").delay(6000).hide(1000);
		$("footer").delay(7000).hide(1000);
		$("body").delay(8000).hide(1000);

		});
});