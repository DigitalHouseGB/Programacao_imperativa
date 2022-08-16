let operador_1 = !true /* False */
console.log(operador_1)

let operador_2 = !false /* True */
console.log(operador_2)

let operador_3 = !!false /* False */ 
console.log(operador_3)

let operador_4 = !!true /* True */
console.log(operador_4)

let operador_5 = !1 /* False */
console.log(operador_5)

let operador_6 = !!1 /* True */
console.log(operador_6)

let operador_7 = !0 /* True */
console.log(operador_7)

let operador_8 = !!0 /* False */
console.log(operador_8)

let operador_9 = !!"" /* False */
console.log(operador_9)

let x = 5

let y = 9

let operador_10 = x<10 && x!==5

console.log(operador_10) /* False */

/* "-------------------------------------------------" */

let x_1=10
let y_1 ="a"
let operador_12 = y_1==="b" || x_1 >= 10

console.log(operador_12) /* True */


let x_2=3
let y_2=8
let operador_13 = !(x_2 == "3" || x_2 === y_2) && !(y_2 !== 8 && x <= y_2)
console.log(operador_13) /* False */


let str = ""
let msg = "haha!"
let eBonito = "false"
let operador_14 = !((str || msg) && eBonito) 
console.log(operador_14) /* False */

/* "-------------------------------------------------" */