function open() {
  var popup = document.getElementById('popup');
  popup.classList.add("open");
  clearInterval(timer);
}

$('.button_open').on('click', function () {
  open();
});

function remove() {
  var popup = document.getElementById('popup');
  popup.classList.remove("open");
}

$('.button_close').on('click', function () {
  remove();
});

$('.popup__close').on('click', function () {
  remove();
});


function everything() {
  var endBlock = document.getElementById('end');
  endBlock.classList.add("open");
}

var countdown = $('#timer #second'),
but = $('button'),
timer;
function startCountdown(){
  var startFrom = 15;
  countdown.text(startFrom).parent('span').show();
  timer = setInterval(function(){
    countdown.text(--startFrom);
    if(startFrom <= 0) {
      clearInterval(timer);
      everything();
    }
  },1000);
}
startCountdown();

function endClose() {
  var endBlock = document.getElementById('end');
  endBlock.classList.remove("open");
  startCountdown();
}

$('.end__close').on('click', function () {
  endClose();
});

$('.button_update').on('click', function () {
  endClose();
});



  



