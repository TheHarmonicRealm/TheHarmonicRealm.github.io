let playButton = document.getElementById("play-checkbox");

playButton.addEventListener("input", function(){handlePlayButton(this.checked)});

function handlePlayButton(play) {
    if (play) {
        console.log("starting");
        all_videos.forEach(element => {
            element.play();
        });
    }
    else {
        console.log("stopping");
        all_videos.forEach(element => {
            element.pause();
        });
    }
    videos_playing = !videos_playing;
}