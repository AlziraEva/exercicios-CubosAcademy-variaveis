let capital = 1000
let taxaDeJuros = 12.5 / 100
let periodoDeTempo = 5

let montante = capital * (1 + taxaDeJuros) ** periodoDeTempo
console.log(montante)