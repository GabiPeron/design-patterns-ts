import VehicleBuilder from './builders/VehicleBuilder';
import Director from './director/Director';
import Vehicle from './products/Vehicle';

const builder = new VehicleBuilder();
const director = new Director(builder);

director.constructSedan();

const vehicle: Vehicle = builder.getVehicle();

console.log(`Created a ${vehicle.type} with the following specifications:`);
console.log(`Engine: ${vehicle.engine?.horsepower} HP`);
console.log(`Seats: ${vehicle.seats}`);
console.log(`Wheels: ${vehicle.wheelCount} wheels of size ${vehicle.wheels[0].size} inches`);