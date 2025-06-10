import MercadoPago from '../MercadoPago/MercadoPago';
import IPayPalPayment from '../paypal/IPayPalPayment';

export default class MercadoPagoAdapter implements IPayPalPayment {
  constructor(private mercadoPago: MercadoPago) {
    console.log('MercadoPagoAdapter initialized');
  }

  paypalPayment(): boolean {
    return this.mercadoPago.enviarPagamento();
  }

  paypalReceive(): boolean {
    return this.mercadoPago.receberPagamento();
  }
}
