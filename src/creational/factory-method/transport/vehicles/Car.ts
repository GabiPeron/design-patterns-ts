import IVehicle from './interfaces/IVehicle';

export default class Car implements IVehicle {
  private cargo: string;

  constructor(cargo: string) {
    this.cargo = cargo;
  }

  startRoute(): boolean {
    this.getCargo();
    console.log('Car is starting the route.');
    return true;
  }

  getCargo(): string {
    console.log(`Cargo in the car: ${this.cargo}`);
    return this.cargo;
  }
}
