console.log('aloka')

const botaoAdd = document.getElementById("ativaBotao");

const todosAsTarefas = document.getElementById("todasAstarefas");

const erro = document.querySelector (".meu-erro");

botaoAdd.addEventListener("click", function (evento) {
    evento.preventDefault();

console.log('botao clicado')

    const inputUsuario = document.getElementById("novaTarefa");

    let mensagem = inputUsuario.value;

    if (mensagem.trim() === "") {
        //monstrar erro
        erro.textContent = "Informe a nova tarefa";
     
    } else {
        erro.textContent = "";
        
        let comentario = document.createElement("p");
    
        comentario.textContent = mensagem;

        todosAsTarefas.appendChild(comentario);
      
        comentario.classList.add("tarefaColor");

    }  
    inputUsuario.value = "";
});