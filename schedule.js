c = 1;
var isListnerPause = false;
window.addEventListener('wheel', function(event) {
	// console.log(isListnerPause);

	if(!isListnerPause){
			isListnerPause = true;
			setTimeout(function(){
			 		isListnerPause = false;
			 	}, 1000);
			let delta = event.deltaY;
			// console.log(delta);
		 	if(delta>0){
		 		// downscrolling
		 		if (c!=5){
		 				 	document.getElementById('schedule-'+c).className = "schedule-frame animate__animated animate__backOutUp animate__slow";
					 		setTimeout(() => {
						 		 document.getElementById('schedule-'+c).style.display = "none";
						     document.getElementById('schedule-'+(c+1)).style.display = "flex";
						 		 document.getElementById('schedule-'+(c+1)).className = "schedule-frame animate__animated animate__backInUp animate__fast";
					  	c+=1;
					  }, 800);
		 		}

		 	}else{
		 		//upscrolling
		 		 	if (c!=1){
		 				 	document.getElementById('schedule-'+c).className = "schedule-frame animate__animated animate__backOutDown animate__slow";
					 		setTimeout(() => {
						 		 document.getElementById('schedule-'+c).style.display = "none";
						     document.getElementById('schedule-'+(c-1)).style.display = "flex";
						 		 document.getElementById('schedule-'+(c-1)).className = "schedule-frame animate__animated animate__backInDown animate__fast";
					  	c-=1;
					  }, 800);
		 		}
		 	}
	}	
});



tc = 1;
var startY;
var isTouchListnerPause = false;

window.addEventListener('touchstart', function(event) {
	startY = event.touches[0].clientY;
});

window.addEventListener('touchmove', function(event) {
	// console.log(isTouchListnerPause);

	if(!isTouchListnerPause){
			isTouchListnerPause = true;
			setTimeout(function(){
			 		isTouchListnerPause = false;
			 	}, 1000);
			let delta = event.touches[0].clientY;

			// console.log(delta);
		 	if(delta<startY){
		 		// downscrolling
		 		if (tc!=5){
		 				 	document.getElementById('schedule-'+tc).className = "schedule-frame animate__animated animate__backOutUp animate__slow";
					 		setTimeout(() => {
						 		 document.getElementById('schedule-'+tc).style.display = "none";
						     document.getElementById('schedule-'+(tc+1)).style.display = "flex";
						 		 document.getElementById('schedule-'+(tc+1)).className = "schedule-frame animate__animated animate__backInUp animate__fast";
					  	tc+=1;
					  }, 800);
		 		}

		 	}else{
		 		//upscrolling
		 		 	if (tc!=1){
		 				 	document.getElementById('schedule-'+tc).className = "schedule-frame animate__animated animate__backOutDown animate__slow";
					 		setTimeout(() => {
						 		 document.getElementById('schedule-'+tc).style.display = "none";
						     document.getElementById('schedule-'+(tc-1)).style.display = "flex";
						 		 document.getElementById('schedule-'+(tc-1)).className = "schedule-frame animate__animated animate__backInDown animate__fast";
					  	tc-=1;
					  }, 800);
		 		}
		 	}
	}	
});

