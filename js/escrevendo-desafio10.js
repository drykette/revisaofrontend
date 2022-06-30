var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt("Qual comando é usado para puxar todas as atualizações da branch?");
    if(nome == "git pull"){
      alert(" " + nome + " é a resposta certa.\nParabéns você acertou!");
    }else{
      alert("Infelizmente você errou!\nVamos tentar novamente?");
      return;
    }
    window.location="final.html";
}