function funcaoCalcular() {
    let peso = parseFloat(document.getElementById("inputP").value);
    let altura = parseFloat(document.getElementById("inputA").value);

    let IMC = peso / (altura * altura);
    let classifica="";

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if (peso < 0 || altura < 0) {
        footer.classList.add("erro");
        mensagem.innerHTML = "peso e altura precisam ser números positivos";
        document.getElementById("respIMC").innerHTML = "-";
    }else if(peso = ""){
        footer.classList.add("erro");
        focus.getElementById("inputP")
        document.getElementById("respIMC").innerHTML = "-";
    } else if(peso = ""){
        footer.classList.add("erro");
        focus.getElementById("inputA")
        document.getElementById("respIMC").innerHTML = "-";
    }else {
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";
    }
    if(IMC<18,5){
        classifica="Abaixo do peso"
    }else if(IMC<25){
        classifica="Peso normal"
    }else if(IMC<30){
        classifica="Sobrepeso"
    }else if(IMC<35){
        classifica="Obesidade grau I"
    }else if(IMC<40){
        classifica="Obesidade grau II"
    }else{
        classifica="Obesidade grau III"
    }
    document.getElementById("respIMC").innerHTML =IMC.toFixed(2) +";"+ classifica;
}