$(document).ready(function(){
	$("aside#control-panel button").click(function(){
		
		$("*").removeClass("black white red orange yellow green cyan blue purple magenta hotpink");
		});
		
		$("button#black-button").click(function(){
			$("body").addClass("black");
		});
		
		$("button#white-button").click(function(){
			$("body").addClass("white");
		});
		
		$("button#red-button").click(function(){
			$("body").addClass("red");
		});
		
		$("button#orange-button").click(function(){
			$("body").addClass("orange");
		});
		
		$("button#yellow-button").click(function(){
			$("body").addClass("yellow");
		});
		
		$("button#green-button").click(function(){
			$("body").addClass("green");
		});
		
		$("button#cyan-button").click(function(){
			$("body").addClass("cyan");
		});
		
		$("button#blue-button").click(function(){
			$("body").addClass("blue");
		});
		
		$("button#purple-button").click(function(){
			$("body").addClass("purple");
		});
		
		$("button#magenta-button").click(function(){
			$("body").addClass("magenta");
		});
});