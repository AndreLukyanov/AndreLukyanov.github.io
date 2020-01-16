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

// Добавление coins //

let coin = document.getElementById("coin");

function addCoins() {

	for (let i = 0; i <= 30000; i++) {
		setTimeout(function () {
			coin.innerHTML = i + i;
		}, i * 2000);
	}

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
					coin.innerHTML = Number(coin.innerHTML) + kill;

				}
			}

			killCreep();

		}
	});
}

useSkills();

let shop = [
	{
		id: 0,
		name: "stout-shield",
		url: "/img/inventory/stout-shield.png"
	},
	{
		id: 1,
		name: "tango",
		url: "/img/inventory/tango.png"
	},
	{
		id: 2,
		name: "urn-of-shadows",
		url: "/img/inventory/urn-of-shadows.png"
	},
	{
		id: 3,
		name: "ring-of-protection",
		url: "/img/inventory/ring-of-protection.png"
	},
	{
		id: 4,
		name: "healing-salve",
		url: "/img/inventory/healing-salve.png"
	},
	{
		id: 5,
		name: "vladmirs-offering",
		url: "/img/inventory/vladmirs-offering.png"
	},
	{
		id: 6,
		name: "spirit-vessel",
		url: "/img/inventory/spirit-vessel.png"
	},
	{
		id: 7,
		name: "shivas-guard",
		url: "/img/inventory/shivas-guard.png"
	},
	{
		id: 8,
		name: "phase-boots",
		url: "/img/inventory/phase-boots.png"
	},
	{
		id: 9,
		name: "euls-scepter-of-divinity",
		url: "/img/inventory/euls-scepter-of-divinity.png"
	},
	{
		id: 10,
		name: "force-staff",
		url: "/img/inventory/force-staff.png"
	},
	{
		id: 11,
		name: "hood-of-defiance",
		url: "/img/inventory/hood-of-defiance.png"
	},
	{
		id: 12,
		name: "pipe-of-insight",
		url: "/img/inventory/pipe-of-insight.png"
	},
	{
		id: 13,
		name: "blade-mail",
		url: "/img/inventory/blade-mail.png"
	},
	{
		id: 14,
		name: "blink-dagger",
		url: "/img/inventory/blink-dagger.png"
	},
	{
		id: 15,
		name: "battle-fury",
		url: "/img/inventory/battle-fury.png"
	},
	{
		id: 16,
		name: "black-king-bar",
		url: "/img/inventory/black-king-bar.png"
	},
	{
		id: 17,
		name: "butterfly",
		url: "/img/inventory/butterfly.png"
	},
	{
		id: 18,
		name: "desolator",
		url: "/img/inventory/desolator.png"
	},
	{
		id: 19,
		name: "crimson-guard",
		url: "/img/inventory/crimson-guard.png"
	},
	{
		id: 20,
		name: "aghanims-scepter",
		url: "/img/inventory/aghanims-scepter.png"
	},
	{
		id: 21,
		name: "lotus-orb",
		url: "/img/inventory/lotus-orb.png"
	},
	{
		id: 22,
		name: "manta-style",
		url: "/img/inventory/manta-style.png"
	},
	{
		id: 23,
		name: "nullifier",
		url: "/img/inventory/nullifier.png"
	},
	{
		id: 24,
		name: "monkey-king-bar",
		url: "/img/inventory/monkey-king-bar.png"
	},
	{
		id: 25,
		name: "rod-of-atos",
		url: "/img/inventory/rod-of-atos.png"
	},
	{
		id: 26,
		name: "radiance",
		url: "/img/inventory/radiance.png"
	},
	{
		id: 27,
		name: "satanic",
		url: "/img/inventory/satanic.png"
	},
	{
		id: 27,
		name: "abyssal-blade",
		url: "/img/inventory/abyssal-blade.png"
	},
	{
		id: 29,
		name: "divine-rapier",
		url: "/img/inventory/divine-rapier.png"
	}
];

function addInventory() {
	for(let i = 0; i < shop.length; i++) {
		let inventoryItem = document.createElement("div");
		let inventoryImg = document.createElement("img");

		
		inventoryItem.className = "armor__item";
		document.querySelector(".armor__body").appendChild(inventoryItem);

		Array.prototype.forEach.call(document.querySelectorAll(".armor__item"), function (e) {
			e.appendChild(inventoryImg);
			inventoryImg.className = "armor__images";
		});

		// Добавление пути к img

		inventoryImg.src = shop[i].url;
	}
};

addInventory();

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


// Выбор героя //

let character = document.querySelector(".character .character__body img");
let characterHealth = document.querySelector(".character .character__body .character__level .character__scale");
let characterName = document.querySelector(".character .character__body .character__name");

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
	
	for (let i = 0; i <= heroes.length; i++) {

		let characterBoxItem = document.createElement("div");
		let imagesCharacter = document.createElement("img");

		characterBoxItem.className = "choice-character__item";
		document.querySelector(".choice-character__box").appendChild(characterBoxItem);

		Array.prototype.forEach.call(document.querySelectorAll(".choice-character__item"), function (e) {
			e.appendChild(imagesCharacter);
			imagesCharacter.className = "choice-character__images";
		});

		// Добавление пути к img

		imagesCharacter.src = heroes[i].url;

		// Добавление персонажа по клику

		characterBoxItem.onclick = () => {
			popup.classList.remove("active"); // Удаление класса у popup, чтобы закрыть окно

			character.src = heroes[i].url;
			characterName.innerHTML = heroes[i].name;
			characterHealth.innerHTML = heroes[i].hp;
		};

	};
};

addCharacterInPopup();


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


// addCoins(); перенес в "Старт игры" для запуска скрипта после нажатия на кнопку начать




