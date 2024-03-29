const playlist = [{
    name: 'earlyMorning',
    times: [0, 1, 2, 3, 4, 5],
    songs: ["https://stream.zeno.fm/et8ras3bf2zuv"]
},
{
    name: 'morning',
    times: [6, 7, 8, 9, 10, 11],
    songs: ["https://stream.zeno.fm/et8ras3bf2zuv"]
},
{
    name: 'primetime',
    times: [20, 21],
    songs: ["https://stream.zeno.fm/et8ras3bf2zuv"]
},
{
    name: 'daytime',
    times: [12, 13, 14, 15, 16, 17],
    songs: ["https://stream.zeno.fm/et8ras3bf2zuv"]
},
{
    name: 'sunset',
    times: [18, 19],
    songs: ["https://stream.zeno.fm/et8ras3bf2zuv"],
},
{
    name: 'nightclub',
    times: [22, 23],
    songs: ["https://stream.zeno.fm/et8ras3bf2zuv"]
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
