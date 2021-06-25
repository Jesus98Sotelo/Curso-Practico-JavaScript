// Código del Cuadrado
console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log('Lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log('El perímetro del cuadrado es de: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log('El area de mi cuadrado es: ' + areaCuadrado + 'cm^2');
console.groupEnd();

// Código del Triangulo
console.group('Triangulo');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log('Los lados del triangulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm');


// const alturaTriangulo = 5.5;
// console.log('La aturá del triangulo es: ' + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log('El perímetro del cuadrado es de: ' + perimetroTriangulo);
function alturaTriangulo(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base ) {
    const altura = Math.sqrt( (lado1**2) - ((base**2) / 4));
    return altura
  } else {
    return false
  }
}


function areaTriangul(base, altura) {
  return (base * altura) / 2;
}
// console.log('El area del triangulo es: ' + areaTriangulo + 'cm^2');

console.groupEnd();

// Código del Círculo
console.group('Círculo');
// const radioCirculo = 4;
// console.log('El radio del círculo es: ' + radioCirculo + 'cm');

function diametroCirculo(radio) {
  return radio * 2;
}
// console.log('El diámetro del círculo es: ' + diametroCirculo + 'cm');

const PI = Math.PI;
console.log('PI es: ' + PI);

function perimetroCirculo(radio) {
  const diametro =  diametroCirculo(radio);
  return diametro * PI;
}
// console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cm');

function areaCirculo(radio) {
  return (radio * radio) * PI;
}
// console.log('El área del círculo es: ' + areaCirculo + 'cm^2');

console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(params) {
  const input = document.getElementById('InputCuadrado')
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado(params) {
  const input = document.getElementById('InputCuadrado')
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}