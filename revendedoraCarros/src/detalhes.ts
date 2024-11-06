
document.getElementById('btn-return').addEventListener('click', () =>{
    (window as any).dbAPI.voltarHomepage()
})

window.onload = () =>{
    const id = new URLSearchParams(window.location.search).get("id");
    const veiculo = (window as any).dbAPI.procurarVeiculo(id);
    console.log(id)


    const main = document.querySelector('main');
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