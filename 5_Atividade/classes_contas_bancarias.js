"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    _id;
    _nome;
    _cpf;
    _dataNascimento;
    _contas;
    constructor(id, nome, cpf, dataNascimento) {
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._contas = [];
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    get contas() {
        return this._contas;
    }
    // única forma de colocar uma conta na lista de um cliente
    adicionarConta(conta) {
        this._contas.push(conta);
    }
}
class Conta {
    _id;
    _numero;
    _saldo;
    _cliente;
    _dataDeAbertura;
    constructor(id, numero, cliente, saldo, dataDeAbertura) {
        this._id = id;
        this._numero = numero;
        this._cliente = cliente;
        this._saldo = saldo;
        this._dataDeAbertura = dataDeAbertura;
    }
    get id() {
        return this._id;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    get cliente() {
        return this._cliente;
    }
    get dataDeAbertura() {
        return this._dataDeAbertura;
    }
}
class Banco {
    _clientes = [];
    _contas = [];
    //CLIENTES =======================================================================================
    inserirCliente(cliente) {
        // esse for pega cada cliente da lista, um por vez, na variável c
        for (const c of this._clientes) {
            if (c.id === cliente.id || c.cpf === cliente.cpf) {
                console.log("Já existe um cliente com esse id ou CPF cadastrado no sistema!!");
                return; // sai do método sem cadastrar
            }
        }
        this._clientes.push(cliente);
        console.log(`Cliente ${cliente.nome} cadastrado com sucesso.`);
    }
    // devolve o cliente e se não existir cliente retorna nulo
    consultarCliente(cpf) {
        for (const c of this._clientes) {
            if (c.cpf === cpf) {
                return c;
            }
        }
        console.log(`Cliente com CPF ${cpf} não encontrado.`);
        return null;
    }
    //CONTAS =================================================================================================
    inserirConta(conta) {
        for (const c of this._contas) {
            if (c.id === conta.id || c.numero === conta.numero) {
                console.log("Já existe uma conta com esse id ou número!!");
                return;
            }
        }
        this._contas.push(conta);
        console.log(`Conta ${conta.numero} criada com sucesso.`);
    }
    // devolve a conta encontrada ou null se não existir
    consultarConta(numero) {
        for (const c of this._contas) {
            if (c.numero === numero) {
                return c;
            }
        }
        console.log(`Conta ${numero} não encontrada.`);
        return null;
    }
    //ASSOCIAÇÃO=================================================================================
    associarContaCliente(numeroConta, cpfCliente) {
        const conta = this.consultarConta(numeroConta);
        const cliente = this.consultarCliente(cpfCliente);
        // se não achou a conta ou o cliente associa
        if (conta === null || cliente === null) {
            console.log("Não foi possível associar.");
            return;
        }
        // regra: cada conta pertence a um único cliente
        if (conta.cliente.cpf !== cliente.cpf) {
            console.log("Não foi possível associar: essa conta pertence a outro cliente.");
            return;
        }
        // regra: o cliente não pode ter a mesma conta duas vezes
        for (const c of cliente.contas) {
            if (c.numero === conta.numero) {
                console.log("Não foi possível associar: essa conta já está associada a esse cliente.");
                return;
            }
        }
        cliente.adicionarConta(conta);
        console.log(`Conta ${conta.numero} associada ao cliente ${cliente.nome}.`);
    }
    listarContasCliente(cpf) {
        const cliente = this.consultarCliente(cpf);
        if (cliente === null) {
            return [];
        }
        return cliente.contas;
    }
    totalizarSaldoCliente(cpf) {
        const cliente = this.consultarCliente(cpf);
        if (cliente === null) {
            return 0;
        }
        let total = 0;
        for (const c of cliente.contas) {
            total += c.saldo;
        }
        return total;
    }
}
// TESTES =====================================================
const banco = new Banco();
const maria = new Cliente(1, "Maria Silva", "11111111111", new Date(2000, 4, 10));
const joao = new Cliente(2, "João Souza", "22222222222", new Date(1998, 1, 20));
const conta1 = new Conta(1, "0001", maria, 500, new Date());
const conta2 = new Conta(2, "0002", maria, 1500, new Date());
const conta3 = new Conta(3, "0003", joao, 300, new Date());
console.log("\n=== Inserir Cliente ===");
banco.inserirCliente(maria);
banco.inserirCliente(joao);
banco.inserirCliente(new Cliente(1, "Outro", "99999999999", new Date())); // tem q recusar pq tem mesmo id 
banco.inserirCliente(new Cliente(9, "Outro", "11111111111", new Date())); // tem q recusar pq tem o mesmo CPF
console.log("\n=== Consultar Cliente ===");
const achado = banco.consultarCliente("11111111111"); //Tem achar a maria
if (achado !== null) {
    console.log(`Encontrou: ${achado.nome}`);
}
banco.consultarCliente("00000000000"); // CPF que não existe
console.log("\n=== Inserir Conta ===");
banco.inserirConta(conta1);
banco.inserirConta(conta2);
banco.inserirConta(conta3);
banco.inserirConta(new Conta(1, "0099", maria, 0, new Date())); // mesmo id tem q recusar
banco.inserirConta(new Conta(99, "0001", maria, 0, new Date())); // mesmo número tem q recusar
console.log("\n=== Associar Conta a Cliente ===");
banco.associarContaCliente("0001", "11111111111");
banco.associarContaCliente("0002", "11111111111");
banco.associarContaCliente("0003", "22222222222");
console.log("\n");
banco.associarContaCliente("0001", "11111111111"); // repetida tem q recusar
banco.associarContaCliente("0001", "22222222222"); // conta da Maria no João tem q recusar
banco.associarContaCliente("7777", "11111111111"); // conta que não existe
console.log("\n=== Listar Contas dos Cliente ===");
const listaDaMaria = banco.listarContasCliente("11111111111");
for (const c of listaDaMaria) {
    console.log(`Conta ${c.numero} | saldo ${c.saldo}`);
}
console.log("\n=== Totalizar Saldo dos Clientes ===");
console.log(`Total da Maria (esperado 2000): ${banco.totalizarSaldoCliente("11111111111")}`);
console.log(`Total do João (esperado 300): ${banco.totalizarSaldoCliente("22222222222")}`);
//mensagem pra alterar commit
//# sourceMappingURL=classes_contas_bancarias.js.map