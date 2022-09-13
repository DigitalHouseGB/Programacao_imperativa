/* Exericio 1 */

function loopDePares(numero){
    for (let i = 0; i <=100; i++){
      if((i+numero)%2 == 0){
        console.log("É par");
      }else{
        console.log("Não é par")
      }
    } 
  }
  
  loopDePares(1)

  /* Exercicio 2 */

function loopDeImpares(palavra,numero){
    for (let i = 0; i < 100; i++) {
        if((i+numero)%2==1){
            console.log(palavra + " " + i)  
        }else{
            console.log(i)
        }   
    }
}

/* Exercicio 3 */

function soma1(numero){
    let numeroAnterior = 0
    for (let i = numero; i>=0 ; i--) {
        numeroAnterior = i + numeroAnterior
    }
    console.log(numeroAnterior)
}

soma1(50)

/* Exercicio 4 */

function newArray(número){
    let arrayRetorno = []

    for (let i = 1; i<=número ; i++){
        arrayRetorno.push(i)
    }
    console.log(arrayRetorno)
}

newArray(5)

/* Exercicio 5 */

function split(string){

    let array = []

    for (let i= 0; i < string.length; i++) {
       array.push(string[i])
    }
    console.log(array)
}

split("sla")

/* Exercicio 6 */

function moverZeros(array){
    let lista1 = []
    
    let lista2 = []

    for (let i=0; i < array.length; i++) {
        if(array[i] === 0){
            lista1.push(array[i])
        }else{
            lista2.push(array[i])
        }    
    }

    for (let i = 0; i<lista1.length; i++) {
        lista2.push(lista1[i]) 
    }
    console.log(lista2)
}

moverZeros([false,1,0,1,2,0,1,3,"a"]) 

/*  Exercicio 7 */

function arrayHandler(array1, array2){
    for(let i=0; i<array1.length; i++){
        console.log("Eu sou "+array1[i]+" e eu sou "+array2[i]);
    }
}

arrayHandler([1,2,3], ["o","l","á"]);

/* Exercicio 8 */

function arrayObjects(num){
    let array = [];
    for(let i=1; i<=num; i++){
        array.push({valor: i});
    }
    return array;
}

  console.log(arrayObjects(5));

  /* Exercicio 9 */

  function arrayObjectsTwo(num, palavra){
    let array = [];
    for(let i=1; i<=num; i++){
        array.push({[palavra]: i});
    }
    return array;
}

console.log(arrayObjectsTwo(5, "olá"));