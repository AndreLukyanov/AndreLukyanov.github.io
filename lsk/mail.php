<?php

 if($_POST["name"] != '' || $_POST["phone"] != '' || $_POST["designn"] != '' || $_POST["debuggingg"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."Телефон: +".$_POST['phone'] ."\r\n" ."Разработать дизайн: ".$_POST['designn'] ."\r\n" ."Выполнить отделку: ".$_POST['debuggingg'] ."\r\n";
	$recipient = "info@lskbud.com.ua, lsk-bud@ukr.net";
		$subject = 'Заполнена контактная форма с сайта ЛСК БУД - строительная компания';
		$mailheader = "From: ЛСК БУД - строительная компания <info@lskbud.com.ua>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>