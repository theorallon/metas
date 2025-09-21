

function criarMeta() {
    //Cria a variável mensagem e define seu feedback
    let mensagemConfirmação = "Obejetivo adicionado com sucesso!";
    let mensagemErro = "Nenhum objetivo para adcionar!";

    let inputMeta = document.getElementById("inputMeta");

    let valorMeta = inputMeta.value.trim();

            if (valorMeta === ""){
                  document.getElementById("mensagem").textContent = mensagemErro;
            }  else {
            document.getElementById("mensagem").textContent = mensagemConfirmação;
            let body = document.getElementById("body");

    let CaixaDeMetas = document.getElementById("CaixaDeMetas");

    let meta = document.createElement("ul");
    CaixaDeMetas.appendChild(meta);

    let tituloMeta = document.createElement("h3");
    tituloMeta.textContent = valorMeta;
    meta.appendChild(tituloMeta);

    let icone = document.createElement("ion-icon")
            //atribuindo o icone lixeira a tag icone
            icone.setAttribute("name", "trash-bin-outline");

            //conectando ela ao item da lista
            tituloMeta.appendChild(icone)

            icone.addEventListener('click', excluirItem)

             // função para remover item da lista
            function excluirItem(){
            meta.remove()
                let mensagemExcluirMeta = "Meta excluida"
                document.getElementById("mensagem").textContent = mensagemExcluirMeta;
            }


            

    //cria a variavel do botão que cria objetivos
    let botãoCriarObjetivo = document.createElement("button");
    //define o que tem escrito dentro do botão
    botãoCriarObjetivo.textContent = "Criar objetivo";
    //define que o botão deve ser criado dentro da tag 
    meta.appendChild(botãoCriarObjetivo);

    //adiciona a função do que acontece quando o botão "botão criar objeto faz"
    botãoCriarObjetivo.addEventListener("click", function() {
        let objetivo = document.createElement("li");
        objetivo.textContent = "Novo objetivo";
        meta.appendChild(objetivo);
    });
    inputMeta.value = ""

    

            }

    

    
}