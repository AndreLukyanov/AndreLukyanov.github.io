function getItems() {
	let shopping = Array.from(document.querySelectorAll(".armor .armor__item img")); // Лавка
	let inventory = Array.from(document.querySelectorAll(".items .items__col img")); // Инвентарь
	let inventaryIndex = 0;
	let armorPrice = document.querySelector(".armor__price");
	let coinValue = parseInt(coin.innerHTML)
	shopping.forEach(function (item) {

		shop.forEach(function (array) {

			if (coinValue >= array.price) {
				armorPrice.style.opacity = 1;
	
				item.onclick = function () {
					item.offsetParent.lastElementChild.play(); // Звук предмета по клику
					inventory[inventaryIndex].src = item.src;
					inventaryIndex++;
	
					if (inventaryIndex == 6) {
						inventaryIndex = 0; // Доходит до 6 и возращается к 0
					}
				}
			}
			else {
				console.log(12);
			}
		});
	});

}


getItems();