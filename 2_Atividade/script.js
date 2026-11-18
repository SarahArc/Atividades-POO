"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\n");
console.log("1) Questao");
function saudacao(nome, pronome_tratamento) {
    if (pronome_tratamento == undefined) {
        console.log(`Sr. ${nome}`);
    }
    else {
        console.log(`${pronome_tratamento} ${nome}`);
    }
}
saudacao("Carlos", "Sr.");
saudacao("Helena", "Sra.");
saudacao("Alex");
console.log("\n");
console.log("2) Questao");
function format_array(array) {
    let n_break = array.length - 1;
    let nova_array = "";
    array.forEach((numero, indice) => {
        if (n_break == indice) {
            nova_array += `${numero}`;
        }
        else {
            nova_array += `${numero}-`;
        }
    });
    console.log(nova_array);
}
format_array([10, 20, 30, 40]);
format_array([10, 40, 30, 40]); // teste para testar se o for para em um elemento que seja igual ao ultimo
console.log("\n");
console.log("3) Questao");
function soma(x, y) {
    return x + y;
}
console.log(soma(1, 2));
console.log(soma(1, "2"));
console.log(soma(1));
console.log("\n");
console.log("4) Questao");
function exibir_elementos(...caracteres) {
    let nova_array = "";
    caracteres.forEach((caracter) => {
        nova_array += "${caracter} ";
    });
    console.log(nova_array);
}
exibir_elementos("a", "b");
exibir_elementos("a", "b", "c");
exibir_elementos("a", "b", "c", "d");
console.log("\n");
console.log("5) Questao");
// mensagem pra alterar a mensagem do commit
//# sourceMappingURL=script.js.map