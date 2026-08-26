const readline = require("readline-sync");

console.log("JOGO DE PONTUACAO");
let vidas = 3;
let pontos = 0;

function matouInimigo(){
    pontos += 100;
    console.log("Parabens! Voce matou o inimigo\n+100 pontos");
}

function pegouItem(){
    pontos += 100;
    console.log("Parabens! Voce pegou um item\n+50 pontos");
}

function perdeuVida(){
    pontos -= 200;
    vidas -= 1;
    console.log(`OPS! Voce perdeu uma vida. Ainda restam ${vidas}\n -200 pontos`);
}

function matouChefao(){
    pontos += 1000;
    console.log("PARABENS! VOCE MATOU O CHEFAO \n+1000 pontos");
}

matouInimigo();
pegouItem();
perdeuVida();
matouChefao();
perdeuVida();
console.log(`PONTOS: ${pontos} \n VIDAS: ${vidas}`);