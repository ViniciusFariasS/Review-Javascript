const produtos = [
    { nome: 'Notebool', preco: 2499, fragil: true },
    { nome: 'Mesa', preco: 499, fragil: false },
    { nome: 'Ipad', preco: 5487, fragil: true },
    { nome: 'Vaso', preco: 2545, fragil: false },
]

console.log(produtos.filter(p => {
    return false
} ))

const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500

console.log(produtos.filter(fragil).filter(caro))