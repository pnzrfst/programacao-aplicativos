
import Dono from "./Dono";
import Cachorro from "./Cachorro";
import TitularConta from "./TitularConta";
import ContaBancaria from "./ContaBancaria";

// var dono = new Dono();
// var cachorro = new Cachorro("Marcio", "Caramelo", "Marrom","Médio", dono);

// cachorro.exibirCachorro();
// cachorro.exibirDono();

var titularConta = new TitularConta("todserjaeum", "03/03/1932", "123.323.677-95");

var contaBancaria = new ContaBancaria(titularConta, "12345@gmail.com");

contaBancaria.depositar(15000);
contaBancaria.sacar(2134);


contaBancaria.exibirCliente();
