/*console.log("Olá, mundo!");

console.log(10);

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);*/

const nome = "Rafaela";
console.log(nome);

let idade = 19; //let é mais variável de valor
console.log(idade);

idade = 22;
console.log(idade); 

const curso = "Desenvolvimento Web";
const nota = 8.5;
const aprovado = true;

/*console.log(typeof curso);
console.log(typeof nota);
console.log(typeof aprovado); */

/* console.log (10 ===10); // === compara o valor e o tipo de dado
console.log (10 === "10"); // === compara o valor e o tipo de dado
console.log (10 > 5); // > compara se o valor da esquerda é maior que o da direita
console.log (10 < 5); // < compara se o valor da esquerda é menor que o da direita */

console.log(idade >= 18 && aprovado === true); // && compara se as duas condições são verdadeiras
console.log(idade >= 18 || aprovado === true); // || compara se uma das condições é verdadeira

console.log(idade >= 23 || aprovado === true); // || compara se uma das condições é verdadeira

console.log(!aprovado); // ! inverte o valor da variável

console.log(`Nome: ${nome}, | idade: ${idade}, | Curso: ${curso}, | Nota: ${nota}, | Aprovado: ${aprovado}`); // ${} é usado para inserir variáveis dentro de uma string

