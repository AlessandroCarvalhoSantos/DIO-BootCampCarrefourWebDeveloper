function validarArray(arr, num){

    try {

        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError("num precisa ser do tipo numero");

        if(arr.length !== num) throw new RangeError("Tamanho inválido");

        return arr;

    } catch (e) {
        
        if(e instanceof ReferenceError){
            console.log("Esse error é do tipo ReferenceError");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Esse error é do tipo TypeError")
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Esse error é do tipo RangeError")
            console.log(e.message);
           
        }else{
            console.log("Ocorreu um erro inesperado" + e)
        }
    }
}




validarArray([1,3,2],3)