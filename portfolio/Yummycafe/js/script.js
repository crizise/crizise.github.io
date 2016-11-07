
$(function (){

	//********************START******ingridents***show**************//need to re design
	var slow = "'slow', 'swing'";
	var fast = "'fast', 'swing'";
	var orange = "'background-color', '#FFA726'";
	$('.ingredients').click(function() {
		$('#cliker').css('background-color', '#FFA726');
		console.log('sda')
	});

	$('#clickerMeat').bind('click', function() {

		$('.ingredients-meat').toggle(slow, function() {
			$('.clicker-meat').css('background-color', 'red');
		});

		$('.ingredients-bun').hide(fast);
		$('.ingredients-salad').hide(fast);
		$('.clicker-bun').css('background-color', '#FFA726');
		$('.clicker-salad').css('background-color', '#FFA726');
		
	});
	$('#clickerBun').bind('click', function() {
		$('.ingredients-bun').toggle(slow, function() {
			$('.clicker-bun').css('background-color', 'red');
		});
		$('.ingredients-salad').hide(fast);
		$('.ingredients-meat').hide(fast);
		$('.clicker-meat').css('background-color', '#FFA726');
		$('.clicker-salad').css('background-color', '#FFA726');
	});
	$('#clickerSalad').bind('click', function() {
		$('.ingredients-salad').toggle(slow, function() {
			$('.clicker-salad').css('background-color', 'red');
		});
		$('.ingredients-bun').hide(fast);
		$('.ingredients-meat').hide(fast);
		$('.clicker-meat').css('background-color', '#FFA726');
		$('.clicker-bun').css('background-color', '#FFA726');
	});
	//********************END******ingridents***show**************
	//********************STRART****script****collapse the navbar menu when he is blur********************	
	$("#navbarToogle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
			console.log('121212')
			}	
		});
		$("#navbarToogle").click(function (event) {
		$(event.target).focus();
		});
	//********************END****script****collapse the navbar when  hwe is blur********************	
	//********************START****script****burger-carusel********************
	$('.carusel-burger .item').each( function() {
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		if (next.next().length>0) {
		    next.next().children(':first-child').clone().appendTo($(this));
		  }
		  else {
		  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		  }
		});
	//********************END****script****burger-carusel********************  
});
//**********************Start*****maintance****with****map************************************
function initMap() {
	//customizing the map's colors
	var customMapType = new google.maps.StyledMapType([
		{
			stylers: [
				{hue: '#5D4037'},
				{visibility: 'simplified'},
				{gamma: 0.5},
				{weight: 0.5}
			]
		},
		{
			elementType: 'labels',
			stylers: [{visibility: 'on'}]
		},
		{
			featureType: 'water',
			stylers: [{color: '#60CDA7'}]
		}
	], {
		name: 'Custom Style'
		});
	var customMapTypeId = 'custom_style';

	var centerLatLng = {lat: 36.847, lng: -76.297};
	var markerLatLng = {lat: 36.846, lng: -76.28664};

	
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: centerLatLng,
		disableDefaultUI: true,//remove UI
		scrollwheel: false,// temporary fix
		mapTypeControlOptions: {
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
		}
	});
	
	//add marker, need more in future
	var image = 'img/marker.png';
	var marker = new google.maps.Marker({
		position: markerLatLng,
		map: map,
		icon: image
	});
	//setup customized map
	map.mapTypes.set(customMapTypeId, customMapType);
	map.setMapTypeId(customMapTypeId);
};
//**********************END*****maintance****with****map************************************