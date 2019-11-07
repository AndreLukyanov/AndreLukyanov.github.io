var source = $('#entry-template').html();
var template = Handlebars.compile(source);

$('.entry-table').html(template(employees.slice(0,10)));


// var servises = (function (pages) {

// 	var size = 10;

// 	function getData() {
// 		return {
// 			function() {
// 				employees.slice(pages * size + (pages + 1));
// 				console.log(employees);
// 			}
// 		}
// 	}
// 	return {
// 		method: function () {
// 			getData();
// 		}
// 	};
// })();
// servises.method();



function firstClick() {
	$('.entry-table').html(template(employees.slice(0,10)));
}

function secondClick() {
	$('.entry-table').html(template(employees.slice(10,20)));
}

function threeClick() {
	$('.entry-table').html(template(employees.slice(20,30)));
}



