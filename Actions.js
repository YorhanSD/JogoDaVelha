var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("Jogador-Selecionado");
var vencedorSelecionado = document.getElementById("Vencedor-Selecionado");
var casa = document.getElementsByClassName("Quadrado");

mudarJogador("X");

function escolherQuadrado(id) {

    if (vencedor != null) {
        return;
    }

    console.log("Clicou no botão");

    var casa = document.getElementById(id);

    if (casa.innerHTML != "-") {
        return;
    }

    casa.innerHTML = jogador;
    casa.style.color = "#000";

    if (jogador == "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.style.fontSize = "30px";
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var casa1 = document.getElementById("Casa 1");
    var casa2 = document.getElementById("Casa 2");
    var casa3 = document.getElementById("Casa 3");
    var casa4 = document.getElementById("Casa 4");
    var casa5 = document.getElementById("Casa 5");
    var casa6 = document.getElementById("Casa 6");
    var casa7 = document.getElementById("Casa 7");
    var casa8 = document.getElementById("Casa 8");
    var casa9 = document.getElementById("Casa 9");

    if (sequencias(casa1, casa2, casa3)) {
        mudarCor(casa1, casa2, casa3);
        venceuPartida(casa1);
        return;
    }
    else if (sequencias(casa4, casa5, casa6)) {
        mudarCor(casa4, casa5, casa6);
        venceuPartida(casa4);
        return;
    }
    else if (sequencias(casa7, casa8, casa9)) {
        mudarCor(casa7, casa8, casa9);
        venceuPartida(casa7);
        return;
    }
    else if (sequencias(casa1, casa4, casa7)) {
        mudarCor(casa1, casa4, casa7);
        venceuPartida(casa1);
        return;
    }
    else if (sequencias(casa2, casa5, casa8)) {
        mudarCor(casa2, casa5, casa8);
        venceuPartida(casa2);
        return;
    }
    else if (sequencias(casa3, casa6, casa9)) {
        mudarCor(casa3, casa6, casa9);
        venceuPartida(casa3);
        return;
    }
    else if (sequencias(casa1, casa5, casa9)) {
        mudarCor(casa1, casa5, casa9);
        venceuPartida(casa1);
        return;
    }
    else if (sequencias(casa3, casa5, casa7)) {
        mudarCor(casa3, casa5, casa7);
        venceuPartida(casa3);
        return;
    }
}

function sequencias(casaA, casaB, casaC) {
    var igual = false;

    if (casaA.innerHTML != "-") {

        if (casaA.innerHTML == casaB.innerHTML && casaB.innerHTML == casaC.innerHTML) {
            igual = true;
        }
    }
    return igual;
}

function mudarCor(casaA, casaB, casaC) {
    casaA.style.background = "#0f0";
    casaB.style.background = "#0f0";
    casaC.style.background = "#0f0";
}

function venceuPartida(casa) {
    vencedor = casa.innerHTML;
    vencedorSelecionado.style.fontSize = "30px";
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = "";

    for(var i = 1; i <= 9; i++){
        var casa = document.getElementById("Casa " + i);
        casa.style.background = "gold";
        casa.style.color = "gold";
        casa.innerHTML = "-";
    }

    mudarJogador("X");
}
