let player; // YouTube Player
let currentPlay = 0;  // 目前播到第幾首歌

// YouTube API Ready
// YouTube載入framework後，自動會呼叫
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoID: playList[currentPlay],
        playerVars: {
            autoplay: 0,
            controls: 0,
            start: playTime[currentPlay][0],
            end: playTime[currentPlay][1],
            iv_load_policy: 3 // video annotations not be shown by default
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });

}

// YouTube Player Ready
function onPlayerReady(event) {
    $("#playButton").on("click", function () {
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

// Player State Change
function onPlayerStateChange(event) {
    // console.log(event);
    if (Math.floor(player.getCurrentTime()) == playTime[currentPlay][1]) {
        if (currentPlay < playList.length - 1) {
            // Go Next
            currentPlay++;
            player.loadVideoById({
                videoID: playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"
            });

        } else {
            // Stop & Load the first song
            currentPlay = 0;
            // cue只是載進來，沒有要播
            player.cueVideoByID({
                videoID: playList[currentPlay][0],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"
            });
        }
    }
    $("h2").text(player.getVideoData().title);

}