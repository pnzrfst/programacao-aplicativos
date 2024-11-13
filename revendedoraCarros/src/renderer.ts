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

var listaDeVeiculos: Veiculo[] = []



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

    modelo.value = ""
    corVeiculo.value = ""
    anoVeiculo.value = ""
    precoVeiculo.value = ""
    fotoVeiculo.value = ""

  mostrarVeiculos()
})

window.onload = async() =>{
  const veiculos = await(window as any).dbAPI.mostrarVeiculo();
  console.log(veiculos)
  
  veiculos.forEach((veiculo : any) =>{
    const novoVeiculo = new Veiculo(
      veiculo.modelo_veiculo,
      veiculo.cor_veiculo,
      veiculo.ano,
      parseFloat(veiculo.preco_veiculo),
      veiculo.foto_veiculo,
      veiculo.id
    );

    listaDeVeiculos.push(novoVeiculo);
  });

  mostrarVeiculos()

};

function mostrarVeiculos(){
  const ulVeiculos = document.getElementById('mostrarVeiculos');
  ulVeiculos.innerHTML = ""
  for(var i = 0; i < listaDeVeiculos.length; i++){
    ulVeiculos.innerHTML += 
    `<li class="veiculo">
          <span>
            <img src= ${listaDeVeiculos[i].getImagem()}>
            <div class="infosVeiculo">
              <h1>${listaDeVeiculos[i].getModelo()}</h1>
              <p>${String(listaDeVeiculos[i].getPreco())}</p>
              <div class="btns-veiculo">
                <button id="verVeiculo" onclick="verDetalhes('${listaDeVeiculos[i].getId()}')">Ver detalhes</button>
                <button id="apagarVeiculo" onclick="deletarVeiculo('${listaDeVeiculos[i].getId()}')">Apagar</button>
              </div>
            </div>
          </span>
        </li>`
      
  }
}

async function deletarVeiculo(id: string){
  (window as any).dbAPI.deletarVeiculo(id);
  
  listaDeVeiculos = listaDeVeiculos.filter(veiculo => veiculo.getId() !== id);
  mostrarVeiculos();
}


function verDetalhes(id: string){
  (window as any).navigationApi.verDetalhes(id);
}


(window as any).deletarVeiculo = deletarVeiculo;
(window as any).verDetalhes = verDetalhes




console.log('👋 This message is being logged by "renderer.js", included via webpack');
