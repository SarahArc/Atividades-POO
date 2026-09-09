"use strict";
//let b = 1;
//console.log(b);
//
//let c: number;
//c = 2;
//console.log(c);
//
//let nome: string = "Ely";
//let sobrenome: string = "Miranda";
//let idade: number = 47;
//let dados: string;
//
//dados = `Meu nome é ${nome}
//Meu sobrenome é ${sobrenome}
//Minha idade é ${idade}`
//
//console.log(dados);
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = [1, 2, 3];
console.log(numeros);
numeros[3] = 4;
numeros.push(10);
console.log(numeros);
let nome;
nome = 'Jonh';
if (nome == 'Ely') {
    console.log("Seu nome é" + nome);
}
else {
    console.log('Seu nome não é Ely');
}
for (let numero of numeros.reverse()) {
    console.log(numero);
}
for (let i = 0; i < numeros.length; i = i + 1) {
    console.log(numeros);
}
for (let i = 0; i < numeros.length; i = i + 1) {
    console.log(numeros[i]);
}
for (let j = numeros.length - 1; j > 0; j = j - 1) {
    console.log(numeros[j]);
}
let k = 1;
let s = '';
while (k < 100) {
    s = s + ' ' + k;
    k = k + 2;
}
console.log(s);
function saudacao() {
    console.log("Olá a todos");
}
saudacao();
function saudacao2(nome) {
    console.log("Olá," + nome);
}
saudacao2(nome);
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(3, 4));
function retornarNomeCompleto(nome, sobrenome = 'Silva') {
    return nome + ' ' + sobrenome;
}
console.log(retornarNomeCompleto('Ely', 'Miranda'));
console.log(retornarNomeCompleto('Ely'));
function somar2(...numeros) {
    let total = 0;
    for (let numero of numeros) {
        total = total + numero;
    }
    return total;
}
console.log(somar2(1, 2, 3));
console.log(somar2(1, 2));
console.log(somar2());
let x = 2;
let dobrar = (x) => x * 2;
console.log(dobrar(3));
let numeros2 = [1, 2, 3, 4, 5];
numeros2 = numeros2.map((x) => 3 * x);
console.log(numeros2);
let pessoa = { nome: "Ely", idade: 47, formacao: "Computacao" };
//pessoa["nome"] = "João"
console.log(pessoa["nome"]);
console.log(pessoa["idade"]);
pessoa.idade = 50;
console.log(pessoa.idade);
let pessoa3 = {
    nome: "Ely",
    idade: 47,
    habilitato: true
};
console.log(typeof (pessoa3));
console.log(pessoa3);
// JSON = Java Script Object Notation 
//# sourceMappingURL=script.js.map