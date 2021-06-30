const lista = [
  1,
  2,
  3,
  7,
  4,
  5,
  6,
  2,
  1,
  9,
  8,
  7,
  6,
  7,
  5,
  9,
  7,
  1,
];

function calcularModa(lista) {
  const listaCount = {};

  lista.map((elemento) => {
    if ( listaCount[elemento] ) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort((valorAcumulado, nuevoValor) => {
    return valorAcumulado[1] - nuevoValor[1];
  });

  const moda = listaArray[listaArray.length - 1];

  return moda;
}

