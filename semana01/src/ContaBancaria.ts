import TitularConta from "./TitularConta";


export default class ContaBancaria{
    constructor(titular: TitularConta, chavePix: string){
        this.saldo = 0;
        this.titularConta = titular;
        this.chavePix = chavePix;
        this.data_criacao = new Date();
        this.numero = String((Math.random() * 89999) + 10000);
    }

    numero!: string;
    saldo: number;
    titularConta: TitularConta;
    chavePix: string;   
    data_criacao: Date;

    depositar(valor: number){
        if(valor <= 0){
            console.log("por favor, insira um valor válido.")
            return;
        }
           
        this.saldo += valor;
        console.log(`deposito realizado com sucesso, seu saldo é de: ${this.saldo}`)
        
    }


    sacar(valor: number){
        if(valor > this.saldo || this.saldo <= 0){
            console.log("não é possivel sacar o dinheiro, por favor, verifique as informaçoes.")
            return;
        }

        this.saldo -= valor;
        console.log(`saque de R$ ${valor} realizado com sucesso. o saldo da sua conta é de: R$${this.saldo}`);
    }

    consultarSaldo(){
        console.log(`seu saldo é de: R$ ${this.saldo}`)
    }


    exibirCliente(){
        console.log(`
        Cliente: ${this.titularConta.nome} (CPF: ${this.titularConta.cpf}, Data de nascimento: ${this.titularConta.dataNascimento})
        Saldo: ${this.saldo}
        Chave pix: ${this.chavePix}
        Numero da conta: ${this.numero}
        Data de criação: ${this.data_criacao}
        `)
    }
}