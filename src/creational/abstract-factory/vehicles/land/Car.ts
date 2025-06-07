import ILandVehicle from './interfaces/ILandVehicle';

export default class Car implements ILandVehicle {
  private cargo: string;

  constructor(cargo: string) {
    this.cargo = cargo;
  }

  startRoute(): boolean {
    console.log(`Car is Starting the route with cargo: ${this.getCargo()}`);
    return true;
  }

  getCargo(): string {
    return this.cargo;
  }
}
