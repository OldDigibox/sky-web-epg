// Sky+ Reloaded Favorites & Reminders
// Save favorite programs and set reminders

const FavoritesManager = {
  favorites: [],
  reminders: [],

  addToFavorites: function(program, channelId) {
    const favorite = {
      id: Math.random().toString(36).substr(2, 9),
      channelId: channelId,
      program: program,
      addedAt: new Date().toLocaleString(),
      reminder: false
    };
    
    // Check if already favorited
    if (!this.favorites.find(f => f.program.title === program.title)) {
      this.favorites.push(favorite);
      return favorite;
    }
    return null;
  },

  removeFromFavorites: function(favoriteId) {
    const index = this.favorites.findIndex(f => f.id === favoriteId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      return true;
    }
    return false;
  },

  getFavorites: function() {
    return this.favorites;
  },

  setReminder: function(favoriteId, minutesBefore = 5) {
    const favorite = this.favorites.find(f => f.id === favoriteId);
    if (favorite) {
      const reminder = {
        id: Math.random().toString(36).substr(2, 9),
        favoriteId: favoriteId,
        program: favorite.program,
        minutesBefore: minutesBefore,
        enabled: true,
        createdAt: new Date().toLocaleString()
      };
      this.reminders.push(reminder);
      favorite.reminder = true;
      return reminder;
    }
    return null;
  },

  removeReminder: function(reminderId) {
    const index = this.reminders.findIndex(r => r.id === reminderId);
    if (index > -1) {
      const favorite = this.favorites.find(f => f.id === this.reminders[index].favoriteId);
      if (favorite) favorite.reminder = false;
      this.reminders.splice(index, 1);
      return true;
    }
    return false;
  },

  getReminders: function() {
    return this.reminders.filter(r => r.enabled);
  },

  getActiveReminders: function() {
    const now = new Date();
    return this.getReminders().filter(r => {
      const remindTime = new Date(r.createdAt);
      remindTime.setMinutes(remindTime.getMinutes() + r.minutesBefore);
      return remindTime <= now;
    });
  }
};