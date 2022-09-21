/*  Quarto dia de projeto */
let ListaEspectadores = require("./moduleEspectadores/espectadoresLista")

let ListaConstrutor = require("./moduleConstrutor/moduleConstrutor")

ListaEspectadores.push(new ListaConstrutor(1,2))

let media = {mediaIdades : (array) =>{


    let soma = array.reduce(function(acumulador, i){
      return acumulador + i.idade},0);
    
      return soma / array.length
  
  },
  
  qtdPessoas : (array) =>{
  
    let pessoasRegular = array.filter(function(array){
      return array.opiniao === 1
    });
  
    return pessoasRegular.length
  
  },
  
  porcentagem : (array) =>{
  
    let espectadoresBom = array.filter(function(array){
      return array.opiniao === 2
    });
  
    return espectadoresBom.length / array.length * 100
  
  }
  
  }

console.log(media.mediaIdades(ListaEspectadores))
console.log(media.qtdPessoas(ListaEspectadores))
console.log(media.porcentagem(ListaEspectadores))