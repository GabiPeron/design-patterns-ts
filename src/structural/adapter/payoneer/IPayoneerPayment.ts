export default interface IPayoneerPayment {
  sendPayment(): boolean;
  receivePayment(): boolean;
}
