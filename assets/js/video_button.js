let playButton = document.getElementById("play-checkbox");

playButton.addEventListener("input", function(){handlePlayButton(this.checked)});

let all_videos = Array.from(document.getElementsByClassName("looping-video"));

all_videos.forEach(element => {
    element.addEventListener("click", function(){element.paused ? element.play() : element.pause()});
});

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