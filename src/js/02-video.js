import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  let currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
