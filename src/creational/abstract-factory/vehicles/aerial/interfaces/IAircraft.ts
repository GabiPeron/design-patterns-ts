export default interface IAircraft {
  startRoute(): boolean;
  getCargo(): string;
  checkWind(): boolean;
}
