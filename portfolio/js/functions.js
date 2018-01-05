// JavaScript Document

//Function to Store the name from the submitted form
function storeName(){
	
	//First Name Variable
	var fname = document.getElementById("fname").value;
	
	console.log(fname);
	
	//Store name in local storage
	localStorage.setItem("fname",fname);
	
	//Mark user as visited the site
	localStorage.setItem("visited", "yes");
	
	console.log(localStorage.getItem("visited"));
	
}

//Function that starts at the beginning of the page when loaded
function start(){
	
	//Function for mouseover & mouseout
	
	if(document.getElementById("hidden") != null){
		document.getElementById("hidden").addEventListener("mouseover",mouseOver,false);
		document.getElementById("hidden").addEventListener("mouseout",mouseOut,false);
	
	}
	
	//Gets the Last Modified Date
	var date = document.getElementById("date");
	

	//Displays the last modified date
	date.innerHTML = "Last Modified Date: " + document.lastModified;
	
	
	
	
	
	//Function for different images to display
	/*if(document.getElementById("picture") != null){
		randomImage();
	}*/
	
	//Check if user has visited before
	if(localStorage.getItem("visited") === "yes" && document.getElementById("welcomeHeader") != null ){
			
		//Display welcome Message
		document.getElementById("welcomeHeader").innerHTML = "Welcome back, " + localStorage.getItem("fname")+"!";
	}
	
		var asyncRequest;
}

//Function to reveal the word
function mouseOver(){
		document.getElementById("hidden").style.backgroundColor= "#ff0022";
	}
	
//Function to hide the word
	function mouseOut(){
		document.getElementById("hidden").style.backgroundColor = "#FFF"
	}

//Function that selects a random image to display
function randomImage(){
	
	//Adds Image names to array
	var images = ["https://dl.dropboxusercontent.com/s/untixpuccfmr87i/IMG_4271%202.jpg?dl=0","https://dl.dropboxusercontent.com/s/oy2qhs708wbbsd4/IMG_4009.jpg?dl=0","https://dl.dropboxusercontent.com/s/sloly34l1bu867o/IMG_5354.jpg?dl=0"];
	
	//Generates a random number between 0 and 3 
	var value = Math.floor(0 + Math.random() * 3);
	
	//Sets the image to a random picture
	document.getElementById("picture").src = images[value];
	
	
}

//Opens George Mason University Website
function openWebsite(){
	window.open("https://www2.gmu.edu/");
}

//Function that changes the color of the astronaut on the main page
function changeWhite(){
	document.getElementById("astro").src = "images/Astronaut.png";
}

//Function that changes the color of the astronaut on the main page
function changeRed(){
	document.getElementById("astro").src = "images/astro_red.png";
}


//Sets background to warm
function changeWarm(){
	document.getElementById("mood").style.background = "linear-gradient(to right, #ff0022, yellow)";
}
//Sets Background to cool
function changeCool(){
	document.getElementById("mood").style.background = "linear-gradient(to right, #000022, purple)";
}

//Remove Blocks
function removeBlock(id){
	var block = document.getElementById(id);
	block.parentNode.removeChild(block);
}

//Launch Countdown function
function startCountdown(){
	
	var timerFunction = setInterval(countdown,1000);
	
	function countdown(){
	
		var timer = document.getElementById("countdown").innerHTML;
	
		if(timer == "1"){
			document.getElementById("countdown").innerHTML = "LIFTOFF!";
			document.getElementById("countdown").setAttribute("style", "animation:trasition; animation-duration:3s");
			clearInterval(timerFunction);
		}
		else{
			timer = timer - 1;
	
			document.getElementById("countdown").innerHTML = timer;
		}
	}
}

//Getting an image from XML
function getImage(){
	

	
	// attempt to create XMLHttpRequest object and make the request
      try
      {
         asyncRequest = new XMLHttpRequest(); // create request object

         // register event handler
         asyncRequest.addEventListener(
            "readystatechange", processResponse, false); 
         asyncRequest.open( "GET", 'resume.xml', true ); // prepare the request
         asyncRequest.send( null ); // send the request
      } // end try
      catch ( exception )
      {
         alert( "Request Failed" );
      } // end catch
   } // end function getImages
   
   // parses the XML response; dynamically creates an undordered list and 
   // populates it with the response data; displays the list on the page

function processResponse(){
	// if request completed successfully and responseXML is non-null
      if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 && 
         asyncRequest.responseXML )
      {
		  var image = document.getElementById("imageHolder");
		  
		  //Get links for image
		  var jobs = asyncRequest.responseXML.getElementsByTagName(
            "job" );
		  
		  var job = jobs.item(1);
		  
		  var file = job.getElementsByTagName( "eventimage" ).
               item( 0 ).firstChild.nodeValue;
		  
		  
         image.src = file;
	  }
}

window.addEventListener("load",start(),false);