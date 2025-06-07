import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  private cargo: string;

  constructor(cargo: string) {
    this.cargo = cargo;
  }

  startRoute(): boolean {
    this.getCargo();
    console.log("Motorcycle is starting the route.");
    return true;
  }

  getCargo(): string {
    console.log(`Cargo in the motorcycle: ${this.cargo}`);
    return this.cargo;
  }
}