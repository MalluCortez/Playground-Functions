// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  return frase.split (" ")  
}

// Desafio 4

function concatName(name) {

 return name [name.length -1 ] + ", " + name[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numbers) {

  let maiorNumero = numbers[0];
  let quantidadeMaiorNumero = 0;

  for (indice = 0; indice < numbers.length; indice ++){
    if (numbers[indice] > maiorNumero){
       maiorNumero = numbers[indice]
    }  
}
  for (indice = 0; indice < numbers.length; indice ++){
    if (maiorNumero === numbers[indice]){
      quantidadeMaiorNumero++
     }
    }

return quantidadeMaiorNumero
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanciaCat1 = mouse - cat1 ;
  let distanciaCat2 = mouse - cat2 ;

  if (distanciaCat1 < 0){
    distanciaCat1 = distanciaCat1 * -1
  }

  if (distanciaCat2 < 0) {
    distanciaCat2 = distanciaCat2 * -1
  } 


if (distanciaCat1 < distanciaCat2){
  return "cat1"
} else if (distanciaCat2 < distanciaCat1){
  return "cat2"
} else if (distanciaCat1 === distanciaCat2){
  return "os gatos trombam e o rato foge"
}
}

// Desafio 8
function fizzBuzz(numeros) {

  let resultado = []

 for (indice = 0; indice < numeros.length; indice ++){
    if (numeros[indice] %3 === 0 && numeros[indice] %5 === 0) {
      resultado.push ('fizzBuzz')
    } else if (numeros[indice] %3 === 0) {
      resultado.push ('fizz')
    } else if (numeros[indice] %5 === 0) {
      resultado.push ('buzz')
    } else {
      resultado.push ('bug!')
    }
 
}
return resultado
}

// Desafio 9
function encode(frase) {

  let novaFrase = frase.replace(/a/g,"1").replace(/e/g,"2").replace(/i/g,"3").replace(/o/g,"4").replace(/u/g,"5")

  return novaFrase

}


function decode(frase) {
  let novaFrase = frase.replace(/1/g,"a").replace(/2/g,"e").replace(/3/g,"i").replace(/4/g,"o").replace(/5/g,"u")

  return novaFrase
}

// Desafio 10

function techList(tecnologias, nome) {

  let techNome = []

  for (let i in tecnologias){
    let techObjeto = {
      tech: tecnologias[i],
      name: nome
    }
    techNome.push (techObjeto)
  
  }
  return techNome
    }
  




module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
