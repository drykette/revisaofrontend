var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando usado para adicionar um arquivo?");
    if(nome == "git add"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio5.html";
  };