function getItems() {
	let shop = Array.from(document.querySelectorAll(".armor .armor__item img")); // Лавка
	let inventory = Array.from(document.querySelectorAll(".items .items__col img")); // Инвентарь

	shop.forEach(function (item, ii) {
		item.onclick = function () {

			item.offsetParent.lastElementChild.play(); // Звук предмета по клику

				if(inventory[0].src != 0) {
					inventory[0].src = shop[ii].src;
				}
				else if(inventory[1].src != 1) {
					inventory[1].src = shop[ii].src;
				}
				
		}
	});

}

getItems();