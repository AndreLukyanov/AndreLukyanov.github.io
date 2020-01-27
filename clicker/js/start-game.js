function gameStart() {

	let buttonStart = document.getElementById("button-start");
	let creeps = document.getElementById("creeps");
	let sckillBlock = document.getElementById("skill");
	let soundHero = document.querySelector(".game-sound__hero");
	let soundStart = document.querySelector(".game-sound__start");

	editPopup.style.display = "none";
	buttonStart.style.display = "none";
	addCoins();
	setTimeout(function () {
		sckillBlock.classList.add("active");
		creeps.classList.add("creeps-active");
		soundHero.pause();
		soundStart.autoplay = true;
		soundStart.loop = true;
		soundStart.play();
	}, 1000);
}