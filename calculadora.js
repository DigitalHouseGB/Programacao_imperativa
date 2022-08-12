/* Calculadora */

function dividir(numero_1,numero_2){
    let divisão = (numero_1/numero_2);
    console.log(divisão)
    return divisão
}

function subtração(numero_1,numero_2){
    let subtração = (numero_1 - numero_2);
    console.log(subtração)
    return subtração
}

function soma(numero_1,numero_2, numero_3){
    let soma_1 = (numero_1 + numero_2 + numero_3);
    console.log(soma_1)
    return soma_1
}

function multiplicar(numero_1,numero_2){
    let multiplicar = (numero_1 * numero_2);
    console.log(multiplicar)
    return multiplicar
}

function quadradoDoNumero(numero){
    let expoente = (numero * numero)
    console.log (expoente)
    return quadradoDoNumero
}

function mediaDeTresNumeros(numero_1, numero_2, numero_3){
    let adiçãoTresNumeros = soma(numero_1, numero_2, numero_3);
    dividir(adiçãoTresNumeros,3);
}

function calculaPorcentagem(numeroTotal,porcentagem){
    let divisaoPorcentagem = dividir(numeroTotal,100)
    let valorFinal = multiplicar(divisaoPorcentagem, porcentagem)
    console.log(valorFinal)

}

function geradorDePorcentagem(porcentagem_1, porcentagem_2){
    let valorPorcentagem = dividir(porcentagem_1,porcentagem_2)
    let porcentagemFinal = valorPorcentagem*100
    console.log(porcentagemFinal + " %")
}

console.log ("-------------- Teste de Operações / Calculador --------------")

geradorDePorcentagem(2,300)

calculaPorcentagem(100,15)

mediaDeTresNumeros(3,8,3)

quadradoDoNumero(2)

soma(1,3,1)

subtração(1,2)

multiplicar(1,2)

dividir(2,2)


