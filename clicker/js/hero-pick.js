let heroes = [
	{
		id: 0,
		hp: 587,
		name: "anti-mage",
		url: "/img/character/anti-mage.png",
		skill: [
			{
				simpl: "/img/skills/anti-mage/mana_break.png",
				powerful: "/img/skills/anti-mage/mana_void.png"
			}
		]
	},
	{
		id: 1,
		hp: 587,
		name: "tusk",
		url: "/img/character/tusk-full.png",
		skill: [
			{
				simpl: "/img/skills/tusk/ice_shards.png",
				powerful: "/img/skills/tusk/walrus_punch.png"
			}
		]
	},
	{
		id: 2,
		hp: 625,
		name: "axe",
		url: "/img/character/axe-full.png",
		skill: [
			{
				simpl: "/img/skills/axe/counter_helix.png",
				powerful: "/img/skills/axe/culling_blade.png"
			}
		]
	},
	{
		id: 3,
		hp: 530,
		name: "juggernaut",
		url: "/img/character/juggernaut-full.png",
		skill: [
			{
				simpl: "/img/skills/juggernaut/blade_fury.png",
				powerful: "/img/skills/juggernaut/omnislash_icon.png"
			}
		]
	},
	{
		id: 4,
		hp: 549,
		name: "phantom-assassin",
		url: "/img/character/phantom_assassin-full.png",
		skill: [
			{
				simpl: "/img/skills/phantom-assassin/stifling_dagger.png",
				powerful: "/img/skills/phantom-assassin/coup_de_grace.png"
			}
		]
	},
	{
		id: 5,
		hp: 606,
		name: "ursa",
		url: "/img/character/ursa-full.png",
		skill: [
			{
				simpl: "/img/skills/ursa/ursa_overpower.png",
				powerful: "/img/skills/ursa/ursa_enrage.png"
			}
		]
	}
];

// Создание блоков в popup, добавление hero и skills

function addCharacterInPopup() {

	let character = document.querySelector(".character .character__body img");
	let characterHealth = document.querySelector(".character .character__body .character__level .character__scale");
	let characterName = document.querySelector(".character .character__body .character__name");
	let characterSkills = document.querySelectorAll(".skill__images");

	for (let i = 0; i <= heroes.length; i++) {

		let characterBoxItem = document.createElement("div");
		let characterimages = document.createElement("img");

		characterBoxItem.className = "choice-character__item";
		document.querySelector(".choice-character__box").appendChild(characterBoxItem);

		Array.prototype.forEach.call(document.querySelectorAll(".choice-character__item"), function (e) {
			e.appendChild(characterimages);
			characterimages.className = "choice-character__images";
		});

		// Добавление пути к img

		characterimages.src = heroes[i].url;

		// Добавление персонажа по клику и у мений

		characterBoxItem.onclick = () => {
			popup.classList.remove("active"); // Удаление класса у popup, чтобы закрыть окно

			character.src = heroes[i].url;
			characterName.innerHTML = heroes[i].name;
			characterHealth.innerHTML = heroes[i].hp;

			characterSkills[0].src = heroes[i].skill[0].simpl;
			characterSkills[1].src = heroes[i].skill[0].powerful;
			
		};
	};
};

addCharacterInPopup();