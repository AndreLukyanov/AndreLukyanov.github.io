var source = $('#entry-template').html();
var template = Handlebars.compile(source);
var sss = template(employees);

var table=document.getElementById("entry-table");

// var html  = template(employees);
// document.getElementById("entry-table").innerHTML=html;

var service = (function() {
	const size = 10;

	function getData(page) {
		return employees.slice(page * size, (page + 1) * size);
	}

	function getPage(page, pageSize) {
		return employees.slice(page * pageSize, (page + 1) * pageSize);
	}

	return {getData, getPage}
}());

//  $('.entry-table').html(template(service.getData(0)));
table.innerHTML = template(service.getData(0));

function loadPage(page) {
	$('.entry-table').html(template(service.getData(page)));
	console.log(service);
}



function firstClick() {
	$('.entry-table').html(template(employees.slice(0,10)));
}

function secondClick() {
	$('.entry-table').html(template(employees.slice(10,20)));
}

function threeClick() {
	$('.entry-table').html(template(employees.slice(20,30)));
}





