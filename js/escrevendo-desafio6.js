var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("'É o responsavel por subir todas as modificações para um repositório remoto'\nQual comando se encaixa nesse trecho?");
    if(nome == "git push"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio7.html";
  };