/* #PRODUIRE{fond=soundmanager.js}
   md5:6f9b46ad03e4f2d581e19caba52cdbe4 */
$(document).ready(function(){
	soundManager.setup({
	  url: 'https://odgproto.dnc.global/plugins/auto/sm/v2.1.9/swf/',
	  flashVersion: 9, // optional: shiny features (default = 8)
	  useFlashBlock: false, // optionally, enable when you're ready to dive in
	  debugMode: false,
	  /**
	   * read up on HTML5 audio support, if you're feeling adventurous.
	   * iPad/iPhone and devices without flash installed will always attempt to use it.
	   */
	  onready: function() {
		// Ready to use; soundManager.createSound() etc. can now be called.
		lastSound = {}; 
		sound_manager_init();
		onAjaxLoad(sound_manager_init);
	  }
	});
});

function sound_manager_init(){
	// console.log("init");
	// indexer les liens mp3 et ogg
	$("a[rel='enclosure'][href*='.mp3'],a[rel='enclosure'][href*='.ogg']").each(function(i){
		$(this).attr('data-soundId',i);
		$(this).on("click",function(e){
			return false ;
		});
	});
	
	// animation des boutons
	$(".play")
	.not('.active')
	.addClass('active') // marquer les player déjà traités (deuxieme appel ajax possible ensuite).
	.off('click')
	.click( function(e) {
		e.preventDefault();
		e.stopPropagation();

		$(".playing").removeClass("playing");
		
		var media_index = $(this).index();
		var parent_track =  $(this).parents(".audio").eq(0);
		
		var lienMp3 = parent_track.addClass("playing").find("a[rel='enclosure']") ;
		var media_url = lienMp3.attr('href');
		var media_id = "media_" + lienMp3.attr('data-soundId');
		
		// ajouter une class pour cibler les barres de progression de ce son
		parent_track.addClass(media_id);
		jouer_son(media_id, media_url);

		// deplacer le son
		$("." + media_id + ".progress_bar, ." + media_id + " .progress_bar").click(function(e){

			var thisSound = soundManager.getSoundById(media_id);

			// deplacer proportionellement le son
			var duree = thisSound.durationEstimate;
			var offset = $(this).offset();
			var x = (e.pageX - offset.left) / $(this).width() ;
			var temps = duree * x;
			
			// ne pas agir sur un bouton play ou stop
			if ($(e.target).parents(".stop").length > 0 || $(e.target).parents(".play").length > 0) {
				return;
			} else {
				$(this).find(".position").css({width: x * 100 + "%"});
				thisSound.setPosition(temps);
			}
		});


	});
	
	$(".stop")
	.off('click')
	.click(function() {
		var parent_track =  $(this).parents(".audio").eq(0);
		var lienMp3 = parent_track.find("a[rel='enclosure']");
		var media_id = "media_" + lienMp3.attr('data-soundId');
		var thisSound = soundManager.getSoundById(media_id);
		if (thisSound) {
			thisSound.stop();
		}
	});
}

function jouer_son(media_id, media_url){
	
	var soundURL = media_url;
	var soundId = media_id ;
	var thisSound = soundManager.getSoundById(soundId);
	
	// des infos sur le prochain son
	var next = parseInt(media_id.match('media_(.*)')[1],10) + 1 ;
	var next_sound_id = "media_" + next ;
	var next_sound_url = $("a[data-soundId='"+ next +"'][href*='.mp3']").attr('href');
	var playlist = $("a[data-soundId='"+ next +"'][href*='.mp3']").parents('*[data-playlist]').length;
	var next_sound_parent = $("a[data-soundId='"+ next +"'][href*='.mp3']").parents('.audio');
	
	if (thisSound) {
		
		// already exists
		if (thisSound == lastSound) {
			// and was playing (or paused)
			thisSound.togglePause();
		} else { // different sound
			if (lastSound) {
				//console.log("on arrete déjà chargé ", lastSound.sID)
				soundManager.stop(lastSound.sID);
				soundManager.unload(lastSound.sID);
				lastSound = thisSound;
			}
			// play
			thisSound.togglePause(); // start playing current
		}
	} else {
		// create sound
		thisSound = soundManager.createSound({
			id:soundId,
			url:soundURL,
			multiShot: false,
			autoPlay: false,
			autoLoad: true,
			onplay:function(){
				// console.log("soundmanager play");
				alterner_bouton_play_pause(soundId);
				if(typeof(myOnPlay) === "function"){
					myOnPlay();
				}
			},
			onpause:function(){
				// console.log("soundmanager pause");
				alterner_bouton_play_pause(soundId);
				if(typeof(myOnPause) === "function"){
					myOnPause();
				}
			},
			onresume:function(){
				// console.log("soundmanager resume");
				alterner_bouton_play_pause(soundId);
				if(typeof(myOnResume) === "function"){
					myOnResume();
				}
			},
			whileloading:function(){
				setTimeout(function(){ 
					$("." + this.sID).addClass("isloading");
				 }, 500);

				var timer = this.bytesLoaded / this.bytesTotal * 100 ;
				var minutes = Math.floor(this.durationEstimate / 1000 / 60) ;
				var secondes = Math.floor((this.durationEstimate - minutes*1000*60) /1000);
				
				if(secondes < 10) secondes = "0" + secondes ;
				if(minutes < 10) minutes = "0" + minutes ;
				
				$("." + this.sID +" .duration").html(minutes + ":" + secondes);
				$("." + this.sID +" .loading").css({width:Math.round(timer) +"%"});
			},
			whileplaying:function(){
				$("." + this.sID).removeClass("isloading");

				var minutes = Math.floor(this.position / 1000 / 60) ;
				var secondes = Math.floor((this.position - minutes*1000*60) /1000);
				if(secondes < 10) secondes = "0" + secondes ;
				if(minutes < 10) minutes = "0" + minutes ;
				
				var timer = this.position / this.durationEstimate * 100 ;
				$("." + this.sID +" .position").css({width:timer +"%"});
				$("." + this.sID +" .time").html(minutes + ":" + secondes + " /");
				if(typeof(myWhileplaying) === "function"){
                    // console.log("soundmanager while playing")
					myWhileplaying();
				}
			},
			onfinish:function(){
				// console.log("soundmanager finish");
				reinitialiser_player(soundId);
				if(typeof(myOnFinish) === "function"){
					myOnFinish();
				}
				if(next_sound_id && next_sound_url && playlist) {
					next_sound_parent.find(".play").trigger("click");
				} else {
					soundManager.stop(this.sID);
				}
			},
			onstop:function(){
				// console.log("soundmanager stop");
				
				reinitialiser_player(soundId);
				if(typeof(myOnStop) === "function"){
					myOnStop();
				}
			}
		});
		
		// stop last sound
		if (lastSound) {
			// console.log("on arrete " + lastSound.sID + "au chargement de " + soundId);
			soundManager.stop(lastSound.sID);
			soundManager.unload(lastSound.sID);
		}
		lastSound = thisSound ;
		
		thisSound.play();
	}
}

function reinitialiser_player(media_id) {
	// console.log(media_id)
	reinitialiser_bouton_play_pause(media_id);
	$("." + media_id + " .time").html("00:00 /");
	$("." + media_id + " .position").width(0);
	$("." + media_id + ".playing").removeClass("playing");
}

function alterner_bouton_play_pause(media_id){
	var that = $("." + media_id + " .play");
	if (that.attr("data-statut") === "play") {
		that
		.addClass("playing")
		.attr("data-statut", "pause")
		.attr("title", that.attr("data-pause"));
	} else {
		that
		.removeClass("playing")
		.attr("data-statut", "play")
		.attr("title", that.attr("data-lecture"));
	}
}

function reinitialiser_bouton_play_pause(media_id){
	var that = $("." + media_id + " .play") ;
	that
	.removeClass("playing")
	.attr("data-statut", "play")
	.attr("title", that.attr("data-lecture"));
}
