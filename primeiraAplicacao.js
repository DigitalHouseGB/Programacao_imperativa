/* Primeiro dia de projeto */

let pessoas = [
    {id: 1, altura: 1.70, sexo: 'M'},
    {id: 2, altura: 1.60, sexo: 'F'},
    {id: 3, altura: 1.80, sexo: 'M'},
    {id: 4, altura: 1.90, sexo: 'F'},
    {id: 5, altura: 1.50, sexo: 'M'},
    {id: 6, altura: 1.60, sexo: 'F'},
    {id: 7, altura: 1.70, sexo: 'M'},
    {id: 8, altura: 1.80, sexo: 'F'},
    {id: 9, altura: 1.90, sexo: 'M'},
    {id: 10, altura: 1.50, sexo: 'F'},
    {id: 11, altura: 1.60, sexo: 'M'},
    {id: 12, altura: 1.70, sexo: 'F'},
    {id: 13, altura: 1.80, sexo: 'M'},
    {id: 14, altura: 1.90, sexo: 'F'},
    {id: 15, altura: 1.50, sexo: 'M'}
];

const maiorMenorAltura = (array) =>{
    let maior = array[0].altura;
    let menor = array[0].altura;

   	for (let i = 0; i < array.length; i++) {
        if(array[i].altura > maior){
        maior = array[i].altura
      }
      if(array[i].altura < menor){
        menor = array[i].altura
      }

}''

  return [maior,menor]
}

console.log(`Maior altura: ${maiorMenorAltura(pessoas)[0]}m`);
console.log(`Menor altura: ${maiorMenorAltura(pessoas)[1]}m`);



const mediaAltura = (array) =>{


  	let mulheres = array.filter(function(array){
      return array.sexo === 'F'
    });
    
    let soma = mulheres.reduce(function(acumulador, i){
      return acumulador + i.altura},0);
    
      return soma / mulheres.length

}

console.log(mediaAltura(pessoas))

const qtdHomens = (array) =>{

  let homens = array.filter(function(array){
    return array.sexo === 'M'
  });

  return homens.length

}

console.log(qtdHomens(pessoas))

/* Segundo dia de projeto */

let espectadores = [
  {id:1, opiniao: 1, idade: 18},
  {id:2, opiniao: 2, idade: 28},
  {id:3, opiniao: 3, idade: 38},
  {id:4, opiniao: 3, idade: 48},
  {id:5, opiniao: 2, idade: 58},
  {id:6, opiniao: 1, idade: 68},
  {id:7, opiniao: 2, idade: 78},
  {id:8, opiniao: 3, idade: 88},
  {id:9, opiniao: 1, idade: 45},
  {id:10, opiniao: 3, idade: 37},
  {id:11, opiniao: 1, idade: 51},
  {id:12, opiniao: 2, idade: 21},
  {id:13, opiniao: 3, idade: 39},
  {id:14, opiniao: 2, idade: 43},
  {id:15, opiniao: 1, idade: 56} 
];


const mediaIdades = (array) =>{


  let soma = array.reduce(function(acumulador, i){
    return acumulador + i.idade},0);
  
    return soma / espectadores.length

}

console.log(mediaIdades(espectadores))

const qtdPessoas = (array) =>{

  let pessoasRegular = array.filter(function(array){
    return array.opiniao === 1
  });

  return pessoasRegular.length

}

console.log(qtdPessoas(espectadores))

const porcentagem = (array) =>{

  let espectadoresBom = array.filter(function(array){
    return array.opiniao === 2
  });

  return espectadoresBom.length / espectadores.length * 100

}

console.log(porcentagem(espectadores)+" %")