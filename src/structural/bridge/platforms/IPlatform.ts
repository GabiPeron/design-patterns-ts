export default interface IPlatform {
  configureRMTP(): boolean;
  authToken(): boolean;
}
