
import TitularConta from "./semana02/TitularConta";
import ContaBancaria from "./semana02/ContaBancaria";
import ContaCorrente from "./semana03/ContaCorrente";
import Banco from "./semana03/Banco";
import leia from 'readline-sync'
// var dono = new Dono();
// var cachorro = new Cachorro("Marcio", "Caramelo", "Marrom","Médio", dono);

// cachorro.exibirCachorro();
// cachorro.exibirDono();

// var titularConta = new TitularConta("Pailulito", "12/09/2002", "123.123.456.234.65");

// var contaBancaria = new ContaBancaria(titularConta, "12341314542355@gmail.com");

 var titular = new TitularConta("Luiz", "03/04/2003", "100.267.649-54")
 var contaCorrente = new ContaCorrente(titular, "1234lskokwo@");
 contaCorrente.depositar(10);
 contaCorrente.sacar(100);
 contaCorrente.exibirCliente()

// var banco = new Banco();

// var opcao = 0;
// do{
//     console.log("---------------MENU--------------");
//     opcao = leia.keyInSelect(["CRIAR CONTA", "MOSTRAR CONTAS", "DELETAR CONTA"])+1
//     switch(opcao){
//         case 1: 
//             console.log("---------------CRIANDO CONTA--------------");
//             banco.adicionarContas();
//         break;

//         case 2: 
//             console.log("----------------MOSTRAR CONTA---------------")
//             banco.mostrarConta()
//         break;
        
//         case 3:
//             console.log("---------------DELETANDO A CONTA...........----------");
//              banco.deletarContas();
//         break;
//     }  

// }while(opcao != 0);

// banco.adicionarContas()