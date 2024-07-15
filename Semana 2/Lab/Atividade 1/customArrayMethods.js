function customMap(array, callback) {
  const result = [];

  // Iteramos sobre cada elemento do array original
  for (let i = 0; i < array.length; i++) {
    // Aplicamos a função de callback ao elemento atual
    const mappedValue = callback(array[i], i, array);
    // Adicionamos o valor mapeado ao novo array de resultados
    result.push(mappedValue);
  }

  return result;
}

function customReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  // Iteramos sobre cada elemento do array
  for (let i = 0; i < array.length; i++) {
    // Aplicamos a função de callback ao acumulador e ao elemento atual
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

function customFilter(array, callback) {
  const result = [];

  // Iteramos sobre cada elemento do array original
  for (let i = 0; i < array.length; i++) {
    // Aplicamos a função de callback ao elemento atual
    if (callback(array[i], i, array)) {
      // Se o elemento passar no teste, adicionamos ao array de resultados
      result.push(array[i]);
    }
  }

  return result;
}

function customForEach(array, callback) {
  // Iteramos sobre cada elemento do array original
  for (let i = 0; i < array.length; i++) {
    // Aplicamos a função de callback ao elemento atual
    callback(array[i], i, array);
  }
}

// chamando as funções

const numbers = [1, 2, 3, 4, 5];

const doubled = customMap(numbers, function (num) {
  return num * 2;
});

const sum = customReduce(
  numbers,
  function (accumulator, currentValue) {
    return accumulator + currentValue;
  },
  0
);

const evenNumbers = customFilter(numbers, function (num) {
  return num % 2 === 0;
});

// saidas

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(sum); // 15
console.log(evenNumbers); // [2, 4]
customForEach(numbers, function (num, index, array) {
  console.log(`Element at index ${index} is ${num}`);
});
