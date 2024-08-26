let numero1 = 1006
let numero2 = 0

let somar
let subtrair
let multiplicar
let dividir

let operador = "/"

switch (operador) {
    case "+":
        somar = numero1 + numero2
        console.log("Soma: " + somar)
        break
    case "-":
        subtrair = numero1 - numero2
        console.log("Subtração: " + subtrair)
        break
    case "*":
        multiplicar = numero1 * numero2
        console.log("Multiplicação: " + multiplicar)
        break
    case "/":
        dividir = numero1 / numero2
        if (numero2 == 0) {
            console.log("Divisão: 'Não é possivel dividir por zero'")
        } else {
            console.log("Divisão: " + dividir)
        }
        break
}