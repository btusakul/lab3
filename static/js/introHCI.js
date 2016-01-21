'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#testjs').click(function(e) {
		$(".jumbotron h1").text("Javascript is connected");
		$(this).text("Text changed");
		$(".jumbotron p").toggleClass("active");
		
		$('#submitBtn').click(updateProject);
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function updateProject(e) {
	console.log("Check 1");
	var ID = $('#project').val();
	$(ID).animate({
		width: $('#width').val()
		
	});
	console.log("Check 2");
	var changedText = $('#description').val();
	$(ID + " .project-description").text(changedText);
}
function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
	$(this).css("background-color","#7fff00");
	
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	}
	else 
	{
		//description.html("<p>Stop clicking on me! You just did that at " + (new Date()) + "</p>");
		description.fadeToggle();
	}
		
}