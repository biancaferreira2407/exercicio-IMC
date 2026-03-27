function funcaoCalcular() {
    let peso = parseFloat(document.getElementById("inputP").value);
    let altura = parseFloat(document.getElementById("inputA").value);

    let IMC = peso / (altura * altura);
    let classifica="";

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

     if (peso < 2.5 || altura < 0.25) {
        footer.classList.add("erro");
        mensagem.innerHTML = "peso e altura precisam ser números positivos válidos";
        document.getElementById("respIMC").innerHTML = "-";
    } else if (!isNaN(peso) && isFinite(peso) && !isNaN(altura) && isFinite(altura)) {
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";
        if(IMC>40){
            classifica="Obesidade grau III"
        }else if(IMC>35){
            classifica="Obesidade grau II"
        }else if(IMC>30){
            classifica="Obesidade grau I"
        }else if(IMC>25){
            classifica="Sobrepeso"
        }else if(IMC>18.5){
            classifica="Peso normal"
        }else{
            classifica="Abaixo do peso"
        }
    
        document.getElementById("respIMC").innerHTML =IMC.toFixed(2) +";"
        document.getElementById("respClass").innerHTML= classifica;
    }else {
        footer.classList.add("erro");
        mensagem.innerHTML = "peso e altura precisam estar com valores numéricos";
        document.getElementById("respIMC").innerHTML = "-";
    }

}
