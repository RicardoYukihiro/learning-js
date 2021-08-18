let nomeTrabalhador = "ricardo"
let salarioBruto = 8200
let salarioLiquido = 0
let taxa = 0


if (salarioBruto > 1130) {
    taxa = 0.02
}
if (salarioBruto > 1350) {
    taxa = 0.04
}
if (salarioBruto >= 2000) {
    taxa = 0.08
}
if (salarioBruto > 3000) {
    taxa = 0.15
}

salarioLiquido = salarioBruto - (salarioBruto * taxa)

console.log("==================HOLERITE=================")

console.log("Nome trabalhador: " + nomeTrabalhador);
console.log("Salário Bruto: R$ " + salarioBruto);
console.log("Salário liquido: R$ " + salarioLiquido)

console.log("==================HOLERITE=================")


