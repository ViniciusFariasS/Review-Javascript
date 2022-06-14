const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caneta", "preco": 13.23}',
    '{"nome": "Kit Lapis", "preco": 43.45}',
    '{"nome": "Caderno", "preco": 41.35}',
]

//retornar um array apenas com preços
 
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)