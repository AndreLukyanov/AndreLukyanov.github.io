$(document).ready(function(){

    document.getElementById('form_order').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "mail.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("&name=" + f.name.value +  "&phone=" + f.phone.value);
     /*success: function(data) {
            if(data == "true") {
               $("#box").fadeIn("fast", function(){
                  setTimeout("$.fancybox.close()", 1000);
               });
            }
         }*/
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      alert('Спасибо. Мы ответим Вам в ближайшее время!');    
      f.name.value='';
      f.phone.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

    document.getElementById('footer__form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "mail.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("&name=" + f.name.value +  "&phone=" + f.phone.value);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      alert('Спасибо. Мы ответим Вам в ближайшее время!');    
      f.name.value='';
      f.phone.value='';
    }
  }
  http.onerror = function() {
   alert('Извините, данные не были переданы');
  }
 }, false);

});