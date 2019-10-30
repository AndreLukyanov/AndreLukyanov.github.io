<template>

	<div class="java-script">
		<h2 class="java-script__title">JavaScript</h2>
	</div>

</template>

<script>
// Конструктор Object -------------------------------- //
let point = new Object();
point.x = 10;
point.y = 10;

document.write("Значение свойства x:" + point.x + "<br>" );
document.write("Значение свойства y:" + point.y + "<br>" );

// Конструктор Data -------------------------------- //
let data = new Date();
document.write("Текущая дата и время: " + data + "<br>");


// Конструктор Array -------------------------------- //
let a = new Array();

let b = Array(1, 2, 3, 4, 5, 6, 7);
document.write( b + "<br>");

let c = Array(10);
document.write( c + "<br>");


// Конструктор String -------------------------------- //
let str = "Строка"; // <-- переменная типа string

let objectStr = new String("Объект типа String"); // <-- объект типа String

function newString(string) {
	document.write( string + "</br>");
	document.write( "================================= </br>");
}

newString(str);
newString(objectStr);


//------------------------------------------------// добавлять новые свойства и методы можно только к объектам созданым через оператор new
objectStr.customProps = 123;
document.write(objectStr.customProps + "</br>");

//------------------------------------------------// добавить свойство в str невозможно
// str.customPropsTwo = 123;
// document.write(str.customPropsTwo + "</br>");
//------------------------------------------------//

export default {

	data() {
		return {

		};
	}
	
}
</script>

<style lang="less">

</style>