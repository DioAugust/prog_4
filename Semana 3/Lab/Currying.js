// atv 1
const curriedVolume = (comprimento) => (largura) => (altura) =>
  comprimento * largura * altura;

console.log(curriedVolume(3)(4)(5));
console.log(curriedVolume(6)(7)(8));
console.log(curriedVolume(1)(2)(3));

// atv 2
const animalSound = (animal) => (som) => `${animal} faz ${som}`;

console.log(animalSound("pato")("quack"));
console.log(animalSound("ovelha")("baa"));
console.log(animalSound("leão")("rugido"));

// atv 3
const sportAction = (esporte) => (ação) => (jogador) =>
  `${jogador} ${ação} em ${esporte}`;

console.log(sportAction("futebol")("chuta a bola")("Cristiano Ronaldo"));
console.log(sportAction("tênis")("serve")("Serena Williams"));
console.log(sportAction("basquete")("dá um arremesso")("LeBron James"));
