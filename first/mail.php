<?php

 if($_POST["name"] != '' || $_POST["email"] != '' || $_POST["phone"] != '' || $_POST["email"] != '' || $_POST["question"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."Почта: ".$_POST['email'] ."\r\n" ."Телефон: ".$_POST['phone'] ."\r\n" ."Вопрос: ".$_POST['question'] ."\r\n";
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта andreyweb.com - Создание веб-сайтов';
		$mailheader = "From: andreyweb.com - сайты под ключ <Lukyanov-Andrey-V@yandex.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>

<?php

 if($_POST["message"] != '' || $_POST["namek"] != '' || $_POST["phonek"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Сообщение Консультации: ".$_POST['message'] ."\r\n" ."Имя: ".$_POST['namek'] ."\r\n" ."Телефон: ".$_POST['phonek'] ."\r\n";
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта andreyweb.com - Создание веб-сайтов';
		$mailheader = "From: andreyweb.com - сайты под ключ <Lukyanov-Andrey-V@yandex.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>

<?php

 if($_POST["namea"] != '' || $_POST["emaila"] != '' || $_POST["phonea"] != '' || $_POST["messagea"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['namea'] ."\r\n" ."Почта: ".$_POST['emaila'] ."\r\n" ."Телефон: ".$_POST['phonea'] ."\r\n" ."Задача клиента: ".$_POST['messagea'] ."\r\n";
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта andreyweb.com - Создание веб-сайтов';
		$mailheader = "From: andreyweb.com - сайты под ключ <Lukyanov-Andrey-V@yandex.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>