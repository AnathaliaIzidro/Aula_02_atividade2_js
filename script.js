var altura = prompt("Digite o peso.")
var peso = prompt("Digite a altura.")
let IMC = (peso/(altura^2))
if(IMC <= 18,5){
    console.log("Abaixo do peso", IMC)
}
else if(18,5 >= IMC <= 24,9){
    console.log("Abaixo do peso", IMC)
}
else{
    console.log("Sobrepeso", IMC)
}
