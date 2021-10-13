window.onscroll = function scroll(e) {
	let scroll = window.pageYOffset;
	scroll = Math.round(scroll);
	if(scroll > 50){
		document.querySelector(".top-screen-title h1").classList.add("hidden")
		document.querySelector(".top-screen-title").style.visibility  = 'hidden'
		document.getElementById("sub-header").classList.add("scroll");
	}else{
		document.querySelector(".top-screen-title h1").classList.remove("hidden")
		document.getElementById("sub-header").classList.remove("scroll");
		document.querySelector(".top-screen-title").style.visibility  = 'visible'
	};
	if(scroll > 780){
		document.getElementById("aboutMe").classList.add("active")
		document.getElementById("myWorks").classList.remove("active")
		document.getElementById("contact").classList.remove("active")
	}else{
		document.getElementById("aboutMe").classList.remove("active")
	};
	if(scroll > 1350){
		document.getElementById("myWorks").classList.add("active")
		document.getElementById("aboutMe").classList.remove("active")
		document.getElementById("contact").classList.remove("active")
	}else{
		document.getElementById("myWorks").classList.remove("active")
	};
	if(scroll > 2050){
		document.getElementById("contact").classList.add("active")
		document.getElementById("myWorks").classList.remove("active")
		document.getElementById("aboutMe").classList.remove("active")
	}else{
		document.getElementById("contact").classList.remove("active")
	};
}

function marriedOver(){
	document.querySelector(".married-title-block").classList.add("active")
}
function marriedOut(){
	document.querySelector(".married-title-block").classList.remove("active")
}
function partyOver(){
	document.querySelector(".party-title-block").classList.add("active")
}
function partyOut(){
	document.querySelector(".party-title-block").classList.remove("active")
}
function photosessionOver(){
	document.querySelector(".photosession-title-block").classList.add("active")
}
function photosessionOut(){
	document.querySelector(".photosession-title-block").classList.remove("active")
}
document.getElementById("adaptive-button").onclick = function(){
	document.getElementById("menu-adaptive").classList.toggle("active");
}
function removeAdapt(){
	document.getElementById("menu-adaptive").classList.remove("active");
}

var w = window.screen.availWidth;
if(w > 1000){
	let bg = document.querySelector('.top-screen-BG');
	let photo = document.querySelector('.window-1-photo'); 
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
	    photo.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
	});
};
if(w < 1000){
	let bg = document.querySelector('.top-screen-BG');
	let photo = document.querySelector('.window-1-photo'); 
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    bg.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 0 + 'px)';
	    photo.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 0 + 'px)';
	});	
}