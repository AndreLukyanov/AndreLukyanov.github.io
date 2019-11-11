function firstName() {
	employees.sort((a,b) => {
		if(a.firstName < b.firstName)
		return -1;
		if(a.firstName > b.firstName)
		return 1;
	});
	$('.entry-table').html(template(employees.slice(0,10)));
}

function lastName() {
	employees.sort((a,b) => {
		if(a.lastName < b.lastName)
		return -1;
		if(a.lastName > b.lastName)
		return 1;
	});
	$('.entry-table').html(template(employees.slice(0,10)));
}

function position() {
	employees.sort((a,b) => {
		if(a.position < b.position)
		return -1;
		if(a.position > b.position)
		return 1;
	});
	$('.entry-table').html(template(employees.slice(0,10)));
}

function age() {
	employees.sort((a,b) => a.age - b.age);
	$('.entry-table').html(template(employees.slice(0,10)));
}



