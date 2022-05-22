class contaBancaria{
    constructor(agencia,numero,saldo,tipo ="contaBancaria"){
        this.agencia = agencia;
        this._tipo = tipo;
        this.numero = numero;
        this._saldo = saldo;
    }

    get saldo(){
        return  this._saldo
    }

    set saldo(valor){
        this._saldo = valor
    }
    get tipo(){
        return this.tipo 
    }

    sacar(ssque){
        if(this._saldo < saque){
            console.log("Operação negada")
        }
        this._saldo -= saque 
        return this._saldo;
    }

    depositar(deposito){
        this._saldo += deposito 
        return this._saldo
    }
}

class contaCorrente extends contaBancaria{
    constructor(){
        super("contaCorrente")
        this.cartaoCredito;
    }


    get getCartaoCredito(){
        return  this.cartaoCredito
    }
 
    set setCartaoCredito(cartaoCredito){
        this.cartaoCredito = cartaoCredito
    }
}


class contaPoupanca extends contaBancaria{
    constructor(){
        super("contaCorrente")
    }

}

class contaUniversitaria extends contaBancaria{
    constructor(){
        super("contaUniversitaria")
    }

    sacar(saque){
        super.sacar()

        if(saque >500){
            console.log('Você só pode fazer saques menores de 500 reais');
        }else{
            if(this.saldo - saque){
                this.saldo -= saque 
            }else{
                console.log('Saldo insuficiente!');
            }
            
        }
    }
}

const a = new contaBancaria();
const b = new contaCorrente();
const c = new contaPoupanca();
const d = new contaUniversitaria();

a.setSaldo(500);
console.log(a.saldo());
console.log(a.tipo());