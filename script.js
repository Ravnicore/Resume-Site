


//Setting up to create the max container size for the resume text.
//Otherwise the absolute position for when the text slides 
//will cause issues for footer or other fields to be added later on.
var resumeTextSettingBoxSize = 0;
    resumeTextSettingBoxSize = $('#introText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);
//---------------------------------------------------
window.addEventListener("resize", function(){
    if (dataStep === 1){resumeTextSettingBoxSize = $('#introText').height();}
    if (dataStep === 2){resumeTextSettingBoxSize = $('#workReplaceText').height();}
    if (dataStep === 3){resumeTextSettingBoxSize = $('#skillReplaceText').height();}
    if (dataStep === 4){resumeTextSettingBoxSize = $('#eduReplaceText').height();}
    $('.allText').css('height', resumeTextSettingBoxSize);

    let footerHeight= $('.footer').height();
    console.log(footerHeight);
});
//---------------------------------------------------
var dataStep = 1; //Pre-set value for homepage.
function getPreviousBox(id, Step){
    if(id ==='homeNav' || id === 'buttonHome'){
        if (Step === 1){return "Current page";}
        if (Step === 2){var oldBox = $("#resume-text-body .slide[data-step=2]");return oldBox;}
        if (Step === 3){var oldBox = $("#resume-text-body .slide[data-step=3]");return oldBox;}
        if (Step === 4){var oldBox = $("#resume-text-body .slide[data-step=4]");return oldBox;}
    }
    if(id ==='workNav' || id === 'buttonWork'){
        if (Step === 1){var oldBox = $("#resume-text-body .slide[data-step=1]");return oldBox;}
        if (Step === 2){return "Current page";}
        if (Step === 3){var oldBox = $("#resume-text-body .slide[data-step=3]");return oldBox;}
        if (Step === 4){var oldBox = $("#resume-text-body .slide[data-step=4]");return oldBox;}
    }
    if(id ==='skillNav' || id === 'buttonSkills'){
        if (Step === 1){var oldBox = $("#resume-text-body .slide[data-step=1]");return oldBox;}
        if (Step === 2){var oldBox = $("#resume-text-body .slide[data-step=2]");return oldBox;}
        if (Step === 3){return "Current page";}
        if (Step === 4){var oldBox = $("#resume-text-body .slide[data-step=4]");return oldBox;}
    }
    if(id ==='eduNav' || id === 'buttonEdu'){
        if (Step === 1){var oldBox = $("#resume-text-body .slide[data-step=1]");return oldBox;}
        if (Step === 2){var oldBox = $("#resume-text-body .slide[data-step=2]");return oldBox;}
        if (Step === 3){var oldBox = $("#resume-text-body .slide[data-step=3]");return oldBox;}
        if (Step === 4){return "Current page";}
    }
}
function slideThoseBoxes($newBox, $oldBox) {
    let outerWidth = $oldBox.outerWidth(true);
    let posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
    let posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);
    $newBox.css({ "margin-left": -posSlideIn + "px", "margin-right": posSlideIn + "px", "display": "" });
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 1000, 
        function() {
            $oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
        });
            $newBox.animate({ "margin-left": "", "margin-right": "" }, 1000);
}
function recolorTheNav(newHighlight){
    if(newHighlight === 'homeNav' || newHighlight === 'buttonHome'){
        document.getElementById('homeNav').style.color = "white";
        document.getElementById('workNav').style.color = "gray";
        document.getElementById('skillNav').style.color = "gray";
        document.getElementById('eduNav').style.color = "gray";
    }
    if(newHighlight === 'workNav' || newHighlight === 'buttonWork'){
        document.getElementById('homeNav').style.color = "gray";
        document.getElementById('workNav').style.color = "white";
        document.getElementById('skillNav').style.color = "gray";
        document.getElementById('eduNav').style.color = "gray";
    }
    if(newHighlight === 'skillNav' || newHighlight === 'buttonSkills'){
        document.getElementById('homeNav').style.color = "gray";
        document.getElementById('workNav').style.color = "gray";
        document.getElementById('skillNav').style.color = "white";
        document.getElementById('eduNav').style.color = "gray";
    }
    if(newHighlight === 'eduNav' || newHighlight === 'buttonEdu'){
        document.getElementById('homeNav').style.color = "gray";
        document.getElementById('workNav').style.color = "gray";
        document.getElementById('skillNav').style.color = "gray";
        document.getElementById('eduNav').style.color = "white";
    }
}
document.getElementById('homeNav').addEventListener("click", function(e){
    e.preventDefault(); // stop from scrolling back to top of page
    scrollToTop(1500);
    //Set the box size to match text it takes up.
    resumeTextSettingBoxSize = $('#introText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);

	let $oldBox = getPreviousBox('homeNav', dataStep);
    //check if we are selecting the same page to transition to
    if ($oldBox === "Current page"){return console.log("We are already on that page.");}
    let $newBox = $("#resume-text-body .slide[data-step=1]");
    slideThoseBoxes($newBox, $oldBox);
    recolorTheNav('homeNav');
    dataStep = 1;
});
document.getElementById('workNav').addEventListener("click", function(e){
    e.preventDefault(); // stop from scrolling back to top of page
    scrollToTop(1000); 
    //Set the box size to match text it takes up.
    resumeTextSettingBoxSize = $('#workReplaceText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);
    let $oldBox = getPreviousBox('workNav', dataStep);
    //check if we are selecting the same page to transition to
    if ($oldBox === "Current page"){return console.log("We are already on that page.");}
	let $newBox = $("#resume-text-body .slide[data-step=2]");
	slideThoseBoxes($newBox, $oldBox);
    recolorTheNav('workNav');
    dataStep = 2;
});
document.getElementById('skillNav').addEventListener("click", function(e){
    e.preventDefault(); // stop from scrolling back to top of page
    scrollToTop(1000); 
    //Set the box size to match text it takes up.
    resumeTextSettingBoxSize = $('#skillReplaceText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);
    let $oldBox = getPreviousBox('skillNav', dataStep);
    //check if we are selecting the same page to transition to
    if ($oldBox === "Current page"){return console.log("We are already on that page.");}
    let $newBox = $("#resume-text-body .slide[data-step=3]");
    slideThoseBoxes($newBox, $oldBox);
    recolorTheNav('skillNav');
    dataStep = 3;
});
document.getElementById('eduNav').addEventListener("click", function(e){
	e.preventDefault(); // stop from scrolling back to top of page
    scrollToTop(1000); 
    //Set the box size to match text it takes up.
    resumeTextSettingBoxSize = $('#eduReplaceText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);
    let $oldBox = getPreviousBox('eduNav', dataStep);
    //check if we are selecting the same page to transition to
    if ($oldBox === "Current page"){return console.log("We are already on that page.");}
    let $newBox = $("#resume-text-body .slide[data-step=4]");
    slideThoseBoxes($newBox, $oldBox);
    recolorTheNav('eduNav');
    dataStep = 4;
});
window.onload = function(){
    var homeButtons = document.getElementsByClassName('buttonHome');
    for (let i = 0; i < homeButtons.length; i++) {
        homeButtons[i].addEventListener("click", function(e){
            e.preventDefault(); // stop from scrolling back to top of page
            scrollToTop(1500);
            //Set the box size to match text it takes up.
            resumeTextSettingBoxSize = $('#introText').height();
            $('.allText').css('height', resumeTextSettingBoxSize);
            let $oldBox = getPreviousBox('buttonHome', dataStep);
            //check if we are selecting the same page to transition to
            if ($oldBox === "Current page"){return console.log("We are already on that page.");}
            let $newBox = $("#resume-text-body .slide[data-step=1]");
            slideThoseBoxes($newBox, $oldBox);
            recolorTheNav('buttonHome');
            dataStep = 1;
});
    }
};
document.getElementById('buttonWork').addEventListener("click", function(e){
    e.preventDefault(); // stop from scrolling back to top of page
    scrollToTop(1000); 
    //Set the box size to match text it takes up.
    resumeTextSettingBoxSize = $('#workReplaceText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);
	let $oldBox = getPreviousBox('buttonWork', dataStep);
    //check if we are selecting the same page to transition to
    if ($oldBox === "Current page"){return console.log("We are already on that page.");}
    let $newBox = $("#resume-text-body .slide[data-step=2]");
    slideThoseBoxes($newBox, $oldBox);
    recolorTheNav('buttonWork');
    dataStep = 2;
});
document.getElementById('buttonSkills').addEventListener("click", function(e){
	e.preventDefault(); // stop from scrolling back to top of page
    scrollToTop(1000); 
    //Set the box size to match text it takes up.
    resumeTextSettingBoxSize = $('#skillReplaceText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);
    let $oldBox = getPreviousBox('buttonSkills', dataStep);
    //check if we are selecting the same page to transition to
    if ($oldBox === "Current page"){return console.log("We are already on that page.");}
    let $newBox = $("#resume-text-body .slide[data-step=3]");
    slideThoseBoxes($newBox, $oldBox);
    recolorTheNav('buttonSkills');
    dataStep = 3;
});
document.getElementById('buttonEdu').addEventListener("click", function(e){
	e.preventDefault(); // stop from scrolling back to top of page
    scrollToTop(1000); 
    //Set the box size to match text it takes up.
    resumeTextSettingBoxSize = $('#eduReplaceText').height();
    $('.allText').css('height', resumeTextSettingBoxSize);
    let $oldBox = getPreviousBox('buttonEdu', dataStep);
    //check if we are selecting the same page to transition to
    if ($oldBox === "Current page"){return console.log("We are already on that page.");}
    let $newBox = $("#resume-text-body .slide[data-step=4]");
    slideThoseBoxes($newBox, $oldBox);
    recolorTheNav('buttonEdu');
    dataStep = 4;
});

function scrollToTop(scrollDuration) {
    let scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}


//this would be for ease in and out scrolling.
// function scrollToTop(scrollDuration) {
//     var cosParameter = window.scrollY / 2,
//         scrollCount = 0,
//         oldTimestamp = performance.now();
//     function step (newTimestamp) {
//         scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
//         if (scrollCount >= Math.PI) window.scrollTo(0, 0);
//         if (window.scrollY === 0) return;
//         window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
//         oldTimestamp = newTimestamp;
//         window.requestAnimationFrame(step);
//     }
//     window.requestAnimationFrame(step);
// }
/* 
    Explanations:
    - pi is the length/end point of the cosinus intervall (see above)
    - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
      (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
    - newTimestamp - oldTimestamp equals the duration

      a * cos (bx + c) + d                      | c translates along the x axis = 0
    = a * cos (bx) + d                          | d translates along the y axis = 1 -> only positive y values
    = a * cos (bx) + 1                          | a stretches along the y axis = cosParameter = window.scrollY / 2
    = cosParameter + cosParameter * (cos bx)    | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
    = cosParameter + cosParameter * (cos scrollCount * x)
*/
