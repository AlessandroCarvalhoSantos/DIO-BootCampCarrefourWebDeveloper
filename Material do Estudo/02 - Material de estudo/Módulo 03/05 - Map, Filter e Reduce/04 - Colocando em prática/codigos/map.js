const tabuada = {
    multiplicador : 1,
}

tabuada.multiplicador = 1;




function montarTabuada(arr, obj){
   return arr.map(function(valor){return this.multiplicador*valor}, obj);
}

const serie = [0,1,2,3,4,5,6,7,8,9]

console.log(montarTabuada(serie,tabuada))