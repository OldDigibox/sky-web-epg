const playlist = [{
    name: 'earlyMorning',
    times: [0, 1, 2, 3, 4, 5, 6],
    songs: ["https://node-26.zeno.fm/et8ras3bf2zuv?rj-ttl=5&rj-tok=AAABcuJjwFcADVCYC_XnxUj6IA"]
},
    {
        name: 'morning',
        times: [6, 7, 8, 9],
        songs: ["https://node-32.zeno.fm/7rgndyacf2zuv?rj-ttl=5&rj-tok=AAABcuJkNYQAehy2sZr1k3D73w"]
},
{
    name: 'primetime',
    times: [19, 20],
    songs: ["https://node-33.zeno.fm/yxauxfbcf2zuv?rj-ttl=5&rj-tok=AAABcuJiMWIAaM2KMdKWUwNzzw"]
},
{
    name: 'daytime',
    times: [11, 12, 13, 14, 15, 16, 17, 18],
    songs: ["https://node-09.zeno.fm/bwens44bf2zuv?rj-ttl=5&rj-tok=AAABcuJi_VMA-MzzQNQAmKeu2A"]
},
{
    name: 'nightclub',
    times: [21, 22, 23],
    songs: ["https://node-35.zeno.fm/vq7vtswbf2zuv?rj-ttl=5&rj-tok=AAABcuJihfkAcwCdl8D2eq2_fw"]
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
