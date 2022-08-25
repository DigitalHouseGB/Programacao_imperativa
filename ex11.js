const Pedro= [52,45,98,47,89]
const Gustavo = [52,14,85,96,45]

function encontrarGanhador(array1, array2){

    let somaPedro = 0
    let somaGustavo = 0

    for (i=array1.length; i> 0; i--){
        if(array1[i] > array2[i]){
            somaPedro++;
        }else if(array1[i] < array2[i]){
            somaGustavo++;
        }else{
        }
    }
        if(somaPedro > somaGustavo){
            console.log ("Pedrou Ganhou!")
        }else if(somaPedro < somaGustavo){
            console.log("Gustavo Ganhou!")
        }else{
            console.log("O jogo terminou empatado")
        }
}

encontrarGanhador(Gustavo,Pedro)


/* criar função digital que recebe dois parametros */
/* imprimir na tela 1 a 100 */
/*  */



function digitalHouse(a,b){

   for(i=1;i<= 100;i++){
        if(i%a == 0){
            let sla = "Digital" 
            console.log(sla)
        }
        if(i%b == 0){
            console.log("House")
        }
        if((i%a == 0) && (i%b == 0)){
            console.log("Digital House")
        }

   } 

}

digitalHouse(2,4)