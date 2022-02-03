import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

const currentTime = JSON.parse(localStorage.getItem(localStorageKey));
//Set the current playback position in seconds.
if (currentTime) {
  player.setCurrentTime(currentTime);
}
//Get the current playback position in seconds.
player.on('timeupdate', throttle(timeSave, 800));
function timeSave() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(localStorageKey, JSON.stringify(seconds));
  });
}
