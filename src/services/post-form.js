import { postJSON } from './utils/';

export const postForm = (carType, price, range, chargeTime, power = 5, speed = 5) => {
  const apiRoot = 'https://neev.uk/api'; // constants
  const defaultCars = ['SUV', 'Saloon', 'Hatchback'];
  const car = defaultCars[carType];
  // const defaultCars = { large: 'SUV', standard: 'Saloon', personal: 'Hatchback' }; //constants
  // const cars = carTypes.map((car) => defaultCars[car]).join(',');

  const defaultQs = `https://neev.uk/api?range=4&chargetime=3&power=4&speed=2&price=3&carType=Saloon,Hatchback`; // constants
  const qs = `${apiRoot}?range=${range}&chargetime=${chargeTime}&power=${power}&speed=${speed}&price=${price}&carType=${car}`;
  return postJSON(qs);
};
