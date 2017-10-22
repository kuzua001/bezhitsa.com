export function initMap() {
	let styledMapType = new google.maps.StyledMapType(
		[
			{
				"featureType": "all",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#3e342b"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"gamma": 0.01
					},
					{
						"lightness": 20
					},
					{
						"color": "#b59f85"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"saturation": -31
					},
					{
						"lightness": -33
					},
					{
						"weight": "1.65"
					},
					{
						"gamma": 0.8
					},
					{
						"visibility": "on"
					},
					{
						"color": "#29231c"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"gamma": "1"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"lightness": 30
					},
					{
						"saturation": 30
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#6b4f37"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"gamma": "4.57"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#6b4f37"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"gamma": "4.18"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"gamma": "3.41"
					}
				]
			},
			{
				"featureType": "landscape.natural.landcover",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ff0000"
					}
				]
			},
			{
				"featureType": "landscape.natural.terrain",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ff0000"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"saturation": 20
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"lightness": 20
					},
					{
						"saturation": -20
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#3b2d1e"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"lightness": 10
					},
					{
						"saturation": -30
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#34281e"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"saturation": 25
					},
					{
						"lightness": 25
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"saturation": "55"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9b8964"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"saturation": "56"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"gamma": "1.31"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#473b2a"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#0b0704"
					},
					{
						"weight": "1.00"
					},
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"lightness": -20
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#9c9995"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#745737"
					}
				]
			}
		]
		,
		{name: 'Styled Map'});


	let map = new google.maps.Map(document.querySelector('.map-element .map'), {
		center: {lat: 53.315590, lng: 34.282076},
		zoom: 11,
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
				'styled_map']
		}
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');


	let bounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(-84.999999, -179.999999),
		new google.maps.LatLng(84.999999, 179.999999));

	let color = "#32210e";

	let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	let icons = {
		parking: {
			icon: iconBase + 'parking_lot_maps.png'
		},
		library: {
			icon: iconBase + 'library_maps.png'
		},
		info: {
			icon: iconBase + 'info-i_maps.png'
		}
	};

	let features = [
		{
			position: new google.maps.LatLng(53.315590, 34.282076),
			type: 'library'
		}
	];

	// Create markers.
	features.forEach(function(feature) {
		let marker = new google.maps.Marker({
			position: feature.position,
			icon: './img/icons/gmap.png',
			map: map
		});
	});
}