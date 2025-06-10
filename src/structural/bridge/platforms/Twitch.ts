import IPlatform from './IPlatform';

export default class Twitch implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log('Twitch platform initialized.');
  }

  configureRMTP(): boolean {
    this.authToken();

    console.log('Configuring RTMP for Twitch...');
    return true;
  }

  authToken(): boolean {
    console.log('Authenticating token for Twitch...');
    return true;
  }
}
