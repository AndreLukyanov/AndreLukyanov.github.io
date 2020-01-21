// Добавление coins //

let coin = document.getElementById("coin");
let bank = 0;
function addCoins() {

	setInterval(function () {
		if (bank >= 30000) return;
		bank += 2;
		coin.innerHTML = bank;
	}, 2000);

}

// Старт игры //

function gameStart() {

	let buttonStart = document.getElementById("button-start");
	let creeps = document.getElementById("creeps");
	let sckillBlock = document.getElementById("skill");

	editPopup.style.display = "none";
	buttonStart.style.display = "none";
	addCoins();
	setTimeout(function () {
		sckillBlock.classList.add("active");
		creeps.classList.add("creeps-active");
	}, 1000);
}


// Здоровье крипов //

let creepHealth = document.querySelector(".creeps__health");
let creepHealthLevel = document.querySelector(".creeps__body .creeps__inner-strip");

function appearanceCreep() {
	creepHealth.innerHTML = 250;
}

appearanceCreep();

// Скилы //

let skills = Array.from(document.querySelectorAll(".skill .skill__item img"));
let impactSimple = 10;
let impactPowerful = 50;
let characterLevel = document.querySelector(".character__number");
let cooldownBlock = document.querySelectorAll(".skill .skill__cooldown");
let receivedHealth = 100;

let speakingCreep = document.querySelectorAll(".speaking .speaking__creeps");

let kill = 1000;

function useSkills() {

	skills.forEach(function (item, i) {
		item.onclick = function () {

			// Нанесение урона //

			if (i == 0) {
				creepHealth.innerHTML = creepHealth.innerHTML - impactSimple;
				receivedHealth = receivedHealth - 4;
				creepHealthLevel.style.width = receivedHealth + "%";
			}
			else if (i == 1) {
				creepHealth.innerHTML = creepHealth.innerHTML - impactPowerful;
				receivedHealth = receivedHealth - 20;
				creepHealthLevel.style.width = receivedHealth + "%";
			}

			// Крип говорит //

			function speak() {
				speakingCreep.forEach(function (item, i) {
					if (i == 0 && creepHealthLevel.style.width <= "90%") {
						setTimeout(function () {
							item.classList.add("active");
						}, 1000);
					}
					else if (i == 1 && creepHealthLevel.style.width <= "70%") {
						setTimeout(function () {
							item.classList.add("active");
						}, 1000);
					}
					else if (i == 2 && creepHealthLevel.style.width <= "50%") {
						setTimeout(function () {
							item.classList.add("active");
						}, 1000);
					}
				});
			}

			speak();

			// Откат умений //

			function cooldownSkills() {
				let countdown = document.querySelectorAll(".skill .skill__countdown");

				if (item.onclick && i == 0) {
					cooldownBlock[0].classList.add("active");
					for (let i = 1; i >= 0; i--) {
						setTimeout(function () {
							countdown[0].innerHTML = + i;
						}, (1 - i) * 1000);
					}
					setTimeout(function () {
						cooldownBlock[0].classList.remove("active");
					}, 2000);
				}
				else if (item.onclick && i == 1) {
					cooldownBlock[1].classList.add("active");
					for (let i = 5; i >= 0; i--) {
						setTimeout(function () {
							countdown[1].innerHTML = + i;
						}, (5 - i) * 1000);
					}
					setTimeout(function () {
						cooldownBlock[1].classList.remove("active");
					}, 6000);
				}

			}

			cooldownSkills();

			// Смерть крипа //

			function killCreep() {
				if (creepHealth.innerText <= 0) {
					creeps.classList.remove("creeps-active");
					characterLevel.innerHTML = 2;
					bank = bank + kill;
					coin.innerHTML = bank;

				}
			}

			killCreep();

		}
	});
}

useSkills();

