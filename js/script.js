$(document).ready(function() {
	
	$("wrapper").hide();
	$("#name").hide();
	$("#scope, #scope-devices").hide();
	$("#ufo").hide();
	$("#outsidescope").hide();
	$("#mars").draggable();
	$("#moon").draggable();
	$("#earth, #earth2, #earth3").draggable();
	$("#jupiter").draggable();
	$("#saturn").draggable();
	$(".mars2").hide();
	$("#earth2, #earth3").hide();



    $("#menu").click(function(){
		$("#outsidescope").fadeIn();
     	$("#scope").fadeIn();
     	$("#menu").hide();
    });

	$("#outsidescope").click(function(){
		$("#outsidescope").not("#devices #outsidescope").hide();
		$("#scope").not("#devices #scope").hide();
        $("#menu").show("slide", "slow");
   });

    $("#earth").click(function(){
    	$("#earth, #earth2").effect("highlight");
    	$("#earth2").fadeIn();
    });

    $("#earth2").click(function(){
    	$("#earth2, #earth3").effect("highlight");
    	$("#earth3").fadeIn();
    });

        $("#mars").click(function(){
		$("#mars").effect("highlight");
    	$(this).find('img').toggle();

    });

/* //Old Mars and Earth Function
    $("#earth").click(function(){
      	$("#earth").toggleClass( "earth2", 1000,  "easeOutSine" );
    });
    $("#mars").click(function(){
		$("#mars").effect("highlight");
      	$( "#mars" ).toggleClass( "mars2", 1000,  "easeOutSine" );
    });
*/
	$( "#saturn" ).click(function() {
		$('#saturn').effect("pulsate");
 	    $( "#ufo" ).show().animate({ left: "+=60%"}, 2000, function() {
    // Animation complete.
  		});
	});

	$( "#ufo" ).click(function(){
	    $("#wave").effect('transfer', { to: $("#outsidescope") }, 5000);
 		$( "#jupiter, #earth, #earth2, #earth3, #mars, #saturn, #moon" ).delay( 3000 ).effect( "explode", "slow" );
  		$( "#ufo" ).animate({ left: "+=100%"}, 1500, function() {
  	 // Animation complete.
  		});
		$('#ufo').fadeOut();
    });

	$( "#moon" ).click(function() {
		$("#moon").effect("highlight");
		$("div").not("#wrapper").toggleClass( "squaremode", 1000,  "easeOutSine" );
	  	$("#wrapper").toggleClass( "body2", 1000, "easeOutSine" );
      	$("#mars img, #earth img, #earth2 img").toggleClass( "marssquare", 1000,  "easeOutSine" );
      	$("#earth3 img").toggleClass( "earth3square", 1000,  "easeOutSine" );

	});

	$("#jupiter").click(function() {
		$("body").addClass("flashbg");
		$("div").not("#wrapper").fadeOut("slow").delay(2000);
		$("#wrapper" ).addClass("jupiterspixzoom", 900, "easeOutSine").addClass( "jupiterspix", 2000, "easeOutSine");
	});

/*------------DEVICES-----------------*/
	
	$("#moon-devices").click(function() { 
		$("#scope-devices").slideDown();
	 });

  setTimeout(function(){
    $("#loading").effect("clip", "fast");
    $( "#wrapper" ).fadeIn("fast"); 
	},3000); 

}); 






