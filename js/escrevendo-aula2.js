var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando usado para mostrar todos os repositorios remotos?");
    if(nome == "git remote"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="desafio3.html";
  };