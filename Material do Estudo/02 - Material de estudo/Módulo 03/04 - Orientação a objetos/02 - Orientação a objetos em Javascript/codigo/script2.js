class contaBancaria{
    constructor(agencia, tipo, numero){
        this.agencia = agencia;
        this.tipo = tipo;
        this.numero = numero;
        this._saldo = 0;
    }

    get saldo(){
        return  this._saldo
    }

    set saldo(valor){
        this._saldo = valor
    }

    sacar(saque){
        if(this._saldo < saque){
            console.log("Operação negada")
            return false;
        }
        this._saldo -= saque 
        return this._saldo; 
    }

    depositar(deposito){
        this._saldo += deposito 
        return this._saldo;
    }

}

class contaCorrente extends contaBancaria{

    constructor(agencia, numero,saldo,cartaoCredito){

        super(agencia, numero)
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito

    }

    get cartaoCredito(){
        return  this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }

}


class contaPoupanca extends contaBancaria{

    constructor(agencia, numero,saldo){

        super(agencia, numero)
        this.tipo = "poupanca";
    }
}

class contaUniversitaria extends contaBancaria{

    constructor(agencia, numero,saldo){

        super(agencia, numero)
        this.tipo = "universitaria";
    }

    sacar(saque){
        if(saque > 500){
            console.log("Operação negada")
        }
        this._saldo -= saque 
        return this._saldo -= saque 
    }
}