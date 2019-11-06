var source = $('#entry-template').html();
var template = Handlebars.compile(source);

var currentPage = 10;
employees.emps.length = currentPage;

$('.entry-table').html(template(employees));
