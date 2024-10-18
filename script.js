let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  card.appendChild(overlay);

  card.style.backgroundImage =
    "url('https://64.media.tumblr.com/fe5a281a351c57d4b408f1e6b5b10675/9efd3591fba07f27-e8/s540x810/0c9cadc725097525f65687419b46128c78ec924f.gif')";

  overlay.style.display = "block";  // Exibir o overlay
  question.style.display = "none";  // Ocultar a pergunta
  message.style.display = "flex";   // Mostrar a resposta
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});
