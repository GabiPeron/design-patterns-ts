import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
  private cargo: string;

  constructor(cargo: string) {
    this.cargo = cargo;
  }

  startRoute(): boolean {
    console.log(`Motorcycle is Starting the route with cargo: ${this.getCargo()}`);
    return true;
  }

  getCargo(): string {
    return this.cargo;
  }
}