import ILandVehicle from './interfaces/ILandVehicle';

export default class Scooter implements ILandVehicle {
  private cargo: string;

  constructor(cargo: string) {
    this.cargo = cargo;
  }

  startRoute(): boolean {
    console.log(`Scooter is Starting the route with cargo: ${this.getCargo()}`);
    return true;
  }

  getCargo(): string {
    return this.cargo;
  }
}
