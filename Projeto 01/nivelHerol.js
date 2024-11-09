let nomeJogador = "Joao"
let xpJogador = 7555

if (xpJogador <= 1000){
    console.log("Jogador " +nomeJogador+ " ranque ferro ")
} else if(xpJogador <= 2000){
    console.log("Jogador " +nomeJogador+ " ranque bronze")
}else if(xpJogador <= 5000){
    console.log("Jogador " +nomeJogador+ " ranque prata")
}else if(xpJogador <= 7000){
    console.log("Jogador " +nomeJogador+ " ranque ouro")
}else if(xpJogador <= 8000){
    console.log("Jogador " +nomeJogador+ " ranque platina")
}else if(xpJogador <= 9000){
    console.log("Jogador " +nomeJogador+ " ranque ascendente")    
}else if(xpJogador <= 10000){
    console.log("Jogador " +nomeJogador+ " imortal")
}else {
    console.log("Jogador " +nomeJogador+ " radiante")
}