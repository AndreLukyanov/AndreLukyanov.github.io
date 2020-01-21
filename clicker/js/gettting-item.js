function getItems() {
	let shop = Array.from(document.querySelectorAll(".armor .armor__item img")); // Лавка
	let inventory = Array.from(document.querySelectorAll(".items .items__col img")); // Инвентарь
let inventarIndex=0;
	shop.forEach(function (item, ii) {
		item.onclick = function () {

			item.offsetParent.lastElementChild.play(); // Звук предмета по клику
			inventory[inventarIndex].src=item.src;
			inventarIndex++;			
				
		}
	});

}

getItems();