var Gps = function() {
	
	this.initialize = function() {
		this.el = $('<a/>');
		this.el.on('click','.gps-loc', this.addLocation);
	};
	
	this.addLocation = function(event) {
		event.preventDefault();
		console.log('get location');
		navigator.geolocation.getCurrentPosition(
			function(position) {
				$('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
			},
			function() {
				alert('Error getting location');
			});
			return false;
	};
	this.initialize();
}