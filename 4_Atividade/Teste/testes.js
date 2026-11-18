"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usauario {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Ola meu nome e ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}
let pessoa = new Usauario("Vito", 20);
console.log("Hello World");
console.log(pessoa.apresentar());
//# sourceMappingURL=testes.js.map