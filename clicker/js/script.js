// Закрытие и открытие первого окна // 
let popup = document.querySelector(".choice-character.active");
let popupBody = document.querySelector(".choice-character__body");
let editPopup = document.getElementById("edit");

function closePopup() { // Не используется
	document.addEventListener("click", function (e) {
		if (popupBody && e.target !== popupBody && !popupBody.contains(e.target)) {
			popup.classList.remove("active");
		}
	});
}

function openPopup() {
	editPopup.onclick = function () {
		popup.classList.add("active");
	}
}

openPopup();


// Выбор героя //

let hero = document.querySelectorAll(".choice-character__box .choice-character__item img");
let character = document.querySelector(".character .character__body img");
let level = document.querySelector(".character .character__body .character__level .character__scale");
let nameHero = document.querySelector(".character .character__body .character__name");

let antiMage, tusk, axe, juggernaut, phantomAssassin, ursa;

antiMage = {
	hp: 587,
	name: "anti-mage"
};

tusk = {
	hp: 587,
	name: "tusk"
};

axe = {
	hp: 625,
	name: "axe"
};

juggernaut = {
	hp: 530,
	name: "juggernaut"
};

phantomAssassin = {
	hp: 549,
	name: "phantom-assassin"
};
ursa = {
	hp: 606,
	name: "ursa"
};

function addHero() {
	hero.forEach(function (item, i) {
		item.onclick = function () {
			character.src = item.src;
			popup.classList.remove("active"); // Удаление класса у popup, чтобы закрыть окно
			if (i == 0) {
				level.innerHTML = antiMage.hp;
				nameHero.innerHTML = antiMage.name;
			}
			else if (i == 1) {
				level.innerHTML = tusk.hp;
				nameHero.innerHTML = tusk.name;
			}
			else if (i == 2) {
				level.innerHTML = axe.hp;
				nameHero.innerHTML = axe.name;
			}
			else if (i == 3) {
				level.innerHTML = juggernaut.hp;
				nameHero.innerHTML = juggernaut.name;
			}
			else if (i == 4) {
				level.innerHTML = phantomAssassin.hp;
				nameHero.innerHTML = phantomAssassin.name;
			}
			else if (i == 5) {
				level.innerHTML = ursa.hp;
				nameHero.innerHTML = ursa.name;
			}
		}
	});
}

addHero();

// Открытие ЛАВКИ //

function visible() {
	let armor = document.getElementById("armor");

	armor.classList.toggle("armor-visible");
}


// Получение придмета при клике //

function addItems() {
	let items = Array.from(document.querySelectorAll(".armor .armor__item img")); // Лавка
	let inventory = Array.from(document.querySelectorAll(".items .items__col img")); // Инвентарь

	items.forEach(function (item, i) {
		item.onclick = function () {
			console.log(i);

			inventory.filter(function (e) {
				if (inventory.indexOf(e) == 0) {
					e.src = item.src;
				}
				else {
					e.src = "";
				}
			});

		}
	});

}

addItems();


// Добавление coins //

let coin = document.getElementById("coin");

function coins() {

	for (let i = 0; i <= 30000; i++) {
		setTimeout(function () {
			coin.innerHTML = + i;
		}, i * 2000);
	}

}

// coins(); перенес в "Старт игры" для запуска скрипта после нажатия на кнопку начать


// Старт игры //

let buttonStart = document.getElementById("button-start");
let creeps = document.getElementById("creeps");
let sckillBlock = document.getElementById("skill");

function gameStart() {
	editPopup.style.display = "none";
	buttonStart.style.display = "none";
	coins();
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
let kill = 1000;
let characterLevel = document.querySelector(".character__number");
let cooldownBlock = document.querySelectorAll(".skill .skill__cooldown");
let receivedHealth = 100;

let speakingCreep = document.querySelectorAll(".speaking .speaking__creeps");

parseInt(creepHealth.innerHTML);
parseInt(coin.innerHTML);

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
					if(i == 0 && creepHealthLevel.style.width <= "90%") {
						setTimeout(function () {
							item.classList.add("active");
						}, 1000);
					}
					else if(i == 1 && creepHealthLevel.style.width <= "70%") {
						setTimeout(function () {
							item.classList.add("active");
						}, 1000);
					}
					else if(i == 2 && creepHealthLevel.style.width <= "50%") {
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
						}, i * 1000);
					}
					setTimeout(function () {
						cooldownBlock[0].classList.remove("active");
					}, 2000);
				}
				else if (item.onclick && i == 1) {
					cooldownBlock[1].classList.add("active");
					for (let i = 5; i >= 0; i--) {
						setTimeout(function () {
							countdown[1].innerHTML =+ i;
						},  i * 1000);
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
					coin.innerHTML = + kill;
				}
			}

			killCreep();

		}
	});
}

useSkills();



