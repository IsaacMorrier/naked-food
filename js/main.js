$(function() {
  $window = $('.window');
  $sheet = $('.sheet');
	
	function toggleOpen(e) {
		e.toggleClass('open');
	}
	
	$sheet.click(function() {
  	$( this ).toggleClass( "open" );
	});	
	
});