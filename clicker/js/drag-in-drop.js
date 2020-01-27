function dragInventory() {
	let inventoryBox = document.querySelector(".interface .items .items__col"); // Коробка инвентаря
	let inventorys = Array.from(document.querySelectorAll(".items .items__col img")); // Инвентарь

	inventorys.forEach(function (item) {
		item.onmousedown  = function(e) {

			let shiftX = e.pageX;
			let shiftY = e.pageY;
			item.style.position = "absolute";
			drag(e);

			function drag(e) {
				item.style.left = e.pageX - shiftX + "px";
				item.style.top = e.pageY - shiftY + "px";
			};

			document.onmousemove = function(e) {
				drag(e);
			};

			item.onmouseup = function() {
				document.onmousemove = null;
				item.onmouseup = null;
			};

		};

		item.ondragstart = function() {
			return false;
		};
	});
}

dragInventory();