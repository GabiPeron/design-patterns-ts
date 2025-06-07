import Processes from './Processes';
import BicycleTransport from './transport/BicycleTransport';
import CarTransport from './transport/CarTransport';
import MotorcycleTransport from './transport/MotorcycleTransport';
import Transport from './transport/Transport';

let transport: Transport;
let process = Processes.UBER;

switch (process) {
  case Processes.UBER:
    transport = new CarTransport();
    break;
  // @ts-ignore
  case Processes.LOG:
    transport = new MotorcycleTransport();
    break;
  // @ts-ignore
  case Processes.EATS:
    transport = new BicycleTransport();
    break;
  default:
    throw new Error('Process not found');
}

transport.startTransport();
