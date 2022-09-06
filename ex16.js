let mensagemPersonalizada = () => "Mensagem Personalizada";


let FizzBuzz = (a,b,callback) =>{

    for (let i = 0; i <= 100; i++) {
        if(i%a == 0){
            console.log(callback())
        }
        if(i%b == 0){
            console.log("Buzz")
        }
        if(i%a == 0 && i%b == 0){
            console.log("FizzBuzz")
        }
    }
}

FizzBuzz(2,4,mensagemPersonalizada)


