var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("'É o comando utilizado para trocar de uma branch para outra.'\nQual comando se encaixa nesse trecho?");
    if(nome == "git checkout"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio9.html";
}