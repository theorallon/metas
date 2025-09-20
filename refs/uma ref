function adicionarTarefa() {

            // Cria a variável "mensagem" e define o texto de feedback
            let mensagem = "Tarefa adicionada com sucesso!";
            let mensagemErro = "Nada para adicionar na lista!";

            // Cria a variável "tarefa" e atribui a ela o valor digitado no input
            let inputTarefa = document.getElementById("inputTarefa");

            let body = document.getElementById("body");

            //Cria a variável "tarefa", e denomina seu valor como o valor do "inputTarefa" para podermos ver o que tem dentro do input
            let tarefa = inputTarefa.value.trim();

            if (tarefa === ""){
                  // Seleciona o <p id="mensagem"> e altera seu conteúdo de texto para a variável "mensagemErro"
                  document.getElementById("mensagem").textContent = mensagemErro;
            }  else {
            // Seleciona o <p id="mensagem"> e altera seu conteúdo de texto para a variável "mensagem"
            document.getElementById("mensagem").textContent = mensagem;

            //Cria a variável "listaTarefas" e conecta ela a lista (<ul id="listaTarefas">) 
            let listaTarefas = document.getElementById("listaTarefas");

            //Cria a variável "novaTarefa", e cria uma tag <li> 
            let novaTarefa = document.createElement("li");

            // Define o conteúdo de texto da <li> como a variável "tarefa"
            novaTarefa.textContent = tarefa;

            //faz com que o <li> entre no <ul> e vire um elemento filho (respeitando a hieraquia do HTML)
            listaTarefas.appendChild(novaTarefa);

            //criando icone da lixeira
            let icone = document.createElement("ion-icon")
            //atribuindo o icone lixeira a tag icone
            icone.setAttribute("name", "trash-bin-outline");

            //conectando ela ao item da lista
            novaTarefa.appendChild(icone)

            icone.addEventListener('click', excluirItem)

             // função para remover item da lista
            function excluirItem(){
            novaTarefa.remove()
            
            }

            // Limpa o campo de entrada após adicionar a tarefa
            inputTarefa.value = ""
            }

            
    }
