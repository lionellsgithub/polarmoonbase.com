	$(function() {
		
	$("#name").hide();
	$("#menu").hide();
	$("#earth").hide();	
	$("#jupiter").hide();	
	$("#blackhole").hide();
	$("#scope").hide();
	$("#gallery").hide();

		
	$("#drag").show("pulsate",["slow"]);
		
	$( "#moon" ).draggable();
	$( "#earth" ).draggable();
	$( "#jupiter" ).draggable();
	$( "#blackhole" ).draggable();
	$( "#scope" ).draggable();





	$('#faderlink').hover(function() {
	if ($("#fader").is(":visible")) {
	$("#fader").hide();
	$("#drag").hide();
	
	

	

	} else {


		
	}
});

	$('#moonlink').click(function() {
	if ($("#name").is(":hidden")) {
	$("#name").fadeIn("slow");


	} else {


		
	}
});

	$('#menulink').click(function() {
	if ($("#menu").is(":hidden")) {
	$("#menu").slideDown("fast");

	} else {
		$("#menu").slideUp("fast");


		
	}
});

	$('#1').click(function() {
	if ($("#earth").is(":hidden")) {
	$("#earth").show("explode");


	} else {
	
		$("#earth").hide("shake", ["fast"]);

		
	}
});

	$('#2').click(function() {
	if ($("#jupiter").is(":hidden")) {
	$("#jupiter").show("fade");


	} else {
	
		$("#jupiter").show("highlight");
		
	}
});

	$('#3').click(function() {
	if ($("#blackhole").is(":hidden")) {
	$("#blackhole").show("fade");


	} else {
	
		$("#blackhole").show("pulsate", ["fast"]);
		
	}
});

	$('#4').click(function() {
	if ($("#scope").is(":hidden")) {
	$("#scope").show("");


	} else {
	
		$("#scope").hide("explode", ["slow"]);
		
	}
});

	$('#gallerylink').click(function() {
	if ($("#gallery").is(":hidden")) {
	$("#gallery").show("bounce",["normal"]);
			$( "#gallery" ).fadeOut("slow");


	} else {
	

		
	}
});




	});