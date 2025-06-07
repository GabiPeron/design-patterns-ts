import Drone from '../aerial/Drone';
import IAircraft from '../aerial/interfaces/IAircraft';
import ILandVehicle from '../land/interfaces/ILandVehicle';
import Scooter from '../land/Scooter';
import ITransportFactory from './interfaces/ITransportFactory';

export default class LimeTransport implements ITransportFactory {
  createLandTransport(cargo: string): ILandVehicle {
    return new Scooter(cargo);
  }

  createAerialTransport(cargo: string): IAircraft {
    return new Drone(cargo);
  }
}
