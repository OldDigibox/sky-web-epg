// Sky+ Reloaded EPG Data Manager
// Live TV program schedule with dynamic updates

const EPGData = {
  channels: [
    { id: 101, name: 'BBC One', category: 'entertainment', url: 'https://www.bbc.co.uk/bbcone' },
    { id: 102, name: 'BBC Two', category: 'entertainment', url: 'https://www.bbc.co.uk/bbctwo' },
    { id: 103, name: 'ITV', category: 'entertainment', url: 'https://www.itv.com' },
    { id: 104, name: 'Channel 4', category: 'entertainment', url: 'https://www.channel4.com' },
    { id: 105, name: 'Channel 5', category: 'entertainment', url: 'https://www.channel5.com' },
    { id: 301, name: 'Sky Premiere', category: 'movies', url: 'https://www.sky.com' },
    { id: 302, name: 'Sky Drama', category: 'movies', url: 'https://www.sky.com' },
    { id: 303, name: 'Sky Action', category: 'movies', url: 'https://www.sky.com' },
    { id: 601, name: 'Cartoon Network', category: 'kids', url: 'https://www.cartoonnetwork.co.uk' },
    { id: 602, name: 'Nickelodeon', category: 'kids', url: 'https://www.nick.co.uk' }
  ],

  programs: [
    // BBC One
    { channelId: 101, title: 'EastEnders', time: '19:30', duration: 30, rating: 'PG', genre: 'Drama' },
    { channelId: 101, title: 'News at Ten', time: '22:00', duration: 30, rating: 'U', genre: 'News' },
    
    // BBC Two
    { channelId: 102, title: 'QI', time: '21:00', duration: 30, rating: 'U', genre: 'Comedy' },
    { channelId: 102, title: 'David Attenborough Documentary', time: '20:00', duration: 60, rating: 'U', genre: 'Documentary' },
    
    // ITV
    { channelId: 103, title: 'Coronation Street', time: '20:00', duration: 30, rating: 'PG', genre: 'Drama' },
    { channelId: 103, title: 'Emmerdale', time: '19:30', duration: 30, rating: 'PG', genre: 'Drama' },
    
    // Channel 4
    { channelId: 104, title: 'Gogglebox', time: '21:00', duration: 60, rating: 'U', genre: 'Reality' },
    { channelId: 104, title: 'The Great British Bake Off', time: '20:00', duration: 60, rating: 'U', genre: 'Reality' },
    
    // Sky Premiere
    { channelId: 301, title: 'Blade Runner 2049', time: '20:00', duration: 163, rating: '15', genre: 'Sci-Fi' },
    { channelId: 301, title: 'Dune: Part Two', time: '21:00', duration: 166, rating: '12', genre: 'Sci-Fi' },
    
    // Cartoon Network
    { channelId: 601, title: 'Adventure Time', time: '17:00', duration: 22, rating: 'U', genre: 'Animation' },
    { channelId: 601, title: 'The Amazing World of Gumball', time: '17:30', duration: 22, rating: 'U', genre: 'Animation' }
  ],

  getChannelPrograms: function(channelId, date = new Date()) {
    return this.programs.filter(p => p.channelId === channelId);
  },

  getChannelById: function(id) {
    return this.channels.find(c => c.id === id);
  },

  recordProgram: function(program, channelId) {
    const recording = {
      id: Math.random().toString(36).substr(2, 9),
      channelId: channelId,
      program: program,
      recordedAt: new Date(),
      duration: program.duration,
      status: 'recorded'
    };
    return recording;
  },

  getProgramsByGenre: function(genre) {
    return this.programs.filter(p => p.genre === genre);
  },

  getProgramsByRating: function(rating) {
    return this.programs.filter(p => p.rating === rating);
  }
};