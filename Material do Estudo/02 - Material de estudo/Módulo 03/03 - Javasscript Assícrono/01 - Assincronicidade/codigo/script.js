


async function resolverPromessa(){
    const a = new Promise((resolve, reject)=>{
        window.setTimeout(()=>{
            const a = 0;

            if(a==1){
                resolve("Sucesso")
            }
            else{
                reject("Error")
            }
        },3000)

    });

    const resposta = await a.then((resposta)=>{
        return resposta + " Sucesso";
    }).catch((error)=>{
        return error
    })


    return resposta;

}

console.log(resolverPromessa())