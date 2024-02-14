/*
var scheduleSection = document.getElementById('schedule-section');
// scheduleSection.style.setProperty('--animate-duration', '900ms');
window.addEventListener('scroll', function() {
  if (scheduleSection.getBoundingClientRect().top <= window.innerHeight && scheduleSection.getBoundingClientRect().bottom >= 0) {
  	console.log(1);
  	scheduleSection.className="animate__animated animate__fadeInUp";
	}
});


var regformSection = document.getElementById('regform-section');
regformSection.style.setProperty('--animate-duration', '1.8s');
window.addEventListener('scroll', function() {
  if (regformSection.getBoundingClientRect().top <= window.innerHeight && regformSection.getBoundingClientRect().bottom >= 0) {
  	console.log(1);
  	regformSection.className="animate__animated animate__fadeInUp";
	}
});


var aboutEventSection = document.getElementById('about-event');
aboutEventSection.style.setProperty('--animate-duration', '1s');
window.addEventListener('scroll', function() {
  if (aboutEventSection.getBoundingClientRect().top <= window.innerHeight && aboutEventSection.getBoundingClientRect().bottom >= 0) {
  	console.log(1);
  	aboutEventSection.className="animate__animated animate__fadeInUp";
	}
});
*/



/*
var scheduleSection = document.getElementById('schedule-section');
// scheduleSection.style.setProperty('--animate-duration', '900ms');
window.addEventListener('scroll', function() {
  if (scheduleSection.getBoundingClientRect().top <= window.innerHeight && scheduleSection.getBoundingClientRect().bottom >= 0) {
  	console.log(1);
  	scheduleSection.className="animate__animated animate__fadeInUp";
	}
});
*/

function showMobileMenuBar() {
	document.getElementById('mobile-menubar').style.width="100vw";
}

function closeMobileMenuBar() {
	document.getElementById('mobile-menubar').style.width="0";
}
function checkCrouselState(){
	setTimeout(() => {
		if(document.getElementById('schedule-carousel-item-1').className!="carousel-item"){
			document.getElementsByClassName('schedule-days')[0].style.boxShadow = "-2px 4px 15px var(--blue-100)";
			for(let i = 1; i<8; i++){
				if(i!=1){
					document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
				}
			}
		}else if(document.getElementById('schedule-carousel-item-2').className!="carousel-item"){
			document.getElementsByClassName('schedule-days')[1].style.boxShadow = "-2px 4px 15px var(--blue-100)";
			for(let i = 1; i<8; i++){
				if(i!=2){
					document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
				}
			}
		}else if(document.getElementById('schedule-carousel-item-3').className!="carousel-item"){
			document.getElementsByClassName('schedule-days')[2].style.boxShadow = "-2px 4px 15px var(--blue-100)";
			for(let i = 1; i<8; i++){
				if(i!=3){
					document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
				}
			}
		}else if(document.getElementById('schedule-carousel-item-4').className!="carousel-item"){
			document.getElementsByClassName('schedule-days')[3].style.boxShadow = "-2px 4px 15px var(--blue-100)";
			for(let i = 1; i<8; i++){
				if(i!=4){
					document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
				}
			}
		}else if(document.getElementById('schedule-carousel-item-5').className!="carousel-item"){
			document.getElementsByClassName('schedule-days')[4].style.boxShadow = "-2px 4px 15px var(--blue-100)";
			for(let i = 1; i<8; i++){
				if(i!=5){
					document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
				}
			}
		}
		// else if(document.getElementById('schedule-carousel-item-6').className!="carousel-item"){
		// 	document.getElementsByClassName('schedule-days')[5].style.boxShadow = "-2px 4px 15px var(--blue-100)";
		// 	for(let i = 1; i<8; i++){
		// 		if(i!=6){
		// 			document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
		// 		}
		// 	}
		// }else if(document.getElementById('schedule-carousel-item-7').className!="carousel-item"){
		// 	document.getElementsByClassName('schedule-days')[6].style.boxShadow = "-2px 4px 15px var(--blue-100)";
		// 	for(let i = 1; i<8; i++){
		// 		if(i!=7){
		// 			document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
		// 		}
		// 	}
		// }
	}, 700); 
}


function showSchedule(n){
	if(n==1){
		document.getElementById("schedule-event-frame").style.display="flex";
		document.getElementById('schedule-carousel-item-1').className +=" active";
		document.getElementsByClassName('schedule-days')[0].style.boxShadow = "-2px 4px 15px var(--blue-100)";
		for(let i = 1; i<8; i++){
			if(i!=1){
				document.getElementById('schedule-carousel-item-'+i).className ="carousel-item";
				document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
			}
		}
	}else if(n==2){
		document.getElementById("schedule-event-frame").style.display="flex";
		document.getElementById('schedule-carousel-item-2').className +=" active";
		document.getElementsByClassName('schedule-days')[1].style.boxShadow = "-2px 4px 15px var(--blue-100)";
		for(let i = 1; i<8; i++){
			if(i!=2){
				document.getElementById('schedule-carousel-item-'+i).className ="carousel-item";
				document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
			}
		}
	}else if(n==3){
		document.getElementById("schedule-event-frame").style.display="flex";
		document.getElementById('schedule-carousel-item-3').className +=" active";
		document.getElementsByClassName('schedule-days')[2].style.boxShadow = "-2px 4px 15px var(--blue-100)";
		for(let i = 1; i<8; i++){
			if(i!=3){
				document.getElementById('schedule-carousel-item-'+i).className ="carousel-item";
				document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
			}
		}
	}else if(n==4){
		document.getElementById("schedule-event-frame").style.display="flex";
		document.getElementById('schedule-carousel-item-4').className +=" active";
		document.getElementsByClassName('schedule-days')[3].style.boxShadow = "-2px 4px 15px var(--blue-100)";
		for(let i = 1; i<8; i++){
			if(i!=4){
				document.getElementById('schedule-carousel-item-'+i).className ="carousel-item";
				document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
			}
		}
	}else if(n==5){
		document.getElementById("schedule-event-frame").style.display="flex";
		document.getElementById('schedule-carousel-item-5').className +=" active";
		document.getElementsByClassName('schedule-days')[4].style.boxShadow = "-2px 4px 15px var(--blue-100)";
		for(let i = 1; i<8; i++){
			if(i!=5){
				document.getElementById('schedule-carousel-item-'+i).className ="carousel-item";
				document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
			}
		}
	}
	// else if(n==6){
	// 	document.getElementById("schedule-event-frame").style.display="flex";
	// 	document.getElementById('schedule-carousel-item-6').className +=" active";
	// 	document.getElementsByClassName('schedule-days')[5].style.boxShadow = "-2px 4px 15px var(--blue-100)";
	// 	for(let i = 1; i<8; i++){
	// 		if(i!=6){
	// 			document.getElementById('schedule-carousel-item-'+i).className ="carousel-item";
	// 			document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
	// 		}
	// 	}
	// }else if(n==7){
	// 	document.getElementById("schedule-event-frame").style.display="flex";
	// 	document.getElementById('schedule-carousel-item-7').className +=" active";
	// 	document.getElementsByClassName('schedule-days')[6].style.boxShadow = "-2px 4px 15px var(--blue-100)";
	// 	for(let i = 1; i<8; i++){
	// 		if(i!=7){
	// 			document.getElementById('schedule-carousel-item-'+i).className ="carousel-item";
	// 			document.getElementsByClassName('schedule-days')[i-1].style.boxShadow = "-2px 4px 15px var(--blue-50)";
	// 		}
	// 	}
	// }
}