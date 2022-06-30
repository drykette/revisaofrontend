var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando usado para commitar um arquivo para o git?");
    if(nome == "git commit"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio6.html";
  };