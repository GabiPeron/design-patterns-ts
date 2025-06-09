import Engine from '../components/Engine';
import Transmission from '../components/Transmission';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';
import Vehicle from '../products/Vehicle';
import IBuilder from './IBuilder';

export default class VehicleBuilder implements IBuilder {
  private vehicle = new Vehicle();

  reset(): void {
    this.vehicle = new Vehicle();
  }

  getVehicle(): Vehicle {
    const result = this.vehicle;
    this.reset(); // Reset the builder after getting the vehicle

    return result;
  }

  addWheel(wheel: Wheel): void {
    this.vehicle.addWheel(wheel);
  }

  setType(type: VehicleType): void {
    this.vehicle.type = type;
  }

  setSeats(seats: number): void {
    this.vehicle.seats = seats;
  }

  setEngine(engine: Engine): void {
    this.vehicle.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this.vehicle.transmission = transmission;
  }
}
