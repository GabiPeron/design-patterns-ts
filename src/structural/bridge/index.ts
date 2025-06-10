import Facebook from './platforms/Facebook';
import IPlatform from './platforms/IPlatform';
import Twitch from './platforms/Twitch';
import YouTube from './platforms/YouTube';
import AdvancedLive from './transmissions/AdvancedLive';
import Live from './transmissions/Live';

function startLive(platform: IPlatform) {
  const live = new Live(platform);

  live.broadcast();
  live.result();
  console.log('Live stream started successfully.');
}

function startAdvancedLive(platform: IPlatform) {
  const advancedLive = new AdvancedLive(platform);

  advancedLive.broadcast();
  advancedLive.result();
  advancedLive.subtitles();
  advancedLive.chat();

  console.log('Advanced live stream started successfully.');
}

// startLive(new YouTube());
// startLive(new Twitch());
// startAdvancedLive(new YouTube());
// startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());