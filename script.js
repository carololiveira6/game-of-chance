function computador() {
    let escolha
	let escolhaComputador = 1 + Math.floor(Math.random() * 3);	
	
	if (escolhaComputador === 1){
		escolha = "pedra";
	}

	if (escolhaComputador === 2){
		escolha = "papel";
	}

	if (escolhaComputador === 3){
		escolha = "tesoura";
	}

    return escolha
}

function resultado(string) {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = string
}


let listaBotao = document.getElementsByClassName("btn")
console.log(listaBotao)
for (let i = 0; i < listaBotao.length; i++) {
    listaBotao[i].addEventListener('click', evento => {
        let alvo = evento.target
        console.log(alvo)
        let escolhaJogador = alvo.dataset.js
        let escolhaComputador = computador()
        resultadoJogo(escolhaJogador, escolhaComputador)
    });
}

function resultadoJogo(escolhaJogador, escolhaComputador) {

    if (escolhaJogador === "pedra" && escolhaComputador === "pedra") {
        resultado("empatar")
    }

    if (escolhaJogador === "pedra" && escolhaComputador === "papel") {
        resultado("perder")
    }

    if (escolhaJogador === "pedra" && escolhaComputador === "tesoura") {
        resultado("ganhar")
    }

    if (escolhaJogador === "papel" && escolhaComputador === "papel") {
        resultado("empatar")
    }

    if (escolhaJogador === "papel" && escolhaComputador === "tesoura") {
        resultado("perder")
    }

    if (escolhaJogador === "papel" && escolhaComputador === "pedra") {
        resultado("ganhar")
    }

    if (escolhaJogador === "tesoura" && escolhaComputador === "tesoura") {
        resultado("empatar")
    }

    if (escolhaJogador === "tesoura" && escolhaComputador === "pedra") {
        resultado("perder")
    }

    if (escolhaJogador === "tesoura" && escolhaComputador === "papel") {
        resultado("ganhar")
    }
}