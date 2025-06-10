import Token from '../utils/Token';
import IPayoneerPayment from './IPayoneerPayment';

export default class Payoneer implements IPayoneerPayment {
  private token: Token;

  constructor() {
    this.token = this.authToken();
  }

  authToken(): Token {
    return new Token();
  }

  sendPayment(): boolean {
    console.log(`Payoneer payment made with token: ${this.token}`);
    return true;
  }

  receivePayment(): boolean {
    console.log(`Payoneer payment received with token: ${this.token}`);
    return true;
  }
}
