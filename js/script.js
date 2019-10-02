const botaoAdd = document.getElementById("ativaBotao");

const lista = document.getElementById("lista");

const erro = document.querySelector (".meu-erro");

const btnFeito = document.querySelector (".bnt1");

const btnExcluir = document.querySelector (".bnt2");

botaoAdd.addEventListener("click", function(evento) {
    evento.preventDefault();

    // console.log('botao clicado');

    const inputUsuario = document.getElementById("novaTarefa");

    let mensagem = inputUsuario.value;

    if (mensagem.trim() === ""){
        
        erro.textContent = "Informe a nova tarefa";
     
    } else {
        erro.textContent = "";

        let novoItem = document.createElement("div");
        lista.appendChild(novoItem);
        novoItem.classList.add("novoItem");
        novoItem.setAttribute("class", "novoItem");

        novoItem.setAttribute("draggable", "true");

        // novoItem.setAttribute("ondragstart", "dragStart(event)");
        // novoItem.setAttribute("ondragover", "overAction(event)");
        // novoItem.setAttribute("ondrop", "dropAction(event)");

                    
        let tarefa = document.createElement("p");
        tarefa.textContent = mensagem;        
        novoItem.appendChild(tarefa);
        tarefa.classList.add("tarefaColor");
        tarefa.setAttribute("draggable", "true");

        tarefa.addEventListener("click", function() {            
            if(tarefa.classList.contains("feito")) {                
                tarefa.classList.remove("feito")            
            } else {
                tarefa.classList.add("feito");
            }
        })
         
        let xDesfazer = document.createElement("span");    
        xDesfazer.textContent = "x";
        novoItem.appendChild(xDesfazer);
        xDesfazer.setAttribute("draggable", "true");

        xDesfazer.addEventListener("click", function() {
            lista.removeChild(novoItem);
        })    

        btnFeito.addEventListener ("click", function (evento) {
            evento.preventDefault();

            if(tarefa.classList.contains("feito")) {                
                tarefa.classList.remove("feito")            
            } else {
                tarefa.classList.add("feito");
            }
        })

        btnExcluir.addEventListener("click", function (evento) {
            evento.preventDefault();
            lista.removeChild(novoItem);
            })
      
    }  
    inputUsuario.value = "";

});

// function dragStart(event) {
//     event.dataTransfer.setData("text/plain", event.target.className);
//     console.log('event.target.className', event.target.className);
// }

// function overAction(event){
//     event.preventDefault();
// }

// function dropAction(event){
//     event.preventDefault();
//     const dados = event.dataTransfer.getData("text/plain");
//     const elemento = document.getElementsByClassName(dados);
//     try {
//         event.target.appendChild(elemento);
//     }
//     catch(error) {
//         console.error("não foi possivel completar o drop");
//     }
//     event.target.appendChild(elemento);
//     event.stopPropagation();
// }
    let evento 
    lista.addEventListener("dragstart", function(){
        evento = 
    })