const lista =[
    {
        nome: "Sabao em pó",
        preco: 30
    },
    {
        nome: "Cereal",
        preco: 12
    },
    {
        nome: "Toalha",
        preco: 30
    },
]

const saldo = 100


function calculaSaldo(lista, saldo){
    return lista.reduce(function(saldoFinal, valor){
        return saldoFinal - valor.preco;
    }, saldo)
}

console.log(calculaSaldo(lista, saldo))