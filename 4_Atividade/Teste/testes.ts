class Usauario {
    nome: string;
    idade: number;

    constructor(nome: string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Ola meu nome e ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

let pessoa = new Usauario("Vito", 20);
console.log("Hello World");
console.log(pessoa.apresentar())