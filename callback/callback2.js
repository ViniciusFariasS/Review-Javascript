const notas = [1.2, 3.4, 5.7, 8.4, 9.2]

//sem callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


//com callback
notasBaixas = notas.filter((nota) => nota < 7)

console.log(notasBaixas)
