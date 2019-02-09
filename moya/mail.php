<?php

 if($_POST["name"] != '' || $_POST["phone"] != '' || $_POST["email"] != '' || $_POST["mesages"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."Телефон: ".$_POST['phone'] ."\r\n" ."Email: ".$_POST['email'] ."\r\n" ."Сообщение: ".$_POST['mesages'] ."\r\n";
	$recipient = "moymoya@bk.ru";
		$subject = 'Заполнена контактная форма с сайта MOY&MOYA';
		$mailheader = "From: moy&moya.com - <moymoya@bk.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>