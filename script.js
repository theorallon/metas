

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
            }

    

    let body = document.getElementById("body");

    let CaixaDeMetas = document.getElementById("CaixaDeMetas");

    let meta = document.createElement("ul");
    CaixaDeMetas.appendChild(meta);

    let tituloMeta = document.createElement("h3");
    tituloMeta.textContent = valorMeta;
    CaixaDeMetas.appendChild(tituloMeta);

    let botãoCriarObjetivo = document.createElement("button");
    botãoCriarObjetivo.textContent = "Criar objetivo";
    CaixaDeMetas.appendChild(botãoCriarObjetivo);
    botãoCriarObjetivo.addEventListener("click", function() {
        let objetivo = document.createElement("li");
        objetivo.textContent = "Novo objetivo";
        meta.appendChild(objetivo);
    });
}