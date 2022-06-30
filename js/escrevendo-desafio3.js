var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando usado para ver as informações sobre versionamento?");
    if(nome == "git status"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio4.html";
  };