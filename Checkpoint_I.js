/* um menu de microondas com opçãos e tempos, dois parametros */
/* usar if,else */
/* criar opção de menu */
let opção_alimento_1 = "Pipoca"
let opção_alimento_2 = "Macarrão"
let opção_alimento_3 = "Carne"
let opção_alimento_4 = "Feijão"
let opção_alimento_5 = "Brigadeiro"

let tempoPipoca = 10
let tempoMacarrão = 8
let tempoCarne = 15
let tempoFeijão = 12
let tempoBrigadeiro = 8

function menuMicroondas(opção,tempoEstabelecido){
    if(tempoEstabelecido == tempoMacarrão*2){
        console.log("Prato pronto, bom apetite!!!")
        console.log("A comida queimou")
}else if(tempoEstabelecido < tempoMacarrão){
    console.log("Prato pronto, bom apetite!!!")
    console.log("Tempo insuficiente")
}
else if(opção != opção_alimento_2){
    console.log("Prato pronto, bom apetite!!!")
    console.log("Prato inexistente")
}
else if (tempoEstabelecido == tempoMacarrão*3){
    console.log("Prato pronto, bom apetite!!!")
    console.log("kabuum") 
}
else{
    console.log("Defina o processo corretamente")
}
}

menuMicroondas(opção_alimento_2,22)