var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", ()=>{ //Um evento no botão
    var xhr = new XMLHttpRequest(); // Responsavel por fazer requisições no HTML

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", ()=>{
        var erroAjax = document.querySelector("#erro-ajax");

        //Tratando caso de algum erro no status
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach((paciente) => {
                adicionaPacieteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        
        
    });

    xhr.send();
})


//    http://api-pacientes.herokuapp.com/pacientes