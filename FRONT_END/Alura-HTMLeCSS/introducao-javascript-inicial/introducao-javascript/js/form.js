//Para adicionar um novo paciente na tabela

botao.addEventListener("click", (event)=>{
    event.preventDefault(); // Previne o evento que vai acontecer
    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacieteNaTabela(paciente);

    form.reset(); //Limpar o formualario logo apos clicar no botão "Adicionar"
    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML ="";
});

function adicionaPacieteNaTabela(paciente){
    //Montar a TR do paciente na tabela
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";   //Permite você controlar o elemento interno de um HTML
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dados, classe){
    var td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O campo peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("O campo altura não pode ser em branco");
    }

    return erros;
}