import Engine from '../components/Engine';
import Transmission from '../components/Transmission';
import VehicleType from '../components/VehicleType';
import Wheel from '../components/Wheel';

export default class Vehicle {
  private _wheels: Wheel[] = [];
  private _engine?: Engine;
  private _transmission?: Transmission;
  private _type?: VehicleType;
  private _seats?: number;

  addWheel(wheel: Wheel): void {
    this._wheels.push(wheel);
  }

  set engine(engine: Engine) {
    this._engine = engine;
  }

  set transmission(transmission: Transmission) {
    this._transmission = transmission;
  }

  set type(type: VehicleType) {
    this._type = type;
  }

  set seats(seats: number) {
    this._seats = seats;
  }

  get wheels(): Wheel[] {
    return this._wheels;
  }

  get engine(): Engine | undefined {
    return this._engine;
  }

  get transmission(): Transmission | undefined {
    return this._transmission;
  }

  get type(): VehicleType | undefined {
    return this._type;
  }

  get seats(): number | undefined {
    return this._seats;
  }

  get wheelCount(): number {
    return this._wheels.length;
  }
}
