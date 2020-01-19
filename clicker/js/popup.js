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