// atv 1
const pessoas = [
  { nome: "Jolie", idade: 25 },
  { nome: "Janine", idade: 17 },
  { nome: "Arthur", idade: 30 },
  { nome: "Bela", idade: 16 },
  { nome: "Charlot", idade: 20 },
];

const filterAdults = (people) => people.filter((person) => person.idade >= 18);
const getNames = (people) => people.map((person) => person.nome);
const sortByName = (names) => names.sort();
const toUpperCase = (names) => names.map((name) => name.toUpperCase());

// Função de composição
const compose =
  (...functions) =>
  (initialValue) =>
    functions.reduceRight((value, func) => func(value), initialValue);

const processPeople = compose(toUpperCase, sortByName, getNames, filterAdults);
const resultado = processPeople(pessoas);
console.log(resultado);

// atv 2
const dispositivo = {
  nome: "TV",
  isOn: false,
  volume: 0,
  canal: 1,
};

const turnOn = (device) => ({ ...device, isOn: true });
const setVolume = (device, volume) => ({ ...device, volume });
const setChannel = (device, channel) => ({ ...device, channel });

// Função de composição
const composeDeviceSetup =
  (...functions) =>
  (device) =>
    functions.reduce((currentDevice, func) => func(currentDevice), device);

const setupDevice = composeDeviceSetup(
  (device) => setChannel(device, 7),
  (device) => setVolume(device, 50),
  turnOn
);

const resultadoDispositivo = setupDevice(dispositivo);
console.log(resultadoDispositivo);
