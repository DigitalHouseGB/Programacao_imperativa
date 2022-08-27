/* Exercicio 1 */
/* O dado apresentado retorná undefined */

/* Exercicio 2 */
/* Retonrará o segundo array e depois o primeiro em seguida */

/* Exercicio 3 */
/* Retornará a lista 2 e a 1 */

let lista = ["1","2","3"]

function imprimirInverso(array){
    console.log("[" + array[2] +" " + array[1] + " " + array[0] + "]")
}

imprimirInverso(lista)


lista = [1,2,3,4,5]

function inverter(array){
    let arrayInverso = ("[" + array[4] +" " + array[3] + " " + array[2] + " " + array[1] + " " + array[0] + "]")
    return arrayInverso
}

let arrayInversoFinal = inverter(lista)
console.log(arrayInversoFinal)


let sum = 0

function somarArray(arrayadição){

    for(let i = 0; i< arrayadição.length; i++ ){
        sum += arrayadição[i]
    }
    return sum
}

let sla = somarArray([7,2,3,4])
console.log(sla)


let sum_1 = ""

function join(arrayJoin){
    for(let i=0; i<arrayJoin.length; i++){
            sum_1 += arrayJoin[i]
    }
    return sum_1
}

let arrayJoinFinal = join(["o","l","a"])
console.log(arrayJoinFinal)

let Filmes_Series = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

console.log(Filmes_Series[4])


let listaMaiuscula = ""

function uppercase(arrayMaiusculo){
    for(i=0; i<arrayMaiusculo.length; i++){
        Filmes_Series[i] = arrayMaiusculo[i].toUpperCase()
    }
    console.log(Filmes_Series)
    return listaMaiuscula
}


uppercase(Filmes_Series)


let lista_2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];
let lista_1 = [];

function passagemDeElemento(array1,array2){
    let Fortnite = lista_2.pop()
    console.log (Fortnite)
    for(let i=array2.length; i >= 0  ; i--){
        array1[i] = array2.pop([i])
    }
    return(array1)
}

let mensagemFinal = passagemDeElemento(lista_1,lista_2)

console.log(mensagemFinal)



const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

/* Criar uma função que compara dois arrays e retornar valor booleano*/

function comparacaoArrays(arrayAsia, arrayEuro){
    let igual = 0
    let diferente = 0
        
    for(i=1;i<=arrayAsia.length;i++){
        if(arrayAsia[i] == arrayEuro[i]){
        igual++;
        }else{
            diferente++
        }
    }
    console.log("Tem " + igual + " indices iguais");
    console.log("Tem " + diferente + " indices iguais");
}

comparacaoArrays(asiaScores,euroScores)
