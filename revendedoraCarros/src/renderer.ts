/*s
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import Veiculo from './models/Veiculo';

// window.addEventListener("ready", (event) => {
//   const veiculos = (window as any).dbAPI.mostrarVeiculo()
//   console.log(veiculos)
// })


const listaDeVeiculos: Veiculo[] = []

window.onload = async() =>{
  
  const veiculos = await(window as any).dbAPI.mostrarVeiculo();
  console.log(veiculos)
  const ulVeiculos = document.getElementById('mostrarVeiculos');
  ulVeiculos.innerHTML = ''

  veiculos.forEach((posicao : number) => {
      const veiculo = new Veiculo(
       veiculos[posicao].modelo,
       veiculos[posicao].cor,
       veiculos[posicao].ano,
       veiculos[posicao].preco,
       veiculos[posicao].imagem
      )
      
      listaDeVeiculos.push(veiculo)

      for(var i = 0; i < listaDeVeiculos.length; i++){
        ulVeiculos.innerHTML += 
        `<li class="veiculo">
              <span>
                <img src= ${listaDeVeiculos[i].getImagem()}>
                <div class="infosVeiculo">
                  <h1>${listaDeVeiculos[i].getModelo()}</h1>
                  <p>${String(listaDeVeiculos[i].getPreco())}</p>
                  <div class="btns-veiculo">
                    <button id="verVeiculo">Ver detalhes</button>
                    <button id="apagarVeiculo">Apagar</button>
                  </div>
                </div>
              </span>
            </li>`
      }
  });  
};

document.getElementById('salvarCadastro').addEventListener("click", (event: MouseEvent) =>{
    event.preventDefault()
    const modelo = document.getElementById("modeloVeiculo") as HTMLInputElement;
    const corVeiculo = document.getElementById("corVeiculo") as HTMLInputElement;
    const anoVeiculo = document.getElementById("anoVeiculo") as HTMLInputElement;
    const precoVeiculo = document.getElementById("precoVeiculo") as HTMLInputElement;
    const fotoVeiculo = document.getElementById("fotoVeiculo") as HTMLInputElement;
    
    const novoVeiculo = new Veiculo(modelo.value, corVeiculo.value, Number(anoVeiculo.value), Number(precoVeiculo.value), fotoVeiculo.value);

    listaDeVeiculos.push(novoVeiculo);
    (window as any).dbAPI.criaVeiculo(novoVeiculo)

    modelo.innerHTML = ""
    corVeiculo.innerHTML = ""
    anoVeiculo.innerHTML = ""
    precoVeiculo.innerHTML = ""
    fotoVeiculo.innerHTML = ""

    const listarVeiculos = document.getElementById('mostrarVeiculos');
    listarVeiculos.innerHTML = ""

})

console.log('👋 This message is being logged by "renderer.js", included via webpack');
