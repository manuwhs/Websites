
function get_countdown (target_date){
	
	// variables for time units
	var days, hours, minutes, seconds;
	
   var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = parseInt(seconds_left / 86400).toString();
	seconds_left = seconds_left % 86400;
	 
	hours = parseInt(seconds_left / 3600).toString();
	if (hours.length == 1){hours = "0"+ hours}
	seconds_left = seconds_left % 3600;
	  
	minutes = parseInt(seconds_left / 60).toString();
	if (minutes.length == 1){minutes = "0"+ minutes}
	
	seconds = parseInt(seconds_left % 60).toString();
	if (seconds.length == 1){seconds = "0"+ seconds}
	
	
	time_left = days + ":" + hours + ":" + minutes + ":" + seconds; 
	
	return time_left;
}

// get target date
target_date = new Date(2015, 06, 04).getTime(); // Jul 4, 2015

// get tag element
var countdown_n = document.getElementById("countdown_div");


countdown_n.innerHTML =  get_countdown(target_date);
setInterval(function(){

	countdown_n.innerHTML =  get_countdown(target_date);
  }, 1000);
