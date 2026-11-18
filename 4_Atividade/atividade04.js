"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    b() {
        let c;
        //c = c + 1;
        /*
            Questão 1, 3a. alternativa
            Resposta: F, desde que eu não utilize a variável, não dará erro
        */
    }
}
class B {
    c() {
        let a;
        //console.log(a);
        //Resposta: F, ela nem mesmo é inicializada
    }
}
/*
class Hotel {
    quantReservas: number;
    adicionarReserva(): void {
        this.quantReservas++;
    }
}
    Questão 2: Sim, há erro de compilação, pois a variável deve ser inicializada
*/
//Questão 03
class Hotel {
    quantReservas;
    constructor(n) {
        this.quantReservas = n;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
hotel.adicionarReserva();
console.log(hotel.quantReservas);
//Questão 4
/*
    Há um erro de compilação, pois o parâmetro do construtor não foi passado.
    Para corrigir, basta passá-lo:
    let r : Radio = new Radio(10);
*/
//Questão 5
class Conta {
    id;
    numero;
    saldo;
    constructor(id, numero, saldo) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    //questão 8: retornar true ou false
    sacar(valor) {
        if (this.saldo > valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }
    //questão 8: retornar true ou false
    transferir(contaDestino, valor) {
        /* this.saldo = this.saldo - valor;
        contaDestino.saldo = contaDestino.saldo + valor;*/
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}
let c1 = new Conta(1, "111-1", 100);
let c2 = new Conta(2, "222-2", 100);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
class Jogador {
    forca;
    nivel;
    pontosAtuais;
    constructor(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(outroJogador) {
        if (outroJogador.estaVivo()) {
            outroJogador.pontosAtuais -= this.calcularAtaque();
        }
    }
    estaVivo() {
        return this.pontosAtuais > 0;
        /*
        if (this.pontosAtuais > 0) {
            return true;
        } else {
            return false;
        } */
    }
}
let j1 = new Jogador(10, 1, 100);
let j2 = new Jogador(10, 5, 100);
j1.atacar(j2);
j1.atacar(j2);
j1.atacar(j2);
console.log(`j2 está vivo? ${j2.estaVivo()}  - Pontos: ${j2.pontosAtuais}`);
j2.atacar(j1);
j2.atacar(j1);
console.log(`j1 está vivo? ${j1.estaVivo()}  - Pontos: ${j1.pontosAtuais}`);
j2.atacar(j1);
console.log(`j1 está vivo? ${j1.estaVivo()}  - Pontos: ${j1.pontosAtuais}`);
//Um jogador morto pode atacar um vivo? Como evitar?
//Posso criar um jogador que já está morto? Como evitar?
//# sourceMappingURL=atividade04.js.map