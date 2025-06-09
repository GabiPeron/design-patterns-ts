import VehicleBuilder from '../builders/VehicleBuilder';
import Engine from '../components/Engine';
import Transmission from '../components/Transmission';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';

export default class Director {
  constructor(private _builder: VehicleBuilder) {}

  constructSedan() {
    this._builder.setType(VehicleType.SEDAN);
    this._builder.setEngine(new Engine(150));
    this._builder.setTransmission(Transmission.DUAL_CLUTCH);
    this._builder.setSeats(5);
    this._builder.addWheel(new Wheel(16));
    this._builder.addWheel(new Wheel(16));
    this._builder.addWheel(new Wheel(16));
    this._builder.addWheel(new Wheel(16));
  }

  constructSUV() {
    this._builder.setType(VehicleType.SUV);
    this._builder.setEngine(new Engine(200));
    this._builder.setTransmission(Transmission.CVT);
    this._builder.setSeats(7);
    this._builder.addWheel(new Wheel(18));
    this._builder.addWheel(new Wheel(18));
    this._builder.addWheel(new Wheel(18));
    this._builder.addWheel(new Wheel(18));
  }

  constructTruck() {
    this._builder.setType(VehicleType.TRUCK);
    this._builder.setEngine(new Engine(400));
    this._builder.setTransmission(Transmission.MANUAL);
    this._builder.setSeats(2);
    this._builder.addWheel(new Wheel(22));
    this._builder.addWheel(new Wheel(22));
    this._builder.addWheel(new Wheel(22));
    this._builder.addWheel(new Wheel(22));
    this._builder.addWheel(new Wheel(22));
    this._builder.addWheel(new Wheel(22));
  }

  constructHatchback() {
    this._builder.setType(VehicleType.HATCHBACK);
    this._builder.setEngine(new Engine(120));
    this._builder.setTransmission(Transmission.AUTOMATIC);
    this._builder.setSeats(5);
    this._builder.addWheel(new Wheel(15));
    this._builder.addWheel(new Wheel(15));
    this._builder.addWheel(new Wheel(15));
    this._builder.addWheel(new Wheel(15));
  }

  constructMotorcycle() {
    this._builder.setType(VehicleType.MOTORCYCLE);
    this._builder.setEngine(new Engine(100));
    this._builder.setTransmission(Transmission.MANUAL);
    this._builder.setSeats(1);
    this._builder.addWheel(new Wheel(17));
    this._builder.addWheel(new Wheel(17));
  }
}
