let all_videos = Array.from(document.getElementsByClassName("looping-video"));

all_videos.forEach(element => {
    element.addEventListener("click", function(){element.paused ? element.play() : element.pause()});
});