
import Dono from "./semana01/Dono";
import Cachorro from "./semana01/Cachorro";
import TitularConta from "./semana02/TitularConta";
import ContaBancaria from "./semana02/ContaBancaria";

// var dono = new Dono();
// var cachorro = new Cachorro("Marcio", "Caramelo", "Marrom","Médio", dono);

// cachorro.exibirCachorro();
// cachorro.exibirDono();

var titularConta = new TitularConta("Pailulito", "12/09/2002", "123.123.456.234.65");

var contaBancaria = new ContaBancaria(titularConta, "12341314542355@gmail.com");

contaBancaria.depositar(30000);
contaBancaria.sacar(35000);


contaBancaria.exibirCliente();
