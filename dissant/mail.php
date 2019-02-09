<?php

 if($_POST["name"] != '' || $_POST["email"] != '' || $_POST["comment"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."E-mail: ".$_POST['email'] ."\r\n" ."Сообщение: ".$_POST['comment'] ."\r\n";
	$recipient = "support@dissant.eu";
		$subject = 'Заполнена контактная форма с сайта dissant.eu - сайты под ключ';
		$mailheader = "From: dissant.eu - сайты под ключ <support@dissant.eu>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>

<?php
	
	if($_POST["names"] != '' || $_POST["surname"] != '' || $_POST["phone"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['names'] ."\r\n" ."Фамилия: ".$_POST['surname'] ."\r\n" ."Телефон:+ ".$_POST['phone'] ."\r\n";
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта dissant.eu - сайты под ключ';
		$mailheader = "From: dissant.eu - сайты под ключ <support@dissant.eu>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>