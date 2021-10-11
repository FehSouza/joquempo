const $jogadorGanhador = document.querySelector(".ganhador-txt");

const $placarJogador1 = document.querySelector(".jogador1-placar-txt");
const $placarJogador2 = document.querySelector(".jogador2-placar-txt");

const $botaoPedra1 = document.querySelector(".botao-pedra-jogador1");
const $botaoPedra2 = document.querySelector(".botao-pedra-jogador2");

const $botaoPapel1 = document.querySelector(".botao-papel-jogador1");
const $botaoPapel2 = document.querySelector(".botao-papel-jogador2");

const $botaoTesoura1 = document.querySelector(".botao-tesoura-jogador1");
const $botaoTesoura2 = document.querySelector(".botao-tesoura-jogador2");

const $jogoJogador1 = document.querySelector(".jogo-jogador1");
const $jogoJogador2 = document.querySelector(".jogo-jogador2");

const $botaoIniciar = document.querySelector(".botao-iniciar");
const $botaoResetar = document.querySelector(".botao-resetar");

desabilitarBotoes1();
desabilitarBotoes2();

$botaoIniciar.addEventListener("click", function () {
  habilitarBotoes1();
  habilitarBotoes2();
  $botaoIniciar.disabled = true;
  $botaoResetar.disabled = false;
  $jogadorGanhador.innerHTML = "Aguardando jogada!";
});

$botaoResetar.addEventListener("click", function () {
  apagarJogadas();
  desabilitarBotoes1();
  desabilitarBotoes2();
  apagarPlacar();
  $botaoIniciar.disabled = false;
  $botaoResetar.disabled = true;
});

$botaoPedra1.addEventListener("click", function () {
  jogarPedra(true);
  desabilitarBotoes1();
});

$botaoPedra2.addEventListener("click", function () {
  jogarPedra(false);
  desabilitarBotoes2();
});

$botaoPapel1.addEventListener("click", function () {
  jogarPapel(true);
  desabilitarBotoes1();
});

$botaoPapel2.addEventListener("click", function () {
  jogarPapel(false);
  desabilitarBotoes2();
});

$botaoTesoura1.addEventListener("click", function () {
  jogarTesoura(true);
  desabilitarBotoes1();
});

$botaoTesoura2.addEventListener("click", function () {
  jogarTesoura(false);
  desabilitarBotoes2();
});

let resultado1 = "";
let resultado2 = "";

function jogarPedra(jogador) {
  let imgPedra = document.createElement("img");
  imgPedra.setAttribute("src", "pedra.png");
  imgPedra.style.width = "300px";

  if (jogador) {
    $jogoJogador1.innerHTML = "";
    $jogoJogador1.appendChild(imgPedra);
    resultado1 = "Pedra";
  } else {
    $jogoJogador2.innerHTML = "";
    $jogoJogador2.appendChild(imgPedra);
    resultado2 = "Pedra";
  }

  jogo();
}

function jogarPapel(jogador) {
  let imgPapel = document.createElement("img");
  imgPapel.setAttribute("src", "papel.png");
  imgPapel.style.width = "300px";

  if (jogador) {
    $jogoJogador1.innerHTML = "";
    $jogoJogador1.appendChild(imgPapel);
    resultado1 = "Papel";
  } else {
    $jogoJogador2.innerHTML = "";
    $jogoJogador2.appendChild(imgPapel);
    resultado2 = "Papel";
  }

  jogo();
}

function jogarTesoura(jogador) {
  let imgTesoura = document.createElement("img");
  imgTesoura.setAttribute("src", "tesoura.png");
  imgTesoura.style.width = "300px";

  if (jogador) {
    $jogoJogador1.innerHTML = "";
    $jogoJogador1.appendChild(imgTesoura);
    resultado1 = "Tesoura";
  } else {
    $jogoJogador2.innerHTML = "";
    $jogoJogador2.appendChild(imgTesoura);
    resultado2 = "Tesoura";
  }

  jogo();
}

function desabilitarBotoes1() {
  $botaoPedra1.disabled = true;
  $botaoPapel1.disabled = true;
  $botaoTesoura1.disabled = true;
}

function desabilitarBotoes2() {
  $botaoPedra2.disabled = true;
  $botaoPapel2.disabled = true;
  $botaoTesoura2.disabled = true;
}

function habilitarBotoes1() {
  $botaoPapel1.disabled = false;
  $botaoPedra1.disabled = false;
  $botaoTesoura1.disabled = false;
}

function habilitarBotoes2() {
  $botaoPedra2.disabled = false;
  $botaoPapel2.disabled = false;
  $botaoTesoura2.disabled = false;
}

let contador1 = Number($placarJogador1.textContent);
let contador2 = Number($placarJogador2.textContent);

function apagarJogadas() {
  $jogoJogador1.innerHTML = "";
  $jogoJogador2.innerHTML = "";
}

function apagarPlacar() {
  $jogadorGanhador.innerHTML = `Aguardando iniciar!`;
  $placarJogador1.innerHTML = `0`;
  $placarJogador2.innerHTML = `0`;
  contador1 = 0;
  contador2 = 0;
}

function jogo() {
  if (($jogoJogador1.innerHTML !== "") & ($jogoJogador2.innerHTML !== "")) {
    if (
      (resultado1 === "Pedra") & (resultado2 === "Pedra") ||
      (resultado1 === "Papel") & (resultado2 === "Papel") ||
      (resultado1 === "Tesoura") & (resultado2 === "Tesoura")
    ) {
      $jogadorGanhador.innerHTML = "Empate!";
    } else if (
      (resultado1 === "Pedra") & (resultado2 === "Tesoura") ||
      (resultado1 === "Papel") & (resultado2 === "Pedra") ||
      (resultado1 === "Tesoura") & (resultado2 === "Papel")
    ) {
      $jogadorGanhador.innerHTML = "Jogador 1 ganhou!";
      contador1++;
      $placarJogador1.innerHTML = contador1;
    } else if (
      (resultado2 === "Pedra") & (resultado1 === "Tesoura") ||
      (resultado2 === "Papel") & (resultado1 === "Pedra") ||
      (resultado2 === "Tesoura") & (resultado1 === "Papel")
    ) {
      $jogadorGanhador.innerHTML = "Jogador 2 ganhou!";
      contador2++;
      $placarJogador2.innerHTML = contador2;
    }

    setTimeout(function () {
      apagarJogadas();
      habilitarBotoes1();
      habilitarBotoes2();
    }, 3000);
  }
}
