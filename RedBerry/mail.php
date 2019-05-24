<?php
 if($_POST["name"] != '' || $_POST["phone"] != '' || $_POST["email"] != '' || $_POST["company"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Имя: ".$_POST['name'] ."\r\n" ."Телефон: ".$_POST['phone'] ."\r\n" ."E-mail: ".$_POST['email'] ."\r\n" ."Компания: ".$_POST['company'] ."\r\n";
	$recipient = "redberrymanager.contact@gmail.com";
		$subject = 'Заполнена контактная форма с сайта redberry.com.ru - Сочетание профессиональных и креативных решений для вашего бизнеса';
		$mailheader = "From: redberry.com.ru - создание сайтов <redberrymanager.contact@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>

<?php
 if($_POST["price1"] != '' || $_POST["style"] != '' || $_POST["gamma"] != '' || $_POST["pack"] != '' || $_POST["product"] != '' || $_POST["contactTwo"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Выбранная цена, со строницы Упаковка: ".$_POST['price1'] ."\r\n" ."Стиль упаковки: ".$_POST['style'] ."\r\n" ."Цветовая гамма: ".$_POST['gamma'] ."\r\n" ."Роль упаковки: ".$_POST['pack'] ."\r\n" ."Тип вашего товара: ".$_POST['product'] ."\r\n" ."Контакт: ".$_POST['contactTwo'] ."\r\n";
	$recipient = "redberrymanager.contact@gmail.com";
		$subject = 'Заполнена контактная форма с сайта redberry.com.ru - Сочетание профессиональных и креативных решений для вашего бизнеса';
		$mailheader = "From: redberry.com.ru - создание сайтов <redberrymanager.contact@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>

<?php
 if($_POST["price2"] != '' || $_POST["logo"] != '' || $_POST["color"] != '' || $_POST["role"] != '' || $_POST["type"] != '' || $_POST["contactOne"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Выбранная цена, со строницы Логотип: ".$_POST['price2'] ."\r\n" ."Стиль логотипа: ".$_POST['logo'] ."\r\n" ."Цветовая гамма: ".$_POST['color'] ."\r\n" ."Роль логотипа: ".$_POST['role'] ."\r\n" ."Тип вашего логотипа: ".$_POST['type'] ."\r\n" ."Контакт: ".$_POST['type'] ."\r\n";
	$recipient = "redberrymanager.contact@gmail.com";
		$subject = 'Заполнена контактная форма с сайта redberry.com.ru - Сочетание профессиональных и креативных решений для вашего бизнеса';
		$mailheader = "From: redberry.com.ru - создание сайтов <redberrymanager.contact@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>

<?php
 if($_POST["price3"] != '' || $_POST["sait"] != '' || $_POST["typeSait"] != '' || $_POST["logoSait"] != '' || $_POST["audit"] != '' || $_POST["contact"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Выбранная цена, со строницы Лендинг пэйдж: ".$_POST['price3'] ."\r\n" ."Название сайта/компании: ".$_POST['sait'] ."\r\n" ."Тип сайта: ".$_POST['typeSait'] ."\r\n" ."Нужен ли логотип к сайту: ".$_POST['logoSait'] ."\r\n" ."Целевая аудитория сайта: ".$_POST['audit'] ."\r\n" ."Контакт: ".$_POST['contact'] ."\r\n";
	$recipient = "redberrymanager.contact@gmail.com";
		$subject = 'Заполнена контактная форма с сайта redberry.com.ru - Сочетание профессиональных и креативных решений для вашего бизнеса';
		$mailheader = "From: redberry.com.ru - создание сайтов <redberrymanager.contact@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>

<?php
 if($_POST["price4"] != '' || $_POST["saitName"] != '' || $_POST["typeSaitTwo"] != '' || $_POST["logoSaitTwo"] != '' || $_POST["auditTwo"] != '' || $_POST["contactTwo"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Выбранная цена, со строницы Интернет-магазин: ".$_POST['price4'] ."\r\n" ."Название сайта/компании: ".$_POST['saitName'] ."\r\n" ."Тип сайта: ".$_POST['typeSaitTwo'] ."\r\n" ."Нужен ли логотип к сайту: ".$_POST['logoSaitTwo'] ."\r\n" ."Целевая аудитория сайта: ".$_POST['auditTwo'] ."\r\n" ."Контакт: ".$_POST['contactTwo'] ."\r\n";
	$recipient = "redberrymanager.contact@gmail.com";
		$subject = 'Заполнена контактная форма с сайта redberry.com.ru - Сочетание профессиональных и креативных решений для вашего бизнеса';
		$mailheader = "From: redberry.com.ru - создание сайтов <redberrymanager.contact@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>

<?php
 if($_POST["price5"] != '' || $_POST["saitNameTwo"] != '' || $_POST["typeSaitThree"] != '' || $_POST["logoSaitThree"] != '' || $_POST["auditThree"] != '' || $_POST["contactThree"] != ''):
	$message = "От: Пользователя\nIP: ".$_SERVER['REMOTE_ADDR'];
	$formcontent="Сообщение";
	$formcontent = $message ."\r\n" ."Выбранная цена, со строницы Корпоративный сайт: ".$_POST['price5'] ."\r\n" ."Название сайта/компании: ".$_POST['saitNameTwo'] ."\r\n" ."Тип сайта: ".$_POST['typeSaitThree'] ."\r\n" ."Нужен ли логотип к сайту: ".$_POST['logoSaitThree'] ."\r\n" ."Целевая аудитория сайта: ".$_POST['auditThree'] ."\r\n" ."Контакт: ".$_POST['contactThree'] ."\r\n";
	$recipient = "redberrymanager.contact@gmail.com";
		$subject = 'Заполнена контактная форма с сайта redberry.com.ru - Сочетание профессиональных и креативных решений для вашего бизнеса';
		$mailheader = "From: redberry.com.ru - создание сайтов <redberrymanager.contact@gmail.com>\r\n".
	"MIME-Version: 1.0\r\n".
	"Content-type: text/plain; charset=utf-8\r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Ошибка!");
	echo "Спасибо!";
endif;
?>
