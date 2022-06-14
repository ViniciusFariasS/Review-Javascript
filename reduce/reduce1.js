const alunos = [
    { nome: 'joão', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 4.3, bolsista: true },
    { nome: 'pedro', nota: 9.3, bolsista: true },
    { nome: 'ana', nota: 3.3, bolsista: true },
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})