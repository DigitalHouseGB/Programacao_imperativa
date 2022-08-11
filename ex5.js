/* Exercicios 1 PG */

Math.random();
console.log (Math.random());

function cumprimentar(texto) {
console.log("Olá, seja bem vindo! " + texto);
}
   
let comprimento = cumprimentar("andre")
console.log(comprimento)

function mensagem(){
    console.log("ola função")
}

mensagem();

function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo! "
    console.log(mensagem + nome);
}
   
cumprimentarA("William")
cumprimentarA("Danilo")

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
}
multiplicarPorDoisESomarCinco(1)
multiplicarPorDoisESomarCinco(5)
const Erick= 5
multiplicarPorDoisESomarCinco(Erick)
console.log(multiplicarPorDoisESomarCinco(Erick));
const valor = multiplicarPorDoisESomarCinco(Erick)

console.log(valor);

function mensagem(texto){
    console.log(texto)
}

mensagem("Marcos");

function mensagem(texto, idade){
    console.log("Olá sou " + texto + "e tenho " + idade + " anos de idade" )
}

mensagem("Marcos",25);

function mensagem(texto, idade){
    return ("Olá sou " + texto + "e tenho " + idade + " anos de idade" )
}

let msg = mensagem("sla", 20);

console.log(msg)

/* Fórmula da idade do cachorro */

function idadeCachorro (idadeHumano){
    return (idadeHumano * 7);
}

let idade_do_cachorro = idadeCachorro (5);

console.log (idade_do_cachorro)

/* Fórmula de horas de trabalho */
function hora_de_trabalho(salario_mensal, horas_mes){
    return(salario_mensal/horas_mes)
}

let calc_hora_de_trabalho = hora_de_trabalho(2000,37.5)

console.log(calc_hora_de_trabalho)

/* Fórmula IMC */

function imc (peso, altura){
    return (peso/(altura * altura));
}

imc_final = imc (60, 1.70);
console.log("o imc final é " + imc_final)
