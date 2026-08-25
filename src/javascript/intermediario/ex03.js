const readline = require("readline-sync");
while(true){
    let resposta = readline.question("Deseja adicionar um produto? (false ou true) ").toLowerCase();

    if (resposta === "false" ) {
        console.log("Finalizando compra!");
        break
    } else {
        let nomeProduto = readline.question("Nome do produto: ");
        let precoProduto = Number(readline.question("Valor do produto: "));
        let qtdeProduto = Number(readline.questionInt("Quantidade do produtos: "));   
        
    }
}