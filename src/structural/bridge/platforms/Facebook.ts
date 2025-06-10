import IPlatform from './IPlatform';

export default class Facebook implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log('Facebook platform initialized.');
  }

  configureRMTP(): boolean {
    this.authToken();
    console.log('Configuring RTMP for Facebook...');
    return true;
  }

  authToken(): boolean {
    console.log('Authenticating token for Facebook...');
    return true;
  }
}
