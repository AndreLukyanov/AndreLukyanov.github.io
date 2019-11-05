var source = $('#entry-template').html();
var template = Handlebars.compile(source);
var employees = {
	'emps': [
		{
			id : 1,
			firstName: 'Андрей',
			lastName: 'Лукьянов',
			position: 'Инженер',
			age: '24'
		},
		{
			id : 2,
			firstName : 'Максим',
			lastName: 'Максимов',
			position: 'Инженер2',
			age: '25'
		},
		{
			id : 3,
			firstName : 'Олег',
			lastName: 'Климов',
			position: 'Инженер3',
			age: '26'
		},
		{
			id : 4,
			firstName : 'Татьяна',
			lastName: 'Климова',
			position: 'Инженер4',
			age: '20'
		},
		{
			id : 5,
			firstName : 'Ольга',
			lastName: 'Медведева',
			position: 'Инженер5',
			age: '22'
		},{
			id : 6,
			firstName : 'Владимир',
			lastName: 'Владимирович',
			position: 'Главный инженер',
			age: '65'
		},
		{
			id : 7,
			firstName : 'Света',
			lastName: 'Степанова',
			position: 'Инженер6',
			age: '30'
		},
		{
			id : 8,
			firstName : 'Дмитрий',
			lastName: 'Климов',
			position: 'Инженер7',
			age: '26'
		},
		{
			id : 9,
			firstName : 'Матильда',
			lastName: 'Матильдовна',
			position: 'Инженер S-класса',
			age: '99'
		}
	]
}
$('.entry-table').html(template(employees));