var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "./image/showcaseimage1.jpg";
images[1] = "./image/showcase2.jpg";
images[2] = "./image/showcase3.jpg";
images[3] = "./image/showcase4.jpg";
images[4] = "./image/showcase5.jpg";
images[5] = "./image/showcase6.jpg";
images[6] = "./image/showcase7.jpg";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
