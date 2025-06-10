export default interface IMercadoPagoPayment {
  enviarPagamento(): boolean;
  receberPagamento(): boolean;
}