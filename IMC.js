let nome = "jake"
let altura = 1.67
let peso = 66
let idade = 18
let imc = peso / (altura * altura)

function calcularImc(peso, altura) {
if (imc < 16.5) {
    resultado("Muito abaixo do peso")

}else if (imc <= 18.5) {
    resultado= "(Peso baixo)"

}else if (imc <= 25) {
    resultado= "(Peso normal)"

}else if (imc <= 30) {
    resultado= "(Sobrepeso)"

}else if (imc <= 35) {
    resultado= "(Obesidade grau 1)"

}else if (imc <= 40) {
    resultado= "(Obesidade grau 2)"
    
}else {
     resultado= "(Obesidade grau 3)"
}
return resultado
}

if (idade < 18) {
    console.log("Este teste é para maiores de 18 anos")
}else if (idade >= 18) {
   console.log("O imc de " + nome + " é " + imc.toFixed(2) + calcularImc(peso, altura))}


