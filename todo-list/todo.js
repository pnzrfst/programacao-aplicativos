const tarefas = [];

const adicionarTarefas = ()=>{
    const inputWrite_bar = document.getElementById('escrevaTarefa');
    const $tarefaCriada = document.getElementById('escrevaTarefa').value.trim();

    if($tarefaCriada === null || $tarefaCriada === ""){
        window.alert("Você digitou uma tarefa vazia, favor, revise as informações.");
        return
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 1000),
        texto: $tarefaCriada,
        completed: false
    }

    tarefas.push(novaTarefa)

    inputWrite_bar.value = "";

    inputWrite_bar.focus()

    console.log(tarefas);

}


const mostrarTarefas = ()=>{
    const $listaDeTarefas = document.getElementById('mostrarTarefa');
    
    for(let i = 0; i < $listaDeTarefas.length; i++){

        const tarefa = document.createElement("div");
        const li = document.createElement("li");
        const spanLi = document.createElement("span");

        if(tarefas[i].completed === true){
            itemLista.classList.add("completed");
        }

        spanLi.textContent = tarefas[i].text;
        
        const adicionarNovaTarefa = document.createElement('span');
        adicionarNovaTarefa.className = 'material-symbols-outlined';
        adicionarNovaTarefa.id = 'adicionarTarefa';
        adicionarNovaTarefa.setAttribute('completed', 'true');
        adicionarNovaTarefa.textContent = 'add';

        const excluirTarefa = document.createElement('span');
        excluirTarefa.className = 'material-symbols-outlined';
        excluirTarefa.id = 'adicionarTarefa';
        excluirTarefa.setAttribute('completed', 'true');
        excluirTarefa.textContent = 'add';

        const marcarTarefaConcluida = document.createElement('span');
        marcarTarefaConcluida.className = 'material-symbols-outlined';
        marcarTarefaConcluida.id = 'adicionarTarefa';
        marcarTarefaConcluida.setAttribute('completed', 'true');
        marcarTarefaConcluida.textContent = 'add';

        const span_btns = document.createElement('div');

        span_btns.appendChild(adicionarNovaTarefa, excluirTarefa, marcarTarefaConcluida);

        itemLista.appendChild(spanLista,span_btns);
        
    }
}

