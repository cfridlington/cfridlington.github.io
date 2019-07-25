// JavaScript Document

var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 1500, 
    // get page height from video duration
    setHeight = document.getElementById('set-height');
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

	// dynamically set the page height according to video length
	vid.addEventListener('loadedmetadata', function() {
  		setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
	});
	
	//Annotations
	
	annotation1 = document.getElementById('annotation1');
	annotation2 = document.getElementById('annotation2');
	annotation3 = document.getElementById('annotation3');
	annotation4 = document.getElementById('annotation4');
	annotation5 = document.getElementById('annotation5');
	
	heightOfVideo = Math.floor(vid.duration) * playbackConst;
	
	//Time during which you want the annotation in the video
	timeOfAnnotation1 = 3;
	timeOfAnnotation2 = 4;
	timeOfAnnotation3 = 6;
	timeOfAnnotation4 = 7;
	timeOfAnnotation5 = 10;
	
	//Convert Annotation time to positioning height
	annotation1.style.position = "absolute";
	annotation2.style.position = "absolute";
	annotation3.style.position = "absolute";
	annotation4.style.position = "absolute";
	annotation5.style.position = "absolute";
	
	annotation1.style.top = timeOfAnnotation1 * playbackConst + "px";
	annotation2.style.top = timeOfAnnotation2 * playbackConst + "px";
	annotation3.style.top = timeOfAnnotation3 * playbackConst + "px";
	annotation4.style.top = timeOfAnnotation4 * playbackConst + "px";
	annotation5.style.top = timeOfAnnotation5 * playbackConst + "px";
	
	
	// Use requestAnimationFrame for smooth playback
	function scrollPlay(){  
  		var frameNumber  = window.pageYOffset/(playbackConst * 24);
  		vid.currentTime  = frameNumber * 24;
		console.log(frameNumber);
  		window.requestAnimationFrame(scrollPlay);
		document.querySelector("#v0").autoplay = "false"
	}

	window.requestAnimationFrame(scrollPlay);

//Loading Icon

var loadingIndicator = document.getElementById("loading-indicator");

vid.addEventListener('waiting', function() {
	loadingIndicator.style.display = "block";
	playPauseButton.style.display = "none";
});

vid.addEventListener('stalled', function() {
	loadingIndicator.style.display = "block";
	playPauseButton.style.display = "none";
});

vid.addEventListener('canplay', function() {
	loadingIndicator.style.display = "none";
	playPauseButton.style.display = "block";
});
