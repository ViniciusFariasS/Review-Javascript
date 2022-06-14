// let e const

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

//template String
const produto = 'ipad'
console.log(`${produto} é caro!`)

//Destructuring 

const [l, e, ...tras] = "Teste"
console.log(l, e, tras)

//desestruturar atributos de um array
const [x, , y] = [1, 2, 3]
console.log(x, y)

//desestruturar atributos de um objeto
const { idade, nome, renomeando: paraIsto } = { nome: 'Ana', idade: 9, renomeando: 'Renomear' }
console.log(idade, nome, paraIsto)

