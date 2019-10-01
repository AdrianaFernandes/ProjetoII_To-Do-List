const botaoAdd = document.getElementById("ativaBotao");;
const lista = document.getElementById("lista");

const erro = document.querySelector (".meu-erro");

botaoAdd.addEventListener("click", function (evento) {
    evento.preventDefault();

    console.log('botao clicado');

    const inputUsuario = document.getElementById("novaTarefa");

    let mensagem = inputUsuario.value;

    if (mensagem.trim() === "") {
        //monstrar erro
        erro.textContent = "Informe a nova tarefa";
     
    } else {
        erro.textContent = "";

        let novoItem = document.createElement("div");
        lista.appendChild(novoItem);
        novoItem.classList.add("novoItem");
                    
        let tarefa = document.createElement("p");
        tarefa.textContent = mensagem;        novoItem.appendChild(tarefa);
        tarefa.classList.add("tarefaColor");
        
        tarefa.addEventListener("click", function() {            if(tarefa.classList.contains("feito")) {                tarefa.classList.remove("feito")            } else {
                tarefa.classList.add("feito");
            }
        })
             
        let xDesfazer = document.createElement("span");    
        xDesfazer.textContent = "x";
        novoItem.appendChild(xDesfazer);

        xDesfazer.addEventListener("click", function() {
            lista.removeChild(novoItem);
        })
        
    }  
    inputUsuario.value = "";
});