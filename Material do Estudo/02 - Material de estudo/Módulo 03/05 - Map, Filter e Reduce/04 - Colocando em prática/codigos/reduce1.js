function somar(arr){
    return arr.reduce(function(soma, valor){return soma+valor})
}

const valores = [0,1,2,3,4,5,6,7,8,9]

console.log(somar(valores))