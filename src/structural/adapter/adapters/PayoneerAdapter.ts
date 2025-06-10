import Payoneer from '../payoneer/Payoneer';
import IPayPalPayment from '../paypal/IPayPalPayment';

export default class PayoneerAdapter implements IPayPalPayment {
  constructor(private payoneer: Payoneer) {
    console.log('PayoneerAdapter initialized');
  }

  paypalPayment(): boolean {
    return this.payoneer.sendPayment();
  }

  paypalReceive(): boolean {
    return this.payoneer.receivePayment();
  }
}
