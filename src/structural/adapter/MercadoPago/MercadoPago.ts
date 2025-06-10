import Token from '../utils/Token';
import IMercadoPagoPayment from './IMercadoPagoPayment';

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token;

  constructor() {
    this.token = this.authToken();
  }

  authToken(): Token {
    return new Token();
  }

  enviarPagamento(): boolean {
    console.log(`MercadoPago payment made with token: ${this.token}`);
    return true;
  }

  receberPagamento(): boolean {
    console.log(`MercadoPago payment received with token: ${this.token}`);
    return true;
  }
}
