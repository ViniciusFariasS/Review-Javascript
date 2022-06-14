const alunos = [
    { nome: 'joão', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 4.3, bolsista: true },
    { nome: 'pedro', nota: 9.3, bolsista: true },
    { nome: 'ana', nota: 3.3, bolsista: false },
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))