// Sky+ Reloaded UI Components
// Enhanced interactive UI for Sky+ experience

$(document).ready(function() {
  // Initialize Sky+ Reloaded features
  initializeSkyPlusUI();
});

function initializeSkyPlusUI() {
  setupRecordingsPanel();
  setupFavoritesPanel();
  setupRemindersPanel();
  setupStorageIndicator();
  setupChannelBrowser();
}

function setupRecordingsPanel() {
  // Add recordings panel to EPG
  const recordingsHTML = `
    <section class="menulisting" id="recordings-panel" style="display:none;">
      <div class="time">RECORDINGS</div>
      <div class="titles">MY SKY+ RECORDINGS</div>
      <div id="recordings-list"></div>
      <div class="back">
        <a>Press</a>
        <a style="background-color: yellow; color: black" onclick="toPage('recordings-panel', 'main')">BACK UP</a>
        <a>to return</a>
      </div>
      <div class="tvlinks">
        <div class="green"></div> <a onclick="refreshRecordingsList()">Refresh</a>
      </div>
    </section>
  `;
  $('main').append(recordingsHTML);
}

function setupFavoritesPanel() {
  const favoritesHTML = `
    <section class="menulisting" id="favorites-panel" style="display:none;">
      <div class="time">FAVORITES</div>
      <div class="titles">FAVORITE PROGRAMS</div>
      <div id="favorites-list"></div>
      <div class="back">
        <a>Press</a>
        <a style="background-color: yellow; color: black" onclick="toPage('favorites-panel', 'main')">BACK UP</a>
        <a>to return</a>
      </div>
      <div class="tvlinks">
        <div class="green"></div> <a onclick="refreshFavoritesList()">Refresh</a>
      </div>
    </section>
  `;
  $('main').append(favoritesHTML);
}

function setupRemindersPanel() {
  const remindersHTML = `
    <section class="menulisting" id="reminders-panel" style="display:none;">
      <div class="time">REMINDERS</div>
      <div class="titles">PROGRAM REMINDERS</div>
      <div id="reminders-list"></div>
      <div class="back">
        <a>Press</a>
        <a style="background-color: yellow; color: black" onclick="toPage('reminders-panel', 'main')">BACK UP</a>
        <a>to return</a>
      </div>
      <div class="tvlinks">
        <div class="green"></div> <a onclick="checkReminders()">Check</a>
      </div>
    </section>
  `;
  $('main').append(remindersHTML);
}

function setupStorageIndicator() {
  const storageHTML = `
    <div id="storage-indicator" style="position: absolute; bottom: 10px; right: 20px; color: #fec200; font-size: 12px;">
      <div id="storage-text">Storage: Calculating...</div>
      <div id="storage-bar" style="width: 150px; height: 8px; background: #001a8f; margin-top: 4px; border-radius: 4px;">
        <div id="storage-fill" style="height: 100%; background: #FCDA25; border-radius: 4px; width: 0%;"></div>
      </div>
    </div>
  `;
  $('main').append(storageHTML);
  updateStorageIndicator();
}

function setupChannelBrowser() {
  // Add channel browser to main menu
  const browseHTML = `
    <li onclick="toPage('main', 'channel-browser')" style="margin-top: 10px;">
      <div class="num">*</div>
      SKY+ FEATURES
    </li>
  `;
  $('.menulisting#main').append(browseHTML);
}

function recordProgram(channelId, programIndex) {
  const program = EPGData.getChannelPrograms(channelId)[programIndex];
  if (program) {
    const recording = RecordingsManager.addRecording(program, channelId);
    showNotification(`Recording: ${program.title} (${program.duration} mins)`);
    refreshRecordingsList();
    updateStorageIndicator();
  }
}

function addToFavorites(channelId, programIndex) {
  const program = EPGData.getChannelPrograms(channelId)[programIndex];
  if (program) {
    const favorite = FavoritesManager.addToFavorites(program, channelId);
    if (favorite) {
      showNotification(`Added to Favorites: ${program.title}`);
    } else {
      showNotification(`${program.title} already in Favorites`);
    }
  }
}

function refreshRecordingsList() {
  const list = $('#recordings-list');
  list.empty();
  const recordings = RecordingsManager.getRecordings();
  
  if (recordings.length === 0) {
    list.append('<div class="guidelisting"><li class="nonum">No recordings</li></div>');
    return;
  }
  
  recordings.forEach((rec, idx) => {
    const channel = EPGData.getChannelById(rec.channelId);
    const watchedClass = rec.watched ? 'watched' : '';
    const html = `
      <div class="guidelisting ${watchedClass}">
        <li class="nonum">${rec.program.title}</li>
        <li class="nonum">${channel.name} - ${rec.recordedAt}</li>
        <li class="nonum" onclick="RecordingsManager.deleteRecording('${rec.id}'); refreshRecordingsList();">DELETE</li>
      </div>
    `;
    list.append(html);
  });
}

function refreshFavoritesList() {
  const list = $('#favorites-list');
  list.empty();
  const favorites = FavoritesManager.getFavorites();
  
  if (favorites.length === 0) {
    list.append('<div class="guidelisting"><li class="nonum">No favorites</li></div>');
    return;
  }
  
  favorites.forEach((fav) => {
    const channel = EPGData.getChannelById(fav.channelId);
    const reminderStatus = fav.reminder ? '🔔' : '';
    const html = `
      <div class="guidelisting">
        <li class="nonum">${reminderStatus} ${fav.program.title}</li>
        <li class="nonum">${channel.name} @ ${fav.program.time}</li>
      </div>
    `;
    list.append(html);
  });
}

function checkReminders() {
  const active = FavoritesManager.getActiveReminders();
  if (active.length > 0) {
    showNotification(`${active.length} program(s) starting soon!`);
  } else {
    showNotification('No active reminders');
  }
}

function updateStorageIndicator() {
  const storage = RecordingsManager.getStorageInfo();
  $('#storage-text').text(`Storage: ${storage.percentUsed}% used`);
  $('#storage-fill').css('width', storage.percentUsed + '%');
}

function showNotification(message) {
  const notification = $(`
    <div style="position: fixed; top: 20px; right: 20px; background: #FCDA25; color: #000; padding: 15px 20px; border-radius: 4px; z-index: 1000; animation: fadeInOut 3s;">
      ${message}
    </div>
  `);
  $('body').append(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Add animation for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
  }
  .watched { opacity: 0.6; }
  #storage-indicator {
    background: rgba(0, 26, 143, 0.8);
    padding: 8px 12px;
    border-radius: 4px;
  }
`;
document.head.appendChild(style);