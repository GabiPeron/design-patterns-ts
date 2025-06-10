import IPlatform from '../platforms/IPlatform';
import ITransmission from './ITransmission';

export default class Live implements ITransmission {
  constructor(private platform: IPlatform) {}

  broadcast(): boolean {
    console.log('Broadcasting live stream...');
    return true;
  }

  result(): boolean {
    console.log('Retrieving live stream results...');
    return true;
  }
}
