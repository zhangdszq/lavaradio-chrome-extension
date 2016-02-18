(function() {
	var songs;
	var audio = new Audio();

	chrome.extension.onMessage.addListener(function(req){
		songs = req.songs;
		playAudio();
	});

	function playAudio () {
	    var audio_url = songs[0].audio_url;
	    audio.src = audio_url;
		audio.play();
	}

	audio.addEventListener("ended", function() {
		
		if (songs && songs.length > 0) {
			songs.shift();
		}
        playAudio();
    }, false);
})();