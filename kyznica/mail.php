<?php

 if($_POST["name"] != '' || $_POST["phone"] != '' ):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."Телефон: ".$_POST['phone'] ."\r\n";
	$recipient = "kovkavyugorske@mail.ru";
		$subject = 'Заполнена контактная форма с сайта Югорская кузница';
		$mailheader = "From: Югорская кузница - Изготовление кованных изделий <kovkavyugorske@mail.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>

<?php
	
	if($_POST["names"] != '' || $_POST["phones"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['names'] ."\r\n" ."Телефон:+ ".$_POST['phones'] ."\r\n";
	$recipient = "kovkavyugorske@mail.ru";
		$subject = 'Заполнена контактная форма с сайта Югорская кузница';
		$mailheader = "From: Югорская кузница - Изготовление кованных изделий <kovkavyugorske@mail.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>