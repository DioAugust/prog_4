// atv 1
const calculaVolume = (comprimento, largura, altura) =>
  comprimento * largura * altura;

const calculaVolumeWithFixedLengthAndWidth = (altura) =>
  calculaVolume(4, 3, altura);

console.log(calculaVolumeWithFixedLengthAndWidth(5));
console.log(calculaVolumeWithFixedLengthAndWidth(10));
console.log(calculaVolumeWithFixedLengthAndWidth(15));

// atv 2
const planActivity = (activityName, duration, numberOfKids) => {
  return `${numberOfKids} crianças vão participar da atividade ${activityName} por ${duration} minutos.`;
};

const planActivityWithFixedDuration =
  (activityName, duration) => (numberOfKids) =>
    planActivity(activityName, duration, numberOfKids);

const soccerActivity = planActivityWithFixedDuration("jogar futebol", 60);
const paintingActivity = planActivityWithFixedDuration("pintar", 30);
const readingActivity = planActivityWithFixedDuration("ler livros", 45);

console.log(soccerActivity(10));
console.log(paintingActivity(5));
console.log(readingActivity(8));
