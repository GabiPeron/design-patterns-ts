import IPlatform from '../platforms/IPlatform';
import Live from './Live';

export default class AdvancedLive extends Live {
  constructor(platform: IPlatform) {
    super(platform);
    console.log('Advanced live stream initialized with additional features.');
  }

  subtitles(): boolean {
    console.log('Adding subtitles to the live stream...');
    return true;
  }

  chat(): boolean {
    console.log('Enabling live chat for the stream...');
    return true;
  }
}
