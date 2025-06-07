import IAircraft from '../aerial/interfaces/IAircraft';
import ITransportFactory from '../factories/interfaces/ITransportFactory';
import ILandVehicle from '../land/interfaces/ILandVehicle';

export default class Client {
  private vehicle: ILandVehicle;
  private aicraft: IAircraft;

  constructor(private transportFactory: ITransportFactory) {
    this.vehicle = this.transportFactory.createLandTransport('Food');
    this.aicraft = this.transportFactory.createAerialTransport('Medicine');
  }

  startRoute(): void {
    this.vehicle.startRoute();
    this.aicraft.startRoute();
  }
}
