// ES8:  Object.values/Object.entries

//values pega os valores, entries devolve um array chave/valor
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal {
    nome (){
        return 'Scooby'
    }
    falar(){
        return 'au au!'
    }
}

console.log(new Cachorro().nome(),new Cachorro().falar())