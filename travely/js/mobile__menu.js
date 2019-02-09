function toggleClassMenu() {
	myMenu.classList.add("menu__animatable");	
	if(!myMenu.classList.contains("visible")) {		
		myMenu.classList.add("visible");
	} else {
		myMenu.classList.remove("visible");		
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu__animatable");
}

var myMenu = document.querySelector(".navigation");
var oppMenu = document.querySelector(".hamburger");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);