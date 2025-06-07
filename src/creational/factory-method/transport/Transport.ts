import IVehicle from './vehicles/interfaces/IVehicle';

export default abstract class Transport {
  startTransport(): boolean {
    const vehicle = this.createTransport('Cargo for transport');
    return vehicle.startRoute();
  }

  protected abstract createTransport(cargo: string): IVehicle;
}
