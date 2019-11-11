var source = $('#entry-template').html();
var template = Handlebars.compile(source);

$('.entry-table').html(template(employees.slice(0,10)));


// var service = (function() {
// 	const size = 10;

// 	function getData(page) {
// 		return employees.splice(page * size, (page - 1) * size);
// 	}
// 	return {getData}
// }());

// service = employees;

// $('.entry-table').html(template(service.slice(0,10)));

// function click(page) {
// 	$('.entry-table').html(template(service.getData(page)));
// 	console.log(service);
// }



function firstClick() {
	$('.entry-table').html(template(employees.slice(0,10)));
}

function secondClick() {
	$('.entry-table').html(template(employees.slice(10,20)));
}

function threeClick() {
	$('.entry-table').html(template(employees.slice(20,30)));
}





