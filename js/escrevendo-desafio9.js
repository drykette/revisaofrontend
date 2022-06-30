var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual comando é usado para ver o historico de comandos no git?");
    if(nome == "git log"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio10.html";
}