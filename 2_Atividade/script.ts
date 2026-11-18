console.log("\n");
console.log("1) Questao");

function saudacao(nome: string, pronome_tratamento?: string) {
    if (pronome_tratamento == undefined){
        console.log(`Sr. ${nome}`);
    } else {
        console.log(`${pronome_tratamento} ${nome}`);
    }
}

saudacao("Carlos", "Sr.");
saudacao("Helena", "Sra.")
saudacao("Alex")

console.log("\n");

console.log("2) Questao");

function format_array(array: number[]) {
    let n_break: number = array.length -1;
    let nova_array: string = "";

    array.forEach((numero, indice) => {
        if (n_break == indice){
            nova_array += `${numero}`
        } else {
            nova_array += `${numero}-`
        }
    });
    console.log(nova_array);
}

format_array([10,20,30,40])
format_array([10,40,30,40]) // teste para testar se o for para em um elemento que seja igual ao ultimo

console.log("\n");

console.log("3) Questao");

function soma(x: number, y?: any): number {
    return x+y
}

console.log(soma(1, 2));
console.log(soma(1, "2"));
console.log(soma(1));

console.log("\n");

console.log("4) Questao");

function exibir_elementos(...caracteres: string[]){
    let nova_array: string = ""
    caracteres.forEach ((caracter)=> {
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
