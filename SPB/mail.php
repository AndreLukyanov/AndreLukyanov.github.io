<?php

 if($_POST["hide"] != '' || $_POST["name"] != '' || $_POST["phone"] != '' || $_POST["email"] != '' || $_POST["dispatch"] != '' || $_POST["treatment"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Услуга: ".$_POST['hide'] ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."Телефон: ".$_POST['phone'] ."\r\n" ."E-mail: ".$_POST['email'] ."\r\n" ."Рассылка свежих предложений по e-mail: ".$_POST['dispatch'] ."\r\n" ."Даю свое согласие на обработку персональных данных: ".$_POST['treatment'] ."\r\n";
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта DOMA ONLINE SPB - СЕРВИС ПО НЕДВИЖИМОСТИ';
		$mailheader = "From: andreyweb.com - сервис по недвижимости <Lukyanov-Andrey-V@yandex.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>

<?php
	
	if($_POST["names"] != '' || $_POST["phones"] != '' || $_POST["emails"] != '' || $_POST["dispatchs"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['names'] ."\r\n" ."Телефон:+ ".$_POST['phones'] ."\r\n" ."E-mail: ".$_POST['emails'] ."\r\n" ."Рассылка свежих предложений по e-mail: ".$_POST['dispatchs'] ."\r\n" ;
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта DOMA ONLINE SPB - СЕРВИС ПО НЕДВИЖИМОСТИ';
		$mailheader = "From: andreyweb.com - сервис по недвижимости <Lukyanov-Andrey-V@yandex.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>