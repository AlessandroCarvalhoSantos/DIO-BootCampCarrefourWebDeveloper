function validarError(arr='', tam=''){

    try {

        if(arr === '' || tam === '') throw ReferenceError();

        if(arr.length !== tam) throw RangeError();

        if(typeof arr !== 'object') throw TypeError();

        if(typeof tam !== 'number') throw TypeError();

        

        return "Array validados";

    } catch (error) {
        throw error;
    }
}




validarError([1,3,2],3)