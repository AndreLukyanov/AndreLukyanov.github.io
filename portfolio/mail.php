<?php

 if($_POST["email"] != '' || $_POST["messages"] != '' ):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение с главной страницы";
	$formcontent = $message ."\r\n" ."E-mail: ".$_POST['email'] ."\r\n" ."Сообщение: ".$_POST['messages'] ."\r\n";
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

 if($_POST["names"] != '' || $_POST["emails"] != '' || $_POST["company"] != '' || $_POST["saits"] != '' || $_POST["typesetting"] != '' || $_POST["design"] != '' || $_POST["price"] != '' || $_POST["description"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Сообщение со страницы контакты: ".$_POST['message'] ."\r\n" ."Имя: ".$_POST['names'] ."\r\n" ."E-mail: ".$_POST['emails'] ."\r\n" ."Компания: ".$_POST['company'] ."\r\n" ."Клиенту нужно: ".$_POST['saits'] ."\r\n" ."Клиенту нужно: ".$_POST['typesetting'] ."\r\n" ."Клиенту нужно: ".$_POST['design'] ."\r\n" ."Выбранная цена: ".$_POST['price'] ."\r\n" ."Описание проекта: ".$_POST['description'] ."\r\n";
	$recipient = "Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта andreyweb.com - Создание веб-сайтов';
		$mailheader = "From: andreyweb.com - сайты под ключ <Lukyanov-Andrey-V@yandex.ru>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";

endif;

?>