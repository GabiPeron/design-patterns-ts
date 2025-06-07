import Client from './vehicles/client/Client';
import companies from './vehicles/consts/Company';
import ITransportFactory from './vehicles/factories/interfaces/ITransportFactory';
import LimeTransport from './vehicles/factories/LimeTransport';
import NineNineTransport from './vehicles/factories/NineNineTransport';
import UberTransport from './vehicles/factories/UberTransport';

const currentCompany = companies.UBER;
let factory: ITransportFactory;

switch (currentCompany) {
  case companies.UBER:
    factory = new UberTransport();
    break;
  // @ts-ignore
  case companies.NINENINE:
    factory = new NineNineTransport();
    break;
  // @ts-ignore
  case companies.LIME:
    factory = new LimeTransport();
    break;
  default:
    throw new Error('Company not found');
}

const client = new Client(factory);
client.startRoute();
