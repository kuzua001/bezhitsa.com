/**
 * Created by Иван on 09.05.2017.
 */
import {initMap} from './map.ts';
let $ = require ('jquery');

import {} from '@types/googlemaps';

$(document).ready(function() {
	if ($('.map-element .map').length) {
		let googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfNPNg4M7uT3PqOFIyGpHZx9f8jTqbKUg";

		document.body.appendChild(Object.assign(
			document.createElement('script'), {
				type: 'text/javascript',
				src: googleMapsUrl,
				onload: () => initMap()
			})
		);
	}

	/*$(document).on('change', '#select-room-class', function(e) {
		let $select = $(e.currentTarget);
		let val = $select.val();
		window.location.href = $('#select-room-class option[value=' + val + ']').data('href');
	})*/
});