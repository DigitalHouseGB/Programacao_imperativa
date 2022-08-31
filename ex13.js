/* Importa o módulo criado em listaDados */

let listaDados = require("./listaDados/pessoas")

/* Função que entra no objeto literal, pega os saldos, soma e tira a media*/
function somarNumero(lista){

    let saldoGeral = 0;

    for (let contador = 0; contador < lista.length; contador++) {
        saldoGeral+=(lista[contador].saldo);
    }
    return saldoGeral/lista.length
}

console.log("A média é " + somarNumero(listaDados));