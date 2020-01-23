function getItems() {
	let shop = Array.from(document.querySelectorAll(".armor .armor__item img")); // Лавка
	let inventory = Array.from(document.querySelectorAll(".items .items__col img")); // Инвентарь
	let inventoryBox = Array.from(document.querySelectorAll(".interface .items")); // Коробка инвентаря
	let inventaryIndex=0;
	shop.forEach(function (item, ii) {
		item.onclick = function () {

			item.offsetParent.lastElementChild.play(); // Звук предмета по клику
			inventory[inventaryIndex].src=item.src;
			inventaryIndex++;			
				
			if(inventaryIndex == 6) {
				inventaryIndex = 0; // Доходит до 6 и возращается к 0
			}
		}

		function dragInventory() {
			
			inventoryBox.forEach(function (inv) {
				item.style.left = inv.offsetHeight / 2 + 'px';
				item.style.left = inv.offsetWidth / 2 + 'px';
			});
	
		}

		inventory.onmousemove  = function(e) {
			dragInventory(e);
		}

	});

}

getItems();