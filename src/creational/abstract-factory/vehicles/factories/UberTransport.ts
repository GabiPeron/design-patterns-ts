import Airplane from '../aerial/Airplane';
import IAircraft from '../aerial/interfaces/IAircraft';
import Car from '../land/Car';
import ILandVehicle from '../land/interfaces/ILandVehicle';
import ITransportFactory from './interfaces/ITransportFactory';

export default class UberTransport implements ITransportFactory {
  createLandTransport(cargo: string): ILandVehicle {
    return new Car(cargo);
  }

  createAerialTransport(cargo: string): IAircraft {
    return new Airplane(cargo);
  }
}
