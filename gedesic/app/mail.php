<?php
 if($_POST["name1"] != '' || $_POST["phone1"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name1'] ."\r\n" ."Телефон: ".$_POST['phone1'] ."\r\n";
	$recipient = "89268150215@mail.ru, evgeny.rostanec@gmail.com, Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта Геодезическиеработы.рф';
		$mailheader = "From: Геодезическиеработы.рф - <evgeny.rostanec@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>

<?php
 if($_POST["name2"] != '' || $_POST["phone2"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name2'] ."\r\n" ."Телефон: ".$_POST['phone2'] ."\r\n";
	$recipient = "89268150215@mail.ru, evgeny.rostanec@gmail.com, Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта Геодезическиеработы.рф';
		$mailheader = "From: Геодезическиеработы.рф - <evgeny.rostanec@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>

<?php
 if($_POST["name3"] != '' || $_POST["phone3"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name3'] ."\r\n" ."Телефон: ".$_POST['phone3'] ."\r\n";
	$recipient = "89268150215@mail.ru, evgeny.rostanec@gmail.com, Lukyanov-Andrey-V@yandex.ru";
		$subject = 'Заполнена контактная форма с сайта Геодезическиеработы.рф';
		$mailheader = "From: Геодезическиеработы.рф - <evgeny.rostanec@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>