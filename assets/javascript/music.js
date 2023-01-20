var musicPaths = ["assets/others/music/background_music0.mp4",
    "assets/others/music/background_music1.mp4",
    "assets/others/music/background_music2.mp4",
    "assets/others/music/background_music3.mp4"];
var musicNames = [" $B - PARIS",
    " $B - FOR THE LAST TIME",
    " $b - 2ND HAND",
    " $b - 1000 Blunts"];

const musicIndex = app.randomNumber(0, musicPaths.length + 1);
var sound = new Howl({
    src: [musicPaths[musicIndex]],
    autoplay: true,
    loop: true,
    volume: 0.25
});

document.getElementById("songPlaying").innerText += musicNames[musicIndex];

var musicPlaying = true;
const button = document.getElementById("musicBtn");
button.addEventListener("click", function () {
    if (musicPlaying) {
        musicPlaying = false;
        sound.pause();
        this.src = "assets/others/images/icons8-mute-24.png"
    }
    else {
        musicPlaying = true;
        sound.play();
        this.src = "assets/others/images/icons8-voice-24.png"
    }
});