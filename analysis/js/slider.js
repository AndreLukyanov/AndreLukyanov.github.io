let item = document.querySelector("div > img");

function addClassFirst() {
    item.classList.add("slider__images--active");
}
addClassFirst();

let items = document.querySelectorAll("div > img");
function nextImages() {
    
    items.forEach((item, i, arr ) => {
        item.classList.toggle("slider__images--active");
    });
  
}






