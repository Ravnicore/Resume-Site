$(function(){
  var y = 0;
  $('.allText .slide').each(function(){
    y = Math.max(y, $(this).height() + $(this).position().top);
  });

  $('.allText').css('height', y);
});

var dataStep = 1; //Set for homepage.
console.log(dataStep);


document.getElementById('homeNav').addEventListener("click", function(){
	if (dataStep === 1){return;}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}

	var $newBox = $("#resume-text-body .slide[data-step=1]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "white";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 1;
});


document.getElementById('workNav').addEventListener("click", function(){
	if (dataStep === 1){var $oldBox = $("#resume-text-body .slide[data-step=1]");}
	if (dataStep === 2){return;}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}
	var $newBox = $("#resume-text-body .slide[data-step=2]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "gray";
        	document.getElementById('workNav').style.color = "white";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 2;
});

document.getElementById('skillNav').addEventListener("click", function(){
	if (dataStep === 1){var $oldBox = $("#resume-text-body .slide[data-step=1]");}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){return;}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}
	var $newBox = $("#resume-text-body .slide[data-step=3]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "gray";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "white";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 3;
});

document.getElementById('eduNav').addEventListener("click", function(){
	if (dataStep === 1){var $oldBox = $("#resume-text-body .slide[data-step=1]");}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){return;}
	var $newBox = $("#resume-text-body .slide[data-step=4]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "gray";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "white";
        	dataStep = 4;
});

document.getElementById('buttonHome1').addEventListener("click", function(){
	if (dataStep === 1){return;}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}
	var $newBox = $("#resume-text-body .slide[data-step=1]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "white";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 1;
});
document.getElementById('buttonHome2').addEventListener("click", function(){
	if (dataStep === 1){return;}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}
	var $newBox = $("#resume-text-body .slide[data-step=1]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "white";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 1;
});
document.getElementById('buttonHome3').addEventListener("click", function(){
	if (dataStep === 1){return;}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}
	var $newBox = $("#resume-text-body .slide[data-step=1]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "white";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 1;
});


document.getElementById('buttonWork').addEventListener("click", function(){
	if (dataStep === 1){var $oldBox = $("#resume-text-body .slide[data-step=1]");}
	if (dataStep === 2){return;}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}
	var $newBox = $("#resume-text-body .slide[data-step=2]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "gray";
        	document.getElementById('workNav').style.color = "white";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 2;
});

document.getElementById('buttonSkills').addEventListener("click", function(){
	if (dataStep === 1){var $oldBox = $("#resume-text-body .slide[data-step=1]");}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){return;}
	if (dataStep === 4){var $oldBox = $("#resume-text-body .slide[data-step=4]");}
	var $newBox = $("#resume-text-body .slide[data-step=3]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "gray";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "white";
        	document.getElementById('eduNav').style.color = "gray";
        	dataStep = 3;
});

document.getElementById('buttonEdu').addEventListener("click", function(){
	if (dataStep === 1){var $oldBox = $("#resume-text-body .slide[data-step=1]");}
	if (dataStep === 2){var $oldBox = $("#resume-text-body .slide[data-step=2]");}
	if (dataStep === 3){var $oldBox = $("#resume-text-body .slide[data-step=3]");}
	if (dataStep === 4){return;}
	var $newBox = $("#resume-text-body .slide[data-step=4]");

	var outerWidth = $oldBox.outerWidth(true);
	var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
	var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

	$newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
    	function() {
        	$oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
    	});
        	$newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
        	document.getElementById('homeNav').style.color = "gray";
        	document.getElementById('workNav').style.color = "gray";
        	document.getElementById('skillNav').style.color = "gray";
        	document.getElementById('eduNav').style.color = "white";
        	dataStep = 4;
});




