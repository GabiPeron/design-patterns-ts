import Token from '../utils/Token';
import IPayPalPayment from './IPayPalPayment';

export default class PayPal implements IPayPalPayment {
  private token: Token;

  constructor() {
    this.token = this.authToken();
  }

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): boolean {
    console.log(`PayPal payment made with token: ${this.token}`);
    return true;
  }

  paypalReceive(): boolean {
    console.log(`PayPal payment received with token: ${this.token}`);
    return true;
  }
}
