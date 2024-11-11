let nivelJogador = calcularNivelRanqueadas(180, 45)
console.log(nivelJogador)

function calcularNivelRanqueadas(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let nivel

    if (saldoVitorias <= 10){
        nivel = "ferro"
    } else if (saldoVitorias <= 20){
        nivel = "bronze"
    } else if (saldoVitorias <= 50){
        nivel = "prata"
    } else if (saldoVitorias <= 80){
        nivel = "ouro"
    } else if (saldoVitorias <= 90){
        nivel = "diamante"
    } else if (saldoVitorias <= 100){
        nivel = "lendario"
    } else {
        nivel = "imortal"
    }

    return console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
}