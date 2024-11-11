let nivelJogador = calcularNivelRanqueadas(180, 45)
console.log(nivelJogador)

function calcularNivelRanqueadas(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let nivel

    if (saldoVitorias <= 10){
        nivel = "ferro"
        console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
    } else if (saldoVitorias <= 20){
        nivel = "bronze"
        console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
    } else if (saldoVitorias <= 50){
        nivel = "prata"
        console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
    } else if (saldoVitorias <= 80){
        nivel = "ouro"
        console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
    } else if (saldoVitorias <= 90){
        nivel = "diamante"
        console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
    } else if (saldoVitorias <= 100){
        nivel = "lendario"
        console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
    } else {
        nivel = "imortal"
        console.log("O Herói tem de saldo de vitorias " + saldoVitorias + " está no nível " +nivel)
    }
}