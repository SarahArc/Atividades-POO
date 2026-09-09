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

let numeros: number [] = [1,2,3];
console.log(numeros);
numeros[3] = 4
numeros.push(10);
console.log(numeros)
let nome: string;

nome = 'Jonh';
if (nome == 'Ely') {
    console.log("Seu nome é" + nome);
} else {
    console.log('Seu nome não é Ely');
}

for (let numero of numeros.reverse()) {
    console.log(numero);
}

for (let i = 0; i < numeros.length; i = i + 1) {
    console.log(numeros);
}

for (let i: number = 0; i < numeros.length; i = i + 1) {
    console.log(numeros[i]);
}

for (let j: number = numeros.length-1; j > 0; j = j-1) {
    console.log(numeros[j]);
}

let k: number =1;
let s: string = '';
while (k < 100) {
    s = s + ' ' + k;
    k = k + 2;
}

console.log(s);

function saudacao(): void {
    console.log("Olá a todos");
}

saudacao();

function saudacao2(nome: string): void {
    console.log("Olá," + nome)
}

saudacao2(nome);

function somar(n1: number, n2: number): number{
    return n1 + n2
}
console.log(somar(3,4))

function retornarNomeCompleto(nome: string, sobrenome: string = 'Silva'): string {
    return nome + ' ' + sobrenome;
}
console.log(retornarNomeCompleto('Ely', 'Miranda'));
console.log(retornarNomeCompleto('Ely'));

function somar2(...numeros: number[]): number {
    let total: number =0;
    for (let numero of numeros) {
        total = total + numero;
    }

    return total;
}

console.log(somar2(1,2,3));
console.log(somar2(1,2));
console.log(somar2());


let x: number = 2;
let dobrar: Function = (x: number) => x*2;
console.log(dobrar(3));

let numeros2: number[] = [1,2,3,4,5];
numeros2 = numeros2.map((x) => 3*x);
console.log(numeros2);

let pessoa = {nome: "Ely",idade: 47, formacao: "Computacao"}
//pessoa["nome"] = "João"
console.log(pessoa["nome"]);
console.log(pessoa["idade"]);

pessoa.idade = 50;
console.log(pessoa.idade);

type Pessoa = {
    nome: string,
    idade: number,
    habilitato: boolean
}

let pessoa3: Pessoa = {
    nome: "Ely",
    idade: 47,
    habilitato: true
}

console.log(typeof(pessoa3))
console.log(pessoa3)


// JSON = Java Script Object Notation 