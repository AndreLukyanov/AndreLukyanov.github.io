<?php

 if($_POST["name"] != '' || $_POST["phone"] != '' || $_POST["email"] != '' || $_POST["hide"] != '' || $_POST["square"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."Телефон: +".$_POST['phone'] ."\r\n" ."E-mail: ".$_POST['email'] ."\r\n" ."Материал: ".$_POST['hide'] ."\r\n" ."Количество квадратных метров (м2): ".$_POST['square'] ."\r\n";
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта Omicron';
		$mailheader = "From: Омикронцы <lukyanovandreyweb@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>