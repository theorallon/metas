

function criarMeta() {
    //Cria a variável mensagem e define seu feedback
    let mensagemConfirmação = "Meta adicionado com sucesso!";
    let mensagemErro = "Nenhuma meta para adcionar!";

    let inputMeta = document.getElementById("inputMeta");

    let valorMeta = inputMeta.value.trim();

    if (valorMeta === "") {
        document.getElementById("mensagem").textContent = mensagemErro;
    } else {
        document.getElementById("mensagem").textContent = mensagemConfirmação;
        let body = document.getElementById("body");

        let CaixaDeMetas = document.getElementById("CaixaDeMetas");

        let meta = document.createElement("section");
        CaixaDeMetas.appendChild(meta);

        let tituloMeta = document.createElement("h3");
        tituloMeta.textContent = valorMeta;
        meta.appendChild(tituloMeta);


        //criação barra de progresso
        let barraContainer = document.createElement("div");
        barraContainer.classList.add("barra-container");

        let barra = document.createElement("div");
        barra.classList.add("barra");

        barraContainer.appendChild(barra);
        meta.appendChild(barraContainer);





        let icone = document.createElement("ion-icon")
        //atribuindo o icone lixeira a tag icone
        icone.setAttribute("name", "trash-bin-outline");

        //conectando ela ao item da lista
        tituloMeta.appendChild(icone)

        icone.addEventListener('click', excluirItem)

        // função para remover item da lista
        function excluirItem() {
            meta.remove()
            let mensagemExcluirMeta = "Meta excluida"
            document.getElementById("mensagem").textContent = mensagemExcluirMeta;
        }

        let setaObjetivos = document.createElement("details");
        meta.appendChild(setaObjetivos);

        let textoSeta = document.createElement("summary");
        textoSeta.textContent = "";
        setaObjetivos.appendChild(textoSeta);

        let listaDeObjetivos = document.createElement("ul");
        setaObjetivos.appendChild(listaDeObjetivos);


        let caixaCriarObjeto = document.createElement("div");
        caixaCriarObjeto.id = ("caixaCriarObjeto");
        listaDeObjetivos.appendChild(caixaCriarObjeto);

        let inputCriarObjetivo = document.createElement("input");
        inputCriarObjetivo.type = "text";
        inputCriarObjetivo.placeholder = "Digite um objetivo";
        inputCriarObjetivo.id = "inputCriarObjetivo";
        caixaCriarObjeto.appendChild(inputCriarObjetivo);

        //cria a variavel do botão que cria objetivos
        let botãoCriarObjetivo = document.createElement("button");
        //define o que tem escrito dentro do botão
        botãoCriarObjetivo.textContent = "Criar objetivo";
        botãoCriarObjetivo.id = "botãoCriarObjetivo";
        //define que o botão deve ser criado dentro da tag 
        caixaCriarObjeto.appendChild(botãoCriarObjetivo);

        //adiciona a função do que acontece quando o botão "botão criar objeto faz"
        botãoCriarObjetivo.addEventListener("click", function () {

            let mensagemConfirmaçãoObjetivo = "Obejetivo adicionado com sucesso!";
            let mensagemErroObjetivo = "Nenhum objetivo para adcionar!";
            let mensagemObjetivoExcluido = "Objetivo Excluido!"


            let valorObjetivo = inputCriarObjetivo.value.trim();

            if (valorObjetivo === "") {
                let mensagemObjetivo = document.createElement("p")
                mensagemObjetivo.id = "mensagemObjetivo"
                meta.appendChild(mensagemObjetivo)
                document.getElementById("mensagemObjetivo").textContent = mensagemErroObjetivo;
            } else {
                let objetivo = document.createElement("li");
                listaDeObjetivos.appendChild(objetivo);
                let inputCheckboxObjetivo = document.createElement("input");
                inputCheckboxObjetivo.type = "checkbox";
                inputCheckboxObjetivo.id = "inputCheckboxObjetivo";
                objetivo.appendChild(inputCheckboxObjetivo)
                let labelCheckbox = document.createElement("label");
                labelCheckbox.textContent = valorObjetivo;
                objetivo.appendChild(labelCheckbox)


                let mensagemObjetivo = document.createElement("p")
                mensagemObjetivo.id = "mensagemObjetivo"
                meta.appendChild(mensagemObjetivo)
                document.getElementById("mensagemObjetivo").textContent = mensagemConfirmaçãoObjetivo;

                // Excluir objeto
                let icone = document.createElement("ion-icon")
                //atribuindo o icone lixeira a tag icone
                icone.setAttribute("name", "trash-bin-outline");

                //conectando ela ao item da lista
                objetivo.appendChild(icone)

                icone.addEventListener('click', excluirItem)

                // função para remover item da lista
                function excluirItem() {
                    objetivo.remove()
                    document.getElementById("mensagemObjetivo").textContent = mensagemObjetivoExcluido;
                }

                //atualização de progresso
                inputCheckboxObjetivo.addEventListener("change", function () {
                    let checkboxes = listaDeObjetivos.querySelectorAll("input[type='checkbox']");
                    let marcadas = listaDeObjetivos.querySelectorAll("input[type='checkbox']:checked");
                    let porcentagem = (marcadas.length / checkboxes.length) * 100;





                    barra.style.width = porcentagem + "%";
                });
            }

            inputCriarObjetivo.value = ""

        });


        inputMeta.value = ""

    }




}