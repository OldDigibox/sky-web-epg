const playlist = [{
    name: 'earlyMorning',
    times: [0, 1, 2, 3, 4, 5, 6],
    songs: ["media/early_morning.m3u"]
},
    {
        name: 'morning',
        times: [6, 7, 8, 9],
        songs: ["media/morning.m3u"]
},
{
    name: 'primetime',
    times: [19, 20],
    songs: ["media/primetime.m3u"]
},
{
    name: 'daytime',
    times: [11, 12, 13, 14, 15, 16, 17, 18],
    songs: ["media/daytime.m3u"]
},
{
    name: 'nightclub',
    times: [21, 22, 23],
    songs: ["media/nightclub.m3u"]
}
]

let nowPlaying = null;
const player = document.getElementById("player"); // Get Audio Element
player.autoplay = true;

player.addEventListener("ended", function () {
    player.currentTime = 0;
    console.log(`${selection} ended`);
    selectRandom();
});

function selectRandom() {
    // destructure object because all we want is the song array
    const { songs } = playlist.find(list => list.times.includes(new Date().getHours()));
    // remove the currently playing song, or nothing if null
    const filteredSongs = songs.filter(song => song != nowPlaying);
    // pick a random song out of the remaining songs
    const selection = filteredSongs[Math.floor(Math.random() * filteredSongs.length)]
    lastSong = selection; // Remember last song
    player.src = selection; // Tell HTML the location of the new Song
    console.log(`Now playing ${selection}`);
}

selectRandom(); // Select initial song
player.play; // Start song
