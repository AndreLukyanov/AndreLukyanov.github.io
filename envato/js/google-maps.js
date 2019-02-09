function initMap()
{
	var element = document.getElementById('map')
	var options = {
		zoom: 17,
		center: {lat: 39.086852, lng: -77.483063}
	};

	var myMap = new google.maps.Map(element, options);

	var marker = new google.maps.Marker({
		position: {lat: 39.086219, lng: -77.484250},
		map: myMap
	});

	var InfoWindow = new google.maps.InfoWindow({
		content: '<h1>Leesburg</h1>'
	});


	marker.addListener('click', function(){
		InfoWindow.open(myMap, marker);
	})
}