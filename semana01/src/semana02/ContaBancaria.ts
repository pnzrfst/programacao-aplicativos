import TitularConta from "./TitularConta";


export default class ContaBancaria{
    constructor(titular: TitularConta, chavePix: string){
        this.saldo = 0;
        this.titularConta = titular;
        this.chavePix = chavePix;
        this.data_criacao = new Date();
        this.numero = String((Math.random() * 89999) + 10000);
    }

    private numero: string;

    public getNumeroConta(): string{
        return this.numero;
    }

    public setNumero(numero: string) : void{
        this.numero = numero;
    }
    //---------------------------------------
    //---------------------------------------
    private saldo: number;

    public getSaldo(): number{
        return this.saldo;
    }

    public setSaldo(saldo: number): void{
        this.saldo = saldo;
    }
    //---------------------------------------
    private titularConta: TitularConta;

    public getTitularConta(): string{
        return this.titularConta.nome;
    }
    //---------------------------------------
    private chavePix: string;   
    
    public getChavePix() : string{
        return this.chavePix;
    }

    public setChavePix(chavePix: string): void{
        this.chavePix = chavePix;
    }
    //---------------------------------------
    private data_criacao: Date;

    public getData_Criacao(): Date{
        return this.data_criacao;
    }
    //---------------------------------------

    public depositar(valor: number){
        if(valor <= 0){
            console.log("Por favor, insira um valor válido.")
            return;
        }
           
        this.saldo += valor;
        console.log(`Deposito realizado com sucesso. /n Seu saldo é de: ${this.getSaldo()}`)
        
    }


    public sacar(valor: number){
        if(valor < this.saldo || this.saldo <= 0){
            console.log("Não é possivel sacar o dinheiro. /n  Por favor, verifique as informaçoes.")
            return;
        }

        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso. /n O saldo da sua conta é de: R$${this.getSaldo()}`);
    }

    public consultarSaldo(){
        console.log(`Seu saldo é de: R$ ${this.getSaldo()}`)
    }


    public exibirCliente(){
        console.log(`
        Cliente: ${this.getTitularConta()} (CPF: ${this.titularConta.cpf}, Data de nascimento: ${this.titularConta.dataNascimento})
        Saldo: ${this.getSaldo()}
        Chave pix: ${this.getChavePix()}
        Numero da conta: ${this.getNumeroConta()}
        Data de criação: ${this.getData_Criacao()}
        `)
    }
}