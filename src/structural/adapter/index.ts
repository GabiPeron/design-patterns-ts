import MercadoPagoAdapter from './adapters/MercadoPagoAdapter';
import PayoneerAdapter from './adapters/PayoneerAdapter';
import MercadoPago from './MercadoPago/MercadoPago';
import Payoneer from './payoneer/Payoneer';
import PayPal from './paypal/PayPal';

// const payment = new PayPal();
// const payment = new MercadoPagoAdapter(new MercadoPago());
const payment = new PayoneerAdapter(new Payoneer());

payment.paypalPayment();
payment.paypalReceive();
console.log('Payment processed successfully using PayPal adapter.');
