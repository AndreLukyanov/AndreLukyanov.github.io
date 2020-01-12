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

// let hero = document.querySelectorAll(".choice-character__box .choice-character__item img");
let character = document.querySelector(".character .character__body img");
let level = document.querySelector(".character .character__body .character__level .character__scale");
let nameHero = document.querySelector(".character .character__body .character__name");

let heroes = [
	{
		id: 0,
		hp: 587,
		name: "anti-mage",
		url: "/img/character/anti-mage.png"
	},
	{
		id: 1,
		hp: 587,
		name: "tusk",
		url: "/img/character/tusk-full.png"
	},
	{
		id: 2,
		hp: 625,
		name: "axe",
		url: "/img/character/axe-full.png"
	},
	{
		id: 3,
		hp: 530,
		name: "juggernaut",
		url: "/img/character/juggernaut-full.png"
	},
	{
		id: 4,
		hp: 549,
		name: "phantom-assassin",
		url: "/img/character/phantom_assassin-full.png"
	},
	{
		id: 5,
		hp: 606,
		name: "ursa",
		url: "/img/character/ursa-full.png"
	}
];

// Создание div и img

function addCharacterInPopup() {
	for (let i = 1; i <= heroes.length; i++) {

		let characterBoxItem = document.createElement("div");
		let imagesCharacter = document.createElement("img");

		characterBoxItem.className = "choice-character__item";
		document.querySelector(".choice-character__box").appendChild(characterBoxItem);

		Array.prototype.forEach.call(document.querySelectorAll(".choice-character__item"), function (e) {
			e.appendChild(imagesCharacter);
			imagesCharacter.className = "choice-character__images";
		});
	}
}

addCharacterInPopup();

function addHero() {

	// блок где лежит изображение //
	let characterItem = Array.from(document.querySelectorAll(".choice-character__item"));

	// изображения //
	let characterAvatar = Array.from(document.querySelectorAll(".choice-character__images"));

	heroes.forEach(function (item, i) {

		characterItem.forEach(function (elem, index) {
			
			if (i == 0) {
				characterAvatar[0].src = item.url;
			}
			else if (i == 1) {
				characterAvatar[1].src = item.url;
			}
			else if (i == 2) {
				characterAvatar[2].src = item.url;
			}
			else if (i == 3) {
				characterAvatar[3].src = item.url;
			}
			else if (i == 4) {
				characterAvatar[4].src = item.url;
			}
			else if (i == 5) {
				characterAvatar[5].src = item.url;
			}


			function addingHero() {

				elem.onclick = function () {
					popup.classList.remove("active"); // Удаление класса у popup, чтобы закрыть окно

					if (index == 0) {
						character.src = characterAvatar[0].src;
						nameHero.innerHTML = heroes[0].name;
						level.innerHTML = heroes[0].hp;
					}
					else if (index == 1) {
						character.src = characterAvatar[1].src;
						nameHero.innerHTML = heroes[1].name;
						level.innerHTML = heroes[1].hp;
					}
					else if (index == 2) {
						character.src = characterAvatar[2].src;
						nameHero.innerHTML = heroes[2].name;
						level.innerHTML = heroes[2].hp;
					}
					else if (index == 3) {
						character.src = characterAvatar[3].src;
						nameHero.innerHTML = heroes[3].name;
						level.innerHTML = heroes[3].hp;
					}
					else if (index == 4) {
						character.src = characterAvatar[4].src;
						nameHero.innerHTML = heroes[4].name;
						level.innerHTML = heroes[4].hp;
					}
					else if (index == 5) {
						character.src = characterAvatar[5].src;
						nameHero.innerHTML = heroes[5].name;
						level.innerHTML = heroes[5].hp;
					}

				}

			}

			addingHero();

		});

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

function addCoins() {

	for (let i = 0; i <= 30000; i++) {
		setTimeout(function () {
			coin.innerHTML = i + i;
		}, i * 2000);
	}

}

// addCoins(); перенес в "Старт игры" для запуска скрипта после нажатия на кнопку начать


// Старт игры //

let buttonStart = document.getElementById("button-start");
let creeps = document.getElementById("creeps");
let sckillBlock = document.getElementById("skill");

function gameStart() {
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
					coin.innerHTML = Number(coin.innerHTML) + kill;

				}
			}

			killCreep();

		}
	});
}

useSkills();



