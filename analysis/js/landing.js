var pageNumber = 1;
var pageSize = 5;
function landing() {
	$('.entry-table').append(template(service.getPage(pageNumber, pageSize)));	
	pageNumber++;	
}