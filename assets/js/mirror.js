// Make a new API call and re-draw the weather results when the db changes
db.ref().on('value', function(snap) {

	getWeather(snap.val().location);

    if(snap.val().digitalClockStyle === "military"){
    	show24HourTime();
    }

})

document.addEventListener("DOMContentLoaded", function() {
	getQuotes();
});


//Fetches a new quote every 60 seconds
function getQuotes(){
	setInterval(getQuote, 60000);
	getQuote();
}