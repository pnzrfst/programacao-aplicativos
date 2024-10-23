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

const listaDeVeiculos: any = []

document.getElementById('salvarCadastro').addEventListener("click", (event: MouseEvent) =>{
    event.preventDefault()
    const modelo = document.getElementById("modeloVeiculo") as HTMLInputElement;
    const corVeiculo = document.getElementById("corVeiculo") as HTMLInputElement;
    const anoVeiculo = document.getElementById("anoVeiculo") as HTMLInputElement;
    const precoVeiculo = document.getElementById("precoVeiculo") as HTMLInputElement;
    const fotoVeiculo = document.getElementById("fotoVeiculo") as HTMLInputElement;

    const novoCarro = {
        modelo: modelo.value,
        cor: corVeiculo.value,
        ano: anoVeiculo.value,
        preco: precoVeiculo.value,
        foto: fotoVeiculo.value
    }
    
    listaDeVeiculos.push(novoCarro);

    modelo.innerHTML = ""
    corVeiculo.innerHTML = ""
    anoVeiculo.innerHTML = ""
    precoVeiculo.innerHTML = ""
    fotoVeiculo.innerHTML = ""

    const listarVeiculos = document.getElementById('mostrarVeiculos');
    listarVeiculos.innerHTML = ""

    for(var i = 0; i <listaDeVeiculos.length; i++){
        listarVeiculos.innerHTML += 
        `<li class="veiculo">
              <span>
                <img src= ${listaDeVeiculos[i].foto}>
                <div class="infosVeiculo">
                  <h1>${listaDeVeiculos[i].modelo}</h1>
                  <p>${listaDeVeiculos[i].preco}</p>
                  <div class="btns-veiculo">
                    <button id="verVeiculo">Ver detalhes</button>
                    <button id="apagarVeiculo">Apagar</button>
                  </div>
                </div>
              </span>
            </li>`
    }
})

console.log('👋 This message is being logged by "renderer.js", included via webpack');
