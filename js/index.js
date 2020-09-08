
$(function(){
	$("[data-toggle='tooltip']").tooltip();
	$('[data-toggle="popover"]').popover();
	$('.carousel').carousel({
	  interval : 1200
	});



	$('#contacto').on('show.bs.modal', function (e) {
  // do something...
	  	console.log(" El mensaje con: show.bs.modal");
	  	$('#reservarBtn').removeClass('btn-outline-success');
	  	$('#reservarBtn').addClass('btn-default ');
	  	$('#reservarBtn').prop('disabled',true);

	});


	$('#contacto').on('shown.bs.modal', function (e) {
  // do something...
	 	 console.log(" El mensaje con: shown.bs.modal");
	});

	$('#contacto').on('hidden.bs.modal', function (e) {
  // do something...
		console.log(" El mensaje con: hidden.bs.modal");
		$('#reservarBtn').addClass('btn-success');
		$('#reservarBtn').prop('disabled',false);
	});
	$('#contacto').on('hide.bs.modal', function (e) {
  // do something...
		console.log(" El mensaje con: hiden.bs.modal");
	})

});