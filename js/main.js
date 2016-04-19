$(document).ready(function() {

	// $('#bering').click(check('#bering'));
	// $('#bering').click({param: '#bering'}, check);
	// $('#bering').click(bering);
	$('#purchase').click(buy);
	$('#move').click(movement);
	$('.space').click(space);
	//$('#usa_button').click();
	 function space () {
	 	// alert("We've clicked on a space");
	 	var id = $(this).attr('id');
	 	// alert("We've clicked on this space "+ id);
	 	if(id === 'bering') {
	 		//Resources none
	 		//units none

	 	} else if (id ==='westUS') {
	 		//Resource 70 credits
	 		//units 
	 		//6 Infantry
	 		//5 Marines
	 		//2 Artillery
	 		//1 SAM
	 		//3 Armor
	 		//3 M-60
	 		//2 C-130
	 		//4 Helicopters
	 		$('#data').empty();
	 		var info = "<li><p>Resources: 70</p></li>";
	 		$('#screen').append(info);
	 		var info1 = "<li>Infantry: 6</li>";
	 		var info2 = "<li>Marine: 5</li>";
	 		var info3 = "<li>Artillery: 2</li>";
	 		var info4 = "<li>Armor: 3</li>";
	 		$('#screen').append(info1);
	 		$('#screen').append(info2);
	 		$('#screen').append(info3);
	 		$('#screen').append(info4);
	 	} else if(id === 'eastUS') {
	 		var info = "<li><p>Resources: 35</p></li>";
	 		var info1 = "<li>Infantry: 4</li>";
	 		var info2 = "<li>SAM: 1</li>"
	 		var info3 = "<li>Artillery: 1</li>";
	 		var info4 = "<li>Armor: 2</li>";
	 		$('#screen').append(info);
	 		$('#screen').append(info1);
	 		$('#screen').append(info2);
	 		$('#screen').append(info3);
	 		$('#screen').append(info4);
	 	}

	 }
	 var unit;
	 function movement() {
	 	$('#data li').click(moving);

	 }

	 function moving() {
	 	unit= $(this).attr('id');
	 	$('.space').click(receiver);
	 }

	 function receiver() {
	 	var going = $(this).attr('id');

	 }
	 //
	 //
	 //
	// function bering() {
	// 	alert("we're in bering");
	// }

	function buy() {
		alert("hey");
		var Intro = "<p>Buy your units here at the start of your turn. </p>";
	}
	$('#sz1').click(blah);
	function blah(event) {
		event.preventDefault();
		alert("We're here!");
	}

	// var territory;
	// function check(param) {
	// 	territory = param;
	// 	alert("This is the value of territory "+territory);

	// }

});