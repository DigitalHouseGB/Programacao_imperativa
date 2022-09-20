let ListaPessoas = require("./modulePessoas/listaPessoas")

let Lista = {

maiorMenorAltura : (array) =>{

let maior = array[0].altura;
let menor = array[0].altura;

  for (let i = 0; i < array.length; i++) {
    if(array[i].altura > maior){
    maior = array[i].altura
  }
  if(array[i].altura < menor){
    menor = array[i].altura
  }

}

return [maior,menor]
},

mediaAltura : (array) =>{


  let mulheres = array.filter(function(array){
    return array.sexo === 'F'
  });
  
  let soma = mulheres.reduce(function(acumulador, i){
    return acumulador + i.altura},0);
  
    return soma / mulheres.length

},

qtdHomens : (array) =>{

let homens = array.filter(function(array){
  return array.sexo === 'M'
});

return homens.length

}

}

console.log(`Maior altura: ${Lista.maiorMenorAltura(ListaPessoas)[0]}m`);