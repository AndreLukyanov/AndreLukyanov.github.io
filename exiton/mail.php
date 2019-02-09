<?php

 if($_POST["email"] != '' || $_POST["message"] != '' ):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Почта: ".$_POST['email'] ."\r\n" ."Сообщение: ".$_POST['message'] ."\r\n";
	$recipient = "exiton-1@mail.ru";
		$subject = 'Заполнена контактная форма с сайта exiton.su';
		$mailheader = "From: Экситон - Производитель полупроводниковых изделий <exiton-1@mail.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>

