Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebool', preco: 2499, fragil: true },
    { nome: 'Mesa', preco: 499, fragil: false },
    { nome: 'Ipad', preco: 5487, fragil: true },
    { nome: 'Vaso', preco: 2545, fragil: false },
]


const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500

console.log(produtos.filter2(fragil).filter2(caro))