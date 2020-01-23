function dragInventory() {
	let inventoryBox = document.querySelector(".interface .items .items__col"); // Коробка инвентаря
	let inventorys = Array.from(document.querySelectorAll(".items .items__col img")); // Инвентарь

	inventorys.forEach(function (item) {
		item.onmousedown = function (e) {

			var coords = getCoords(item);
			var shiftX = e.pageX - coords.left;
			var shiftY = e.pageY - coords.top;

			item.style.position = "absolute";
			moveAt(e);

			inventoryBox.appendChild(item);
			item.style.zIndex = 1000;

			function moveAt(e) {
				item.style.top = e.pageY - shiftY + "px";
				item.style.left = e.pageX - shiftX + "px";
			}

			inventoryBox.onmousemove = function (e) {
				moveAt(e);
			}

			item.onmouseup = function () {
				inventoryBox.onmousemove = null;
				item.onmouseup = null;
			}

			item.ondragstart = function () {
				return false;
			};

			function getCoords(el) {
				let box = el.getBoundingClientRect();

				return {
					top: box.top + pageYOffset,
					left: box.left + pageXOffset
				}
			}
		}
	});
}

dragInventory();