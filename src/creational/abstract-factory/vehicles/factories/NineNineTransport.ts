import Motorcycle from "../../../factory-method/transport/vehicles/Motorcycle";
import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
  createLandTransport(cargo: string): ILandVehicle {
    return new Motorcycle(cargo);
  }

  createAerialTransport(cargo: string): IAircraft {
    return new Helicopter(cargo);
  }
}