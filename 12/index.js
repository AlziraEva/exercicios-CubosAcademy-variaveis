const montante = 90000
const capital = 60000
const meses = 24

const taxaDeJuros = Math.pow(montante / capital, 1 / 24) - 1
console.log(taxaDeJuros * 100)
