var titulo = document.querySelector(".container");

var pacientes = document.querySelectorAll(".paciente");

var botao = document.querySelector("#adicionar-paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");// Adicionando uma cor invalida em toda linha pelo CSS.
    }

    if(!alturaEhValida){
        console.log("Altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;// informar com quantas casas decimais quer que o valor seja apresentado
    }
}

//Validar o peso
function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return  true;
    }else{
        return false;
    }
}


//validar a Altura
function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

//Calcular o Imc
function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}








// botao.addEventListener("click", (event)=> { //ler o evento que vai acontecer ao ser clicado no botão
//     event.preventDefault(); // Previne o evento que vai acontecer
//     console.log("Olá eu fui clicado");
// });