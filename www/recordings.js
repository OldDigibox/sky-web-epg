// Sky+ Reloaded Recordings Manager
// Manage recorded programs and playback

const RecordingsManager = {
  recordings: [],
  playbackHistory: [],

  addRecording: function(program, channelId) {
    const recording = {
      id: Math.random().toString(36).substr(2, 9),
      channelId: channelId,
      program: program,
      recordedAt: new Date().toLocaleString(),
      duration: program.duration,
      watched: false,
      remainingTime: program.duration,
      fileSize: `${(program.duration * 0.7).toFixed(0)} MB`
    };
    this.recordings.push(recording);
    return recording;
  },

  getRecordings: function() {
    return this.recordings.sort((a, b) => new Date(b.recordedAt) - new Date(a.recordedAt));
  },

  deleteRecording: function(recordingId) {
    const index = this.recordings.findIndex(r => r.id === recordingId);
    if (index > -1) {
      this.recordings.splice(index, 1);
      return true;
    }
    return false;
  },

  markAsWatched: function(recordingId) {
    const recording = this.recordings.find(r => r.id === recordingId);
    if (recording) {
      recording.watched = true;
      recording.remainingTime = 0;
      this.playbackHistory.push({
        recordingId: recordingId,
        watchedAt: new Date().toLocaleString()
      });
      return true;
    }
    return false;
  },

  getUnwatchedRecordings: function() {
    return this.recordings.filter(r => !r.watched);
  },

  getSortedByTitle: function() {
    return this.getRecordings().sort((a, b) => a.program.title.localeCompare(b.program.title));
  },

  getSortedByChannel: function() {
    return this.getRecordings().sort((a, b) => a.channelId - b.channelId);
  },

  getStorageInfo: function() {
    const usedMB = this.recordings.reduce((total, r) => total + parseInt(r.fileSize), 0);
    const totalMB = 320000; // 320GB typical Sky+ storage
    const percentUsed = (usedMB / totalMB * 100).toFixed(1);
    return {
      usedMB: usedMB,
      totalMB: totalMB,
      availableMB: totalMB - usedMB,
      percentUsed: percentUsed
    };
  }
};