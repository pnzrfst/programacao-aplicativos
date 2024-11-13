
document.getElementById('btn-return').addEventListener('click', () =>{
    (window as any).navigationApi.voltarHomepage()
})

window.onload = async() =>{
    const id = new URLSearchParams(window.location.search).get("id");
    const veiculo = (window as any).dbAPI.procurarVeiculo(id);
    console.log(id)
    console.log(veiculo)

    const main = document.querySelector('main');
    main.innerHTML = ""
    main.innerHTML += `
    <div class="veiculo">
    <span>
      <img src= ${veiculo.imagem}>
      <div class="infosVeiculo">
        <h1>${veiculo.modelo}</h1>
        <p>${String(veiculo.preco)}</p>
      </div>
    </span>
  </div>`
} 