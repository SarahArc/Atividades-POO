console.log("\nItem 6");
let nome: string="Ely";
let salario: number=2000;
let linguagem: string="TypeScript";
let frase: string = `
${nome}
My salary is ${salario}
and
my preffered language is ${linguagem}\n`
console.log(frase);

console.log("\nItem 7");
console.log("sub item a");
let texto: string = `${linguagem} É MUITO LEGAL!`
let textoMinusculo: string = texto.toUpperCase();
console.log(textoMinusculo);
console.log("Tamanho " + texto.length);

console.log("\nsub item b");
let pi: number = 3.1415;
console.log(`${pi.toFixed(2)}`);

