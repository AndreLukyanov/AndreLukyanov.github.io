function landing() {
	var numToShow = 1;
	var table = document.getElementById("entry-table");
	for (var i = 0; i < numToShow && employees.length; i++) {
		// $('.entry-table').html(template(employees.slice(0,10)));
		$('.entry-table').html(template(employees.shift()));
		console.log(employees[i]);
	}
}