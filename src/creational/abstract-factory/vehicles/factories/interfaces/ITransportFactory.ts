import IAircraft from '../../aerial/interfaces/IAircraft';
import ILandVehicle from '../../land/interfaces/ILandVehicle';

export default interface ITransportFactory {
  createLandTransport(cargo: string): ILandVehicle;
  createAerialTransport(cargo: string): IAircraft;
}
