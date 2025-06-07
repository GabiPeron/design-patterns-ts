import IVehicle from './interfaces/IVehicle';

export default class Bicycle implements IVehicle {
  private cargo: string;

  constructor(cargo: string) {
    this.cargo = cargo;
  }
  startRoute(): boolean {
    this.getCargo();
    console.log('Bicycle is starting the route.');
    return true;
  }

  getCargo(): string {
    console.log(`Cargo in the bicycle: ${this.cargo}`);
    return this.cargo;
  }
}
