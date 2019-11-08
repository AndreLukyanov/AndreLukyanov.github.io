function sorting() {
	employees.sort((a,b) => {
		if(a.firstName < b.firstName)
		return -1;
		if(a.firstName > b.firstName)
		return 1;
	});
	$('.entry-table').html(template(employees.slice(0,10)));
}

function age() {
	employees.sort((a,b) => a.age - b.age);
	$('.entry-table').html(template(employees.slice(0,10)));
}


