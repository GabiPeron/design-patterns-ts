import IPlatform from './IPlatform';

export default class YouTube implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log('YouTube platform initialized.');
  }

  configureRMTP(): boolean {
    this.authToken();

    console.log('Configuring RTMP for YouTube...');
    return true;
  }

  authToken(): boolean {
    console.log('Authenticating token for YouTube...');
    return true;
  }
}
