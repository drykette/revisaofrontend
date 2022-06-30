var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("'É usado para verificar todas as branches presentes em um repositório'\nQual comando se encaixa nesse trecho?");
    if(nome == "git branch"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio8.html";
}