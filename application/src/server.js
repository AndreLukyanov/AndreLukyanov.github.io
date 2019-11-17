var service = (function () {
	const size = 10;

	function getData(page) {
		return employees.slice(page * size, (page + 1) * size);
	}

	function getPage(page, pageSize) {
		return employees.slice(page * pageSize, (page + 1) * pageSize);
	}

	return { getData, getPage }
}());