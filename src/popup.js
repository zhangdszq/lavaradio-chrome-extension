
(function(){
	'use strict';

	$(function(){
		getAudio(function(songs){
			play(songs);	
		});
	});


	function getAudio (next) {
		var url = 'http://www.lavaradio.com/api/play.playChannel.json';

		var data = {
			channel_id : 3
		}

		$.get(url, data, function(result) {
			console.log(result.data);
			next(result.data.songs);
		})
	}

	function play (songs) {
		// $("#audio").attr("src", song.audio_url);
		$("#player").css("background-image", "url(" + songs[0].pic_url + ")");

		chrome.extension.sendMessage({songs: songs}, function(response) {
    		console.log(response);
		});
	}

})();
