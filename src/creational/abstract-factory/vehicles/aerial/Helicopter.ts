import IAircraft from './interfaces/IAircraft';

export default class Helicopter implements IAircraft {
  private cargo: string;

  constructor(cargo: string) {
    this.cargo = cargo;
  }

  startRoute(): boolean {
    this.checkWind();

    console.log(`Starting route with cargo: ${this.getCargo()}`);
    return true;
  }

  getCargo(): string {
    return this.cargo;
  }

  checkWind(): boolean {
    console.log('Checking wind conditions for helicopter.');
    return true; // Assume wind conditions are fine for simplicity
  }
}
