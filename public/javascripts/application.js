$(document).ready(function(){
	
	$("a#click").click(function(){
		showGallery();
		return false;
	});
	
	$("li.blog").click( function(  ){
		showGallery();
		return false;
	});
	
	
	
	
	$("img#keychain").click(function(){
		var options ={
			'padding' : 0,
			'href' : 'http://merapiDonation.com/images/pics/keychainDetail.jpg',
			'transitionIn' : 'none',
			'transitionOut' : 'none',
			'type' : 'image',
			'changeFade' : 0,
			'autoDimensions' : false 
		}
		
		$.fancybox(options);
		return false;
	});
	
	
	

});

function showGallery(){
	var arrayOfImages = [
	'http://merapiDonation.com/images/pics/2010_10_28_08_46_08_ternaka2.jpg',
	'http://merapiDonation.com/images/pics/anger_to_mother_nature.jpg',
	'http://merapiDonation.com/images/pics/broken_house.jpg',
	'http://merapiDonation.com/images/pics/burnt_animal.jpg',
	'http://merapiDonation.com/images/pics/burnt_man.jpg',
	'http://merapiDonation.com/images/pics/burnt_smoke.jpg',
	'http://merapiDonation.com/images/pics/burnt_village.jpg',
	'http://merapiDonation.com/images/pics/capt.08d37e51f7a24c5ba2615c387027f85a-08d37e51f7a24c5ba2615c387027f85a-0.jpg',
	'http://merapiDonation.com/images/pics/capt.50603ed658de487ab4d898eeb69d54fe-50603ed658de487ab4d898eeb69d54fe-0.jpg',
	'http://merapiDonation.com/images/pics/capt.cf7ffca16c614e33b5961140bf2f2bf2-cf7ffca16c614e33b5961140bf2f2bf2-0.jpg',
	'http://merapiDonation.com/images/pics/capt.dc550f3a1f0a4767b48f49d1f6091c15-dc550f3a1f0a4767b48f49d1f6091c15-0.jpg',
	'http://merapiDonation.com/images/pics/maridjan.jpg',
	'http://merapiDonation.com/images/pics/mass_cemetary.jpg',
	'http://merapiDonation.com/images/pics/merapiExplode.jpg',
	'http://merapiDonation.com/images/pics/r1705210428.jpg',
	'http://merapiDonation.com/images/pics/r2466768811.jpg',
	'http://merapiDonation.com/images/pics/r2680033282.jpg',
	'http://merapiDonation.com/images/pics/r2845506693.jpg',
	'http://merapiDonation.com/images/pics/r3319150271.jpg',
	'http://merapiDonation.com/images/pics/r3392707609.jpg',
	'http://merapiDonation.com/images/pics/r3656826755.jpg',
	'http://merapiDonation.com/images/pics/r4102683024.jpg',
	'http://merapiDonation.com/images/pics/r63074146.jpg',
	'http://merapiDonation.com/images/pics/run_for_your_life.jpg',
	'http://merapiDonation.com/images/pics/rupture.jpg',
	'http://merapiDonation.com/images/pics/saving_the_victims.jpg',
	'http://merapiDonation.com/images/pics/smokeyBike.jpg',
	'http://merapiDonation.com/images/pics/wor+Volcano.jpg'
	];
	
	
	var options ={
		'padding' : 0,
		'transitionIn' : 'none',
		'transitionOut' : 'none',
		'type' : 'image',
		'changeFade' : 0,
		'autoDimensions' : false 
	}
	
	
	$.fancybox(arrayOfImages,options);

	
}