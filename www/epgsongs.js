const playlist = [{
    name: 'earlyMorning',
    times: [0, 1, 2, 3, 4, 5],
    songs:
        [
            "www/au/earlymorning/track1.mp3",
            "www/au/earlymorning/track2.mp3",
            "www/au/earlymorning/track3.mp3",
            "www/au/earlymorning/track4.mp3",
            "www/au/earlymorning/track5.mp3",
            "www/au/earlymorning/track6.mp3",
            "www/au/earlymorning/track7.mp3",
            "www/au/earlymorning/track8.mp3",
            "www/au/earlymorning/track9.mp3",
            "www/au/earlymorning/track10.mp3",
            "www/au/earlymorning/track11.mp3",
            "www/au/earlymorning/track12.mp3",
            "www/au/earlymorning/track13.mp3",
            "www/au/earlymorning/track14.mp3"
    ]
},
{
    name: 'morning',
    times: [6, 7, 8, 9, 10, 11],
    songs:
    [
            "www/au/morning/track1.mp3",
            "www/au/morning/track2.mp3",
            "www/au/morning/track3.mp3",
            "www/au/morning/track4.mp3",
            "www/au/morning/track5.mp3",
            "www/au/morning/track6.mp3",
            "www/au/morning/track7.mp3",
            "www/au/morning/track8.mp3",
            "www/au/morning/track9.mp3",
            "www/au/morning/track10.mp3",
            "www/au/morning/track11.mp3",
            "www/au/morning/track12.mp3",
            "www/au/morning/track13.mp3",
            "www/au/morning/track14.mp3",
            "www/au/morning/track15.mp3"
    ]
},
{
    name: 'primetime',
    times: [20, 21],
    songs:
        [
            "www/au/primetime/track1.mp3",
            "www/au/primetime/track2.mp3",
            "www/au/primetime/track3.mp3",
            "www/au/primetime/track4.mp3",
            "www/au/primetime/track5.mp3",
            "www/au/primetime/track6.mp3",
            "www/au/primetime/track7.mp3",
            "www/au/primetime/track8.mp3",
            "www/au/primetime/track9.mp3",
            "www/au/primetime/track10.mp3",
            "www/au/primetime/track11.mp3",
            "www/au/primetime/track12.mp3",
            "www/au/primetime/track13.mp3",
            "www/au/primetime/track14.mp3",
            "www/au/primetime/track15.mp3"

    ]
},
{
    name: 'daytime',
    times: [12, 13, 14, 15, 16, 17],
    songs:
        [
            "www/au/daytime/track1.mp3",
            "www/au/daytime/track2.mp3",
            "www/au/daytime/track3.mp3",
            "www/au/daytime/track4.mp3",
            "www/au/daytime/track5.mp3",
            "www/au/daytime/track6.mp3",
            "www/au/daytime/track7.mp3",
            "www/au/daytime/track8.mp3",
            "www/au/daytime/track9.mp3",
            "www/au/daytime/track10.mp3",
            "www/au/daytime/track11.mp3",
            "www/au/daytime/track12.mp3",
            "www/au/daytime/track13.mp3",
            "www/au/daytime/track14.mp3",
            "www/au/daytime/track15.mp3",
            "www/au/daytime/track16.mp3",
            "www/au/daytime/track17.mp3",
            "www/au/daytime/track18.mp3",
            "www/au/daytime/track19.mp3",
            "www/au/daytime/track20.mp3",
            "www/au/daytime/track21.mp3",
            "www/au/daytime/track22.mp3",
            "www/au/daytime/track23.mp3",
            "www/au/daytime/track24.mp3",
            "www/au/daytime/track25.mp3",
            "www/au/daytime/track26.mp3",
            "www/au/daytime/track27.mp3"
    ]
},
{
    name: 'sunset',
    times: [18, 19],
    songs:
        [
            "www/au/sunset/track1.mp3",
            "www/au/sunset/track2.mp3",
            "www/au/sunset/track3.mp3",
            "www/au/sunset/track4.mp3",
            "www/au/sunset/track5.mp3",
            "www/au/sunset/track6.mp3",
            "www/au/sunset/track7.mp3",
            "www/au/sunset/track8.mp3",
            "www/au/sunset/track9.mp3",
            "www/au/sunset/track10.mp3",
            "www/au/sunset/track11.mp3",
            "www/au/sunset/track12.mp3"
    ]
},
{
    name: 'nightclub',
    times: [22, 23],
    songs:
        [
            "www/au/nightclub/track1.mp3",
            "www/au/nightclub/track2.mp3",
            "www/au/nightclub/track3.mp3",
            "www/au/nightclub/track4.mp3",
            "www/au/nightclub/track5.mp3",
            "www/au/nightclub/track6.mp3",
            "www/au/nightclub/track7.mp3",
            "www/au/nightclub/track8.mp3",
            "www/au/nightclub/track9.mp3",
            "www/au/nightclub/track10.mp3",
            "www/au/nightclub/track11.mp3",
            "www/au/nightclub/track12.mp3",
            "www/au/nightclub/track13.mp3",
            "www/au/nightclub/track14.mp3"
    ]
}
]

let nowPlaying = null;
const player = document.getElementById("player"); // Get Audio Element
player.autoplay = true;
player.volume = 0.2;

player.addEventListener("ended", function () {
    player.currentTime = 0; // Reset playback position to the beginning
    selectRandom(); // Select a new song
});

function selectRandom() {
    // Find the playlist entry for the current time
    const currentHour = new Date().getHours();
    const currentPlaylist = playlist.find(list => list.times.includes(currentHour));

    if (currentPlaylist) {
        // Filter out the currently playing song (if any)
        const filteredSongs = currentPlaylist.songs.filter(song => song !== nowPlaying);

        if (filteredSongs.length > 0) {
            // Pick a random song from the remaining songs
            const selection = filteredSongs[Math.floor(Math.random() * filteredSongs.length)];
            nowPlaying = selection; // Remember the last song
            player.src = selection; // Set the new song's location
            console.log(`Now playing ${selection}`);
        }
    }
}

selectRandom(); // Select initial song
player.play; // Start song
