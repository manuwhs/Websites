// prepare the form when the DOM is ready 

$(document).ready(function() {
	$("#gallery li img").hover(function(){
	if ($('#main-img')[0].src != $(this)[0].src.replace('thumb/', '')){
	
		$('#main-img').css('opacity',0);
		$('#main-img').attr('src',$(this).attr('src').replace('thumb/', ''));		
		$('#main-img').animate({
			opacity:'1.0'
				
		}); 	
	}
	});  
		
		

	
	
// Codigo de precarga para agilizar la visualizacion	
var imgSwap = [];
	 $("#gallery li img").each(function(){
		imgUrl = this.src.replace('thumb/', '');
		imgSwap.push(imgUrl);
	});
	$(imgSwap).preload();
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
