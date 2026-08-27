const readline = require("readline-sync");

while(true){
    let operacao = Number(readline.question("Qual operacao quer realizar?\n [1] Cadastrar Produto\n [2] Buscar Produto\n [3] Adicionar Estoque\n [4] Finalizar\n "));
    if(operacao == 4){
        console.log("Fechando Sistema!");
        break
    } else if(operacao == 1){
        let produto = {
            nome: readline.question("Nome do produto: "), 
            estoque: readline.question("Quantidade no estoque: "),
            preco: readline.question("Preco: ") 
        };
    }

}