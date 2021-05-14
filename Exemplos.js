// comntario
/*
comentário
*/
console.log("hi");
console.log(2 + 1); //imprime a soma 3
console.log(true); //boleano verdadeiro true
console.log(false); //boleano falso          false
console.log({
  name: "Wiris",
  years_old: 18,
}); //exemplo de objeto
/*
objeto em JS
{propriedade: "valor"}
*/
console.log(["leite", "Ovos", 2, 3]); // exemplo um array
/*
array em JS
["string",
int,
"string"]
*/
var climate = "Hot"; // exemplo de variável string
var day = 04; //exemplo de variável int(number)

console.log(climate);
console.log(day);
climate = "cold";
console.log(climate);
const month = "June"; // exemplo de constantes
//month ="April"
console.log(month);

//console.log(typeof variavel)  mostra o tipo de uma variável
console.log(typeof day);

// para se declarar variáveis recomenda se usar o let e const
// var é global e também local e pode funcionar fora de um escopo
/*
scopo com var
console.log("Existe x antes do escopo?", x)
{
  var x ="sim"
}
console.log("Existe x depois do escopo?", x)

scopo com const ó funciona dentro do scopo em que foi criada
console.log("Existe z antes do escopo?", z)
{
  const z ="sim"
}
console.log("Existe z depois do escopo?", z)

scopo com let só funciona dentro do scopo em que foi criada 
mas se a variavel tiver sido criada fora e no escopo seu valor mudar o escopo vai procurar o tipo de variave e trazer
para dentro do escopo e atualizar a variável

console.log("Existe y antes do escopo?", y)
{
  let y ="sim"
}
console.log("Existe y depois do escopo?", y)
*/

// formas de concatenar e interpolar variaveis
let age = 20;
let isHuman = true;
console.log("O Luiz tem " + age + " anos");
console.log(`O Luiz tem ${age} anos`);

// testando objetos
const person = {
  name: "Jhon",
  age: 30,
  weight: 88.6,
  isAdmin: true,
};
console.log(`${person.name} tem ${person.age} anos`);

//testando Arrays
//arrays podem se misturar com escopos
const animals = [
  "Lion",
  "Monkey",
  {
    name: "Cat",
    age: 3,
  },
];
console.log(animals[2].name);

//Declaração da função
//Function statement
function creatPhrases() {
  console.log("Estudar é bom");
  console.log("Paciência e persistência");
  console.log("Revisão é mãe do prendizado");
}

//Executar a função
//rodar, chamar, invocar
//execute, run, call, invoke

creatPhrases();

// function expression
//function anonymous
//parâmetros-parameters
const sum = function (number1, number2) {
  console.log(number1 + number2);
};

sum(2, 4); //argumentos-arguments

const sum = function (number1, number2) {
  total = number1 + number2;
  return total;
};

let number1 = 25;
let number2 = 5;

console.log(`o numero 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);

//function scope
let subject = "create video";

function createThink() {
  //se a variavél não for passada como parametro ela gerará um scopo
  subject = "study";
}

console.log(subject);
console.log(createThink());
console.log(subject);

// function hoisting
//não se aplica a funções anonimas
sayMyName();

function sayMyName(params) {
  console.log("Wiris");
}

// arrow function  maneira mais rápida
const sayMyName = () => {
  console.log("Wiris");
};
sayMyName();

//callback function
function sayMyName(name) {
  console.log("antes de executar a função callback");
  name();
  console.log("depois de executar a callback");
}

sayMyName(() => {
  console.log("estou em uma callback");
});

/*
Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}
const wiris = new Person("Wiris");
const mayk = new Person("Mayk");
const joao = new Person("João");
console.log(wiris.walk());
console.log(mayk.walk());
console.log(joao.walk());

let nome = new String("Wiris");
console.log(nome);

let date = new Date("2021-02-06");
console.log(date);

/*
  Prototype
  prototype-based language
  prototype chain 
  __proto__
*/

/*
    Type conversion (typecasting) vs Type coersion
    Altera um tipo de dado para outro
*/

/*
   Manipulando Strings e Números 
   Transformar strings em números e numeros em strings
*/

let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number));

/*
    Manipulando Strings e Números 
    Contar quantos caracteres tem em uma palavra e quantos digitos tem um número
  
*/

let word = "paralelepipedo";
console.log(word.length);

let number = 5945;
console.log(String(number).length);

/*
    Manipulando Números 
    Transformando um número quebrado com 2 casas decimais e trocando ponto por vírgula
  
*/
let number = 333.455456344747458;
console.log(number.toFixed(2).replace(".", ","));

/*
    Manipulando Strings 
    Transformando letras maiúsculas em minúsculas e vice-versa
  
*/
let word = "Programar é muito bacana";
console.log(word.toUpperCase()); //Transforma em maíscula
console.log(word.toLocaleLowerCase()); //Transforma em minúscula

/*
    Manipulando Strings
    Verificar se o texto tem uma palavra específica
*/

let phrase = "Eu quero amor!";
console.log(phrase.includes("amor")); //return true

let string = "Eu quero Viver!";
console.log(string.includes("amor")); //return false

/*
    Manipulando Strings e Arrays
    Separe um texto que contem espaços, em um novo aray onde cada texto é uma posição do array. Depois disso transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu quero viver o amor!";
let myarray = phrase.split(" "); //retira os espaços em branco
console.log(myarray);

let phraseWithUnderscore = myarray.join("_"); //usa como separador o _
console.log(phraseWithUnderscore);

/*
    Manipulando Arrays
    Criar um Array com costrutor
*/
let myarray = ["a", "b", "c"]; //forma convecional
let myArray = new Array("a", "b", "c"); //forma com construtor
console.log(myarray);
console.log(myArray);

/*
    Manipulando Arrays
    Contar elementos de um array
*/
console.log(["a", "b", "c"].length);

/*
    Manipulando Arrays
    Transformar uma cadeia de caracteres em elementos de um array
*/

let word = "manipulação";
console.log(Array.from(word));

/*
    Manipulando Arrays
    
    Adcionar um item no fim
    Adicionar no começo
    Remover do fim
    Remover do começo
    Pegar somente alguns elementos do array
    Remover 1 ou mais itens em qualquer posição do array
    Encontrar a posiçao de um elemento no array
*/

let techs = ["html", "css", "js"];

techs.push("nodejs"); //Adcionar um item no fim
techs.unshift("sql"); //Adicionar no começo
techs.pop(); //Remover do fim
techs.shift(); //Remover do começo
console.log(techs.slice(1, 3)); //Pegar somente alguns elementos do array
techs.splice(1, 2); //Remover 1 ou mais itens em qualquer posição do array
let index = techs.indexOf("css"); //Encontrar a posiçao de um elemento no array
techs.splice(index, 1); //Remove o item que foi buscado

console.log(techs);

// Grouping operator ()

let total = 2 + 3 * 5;
console.log(total);

let total = (2 + 3) * 5;
console.log(total);

//Operadores de Comparação

// Irá comparar valores e retornar um boolean como resposta á comparação

let one = 1;
let two = 2;

//  == igual a
console.log(two == 1);
console.log(one == "1");

// . != diferente de
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

//  === estritamente igual a
console.log(one === 1);
console.log(one === "1");

// . !== estritamente diferente de
console.log(two !== "2");
console.log(two !== 2);

let one = 1;
let two = 2;

// > maior que
console.log(one > two);

// >= maior ou igual a
console.log(one >= 1);
console.log(two >= 1);

// < menor que
console.log(one < two);

// <= menor igual a
console.log(one <= two);
console.log(one <= 1);
console.log(one <= 0);

//Operadores de Atribuição
let x;

console.log(x);

// assgnment
// x = 1

// additional assignment
// x += 2

// subtraction assignment
// x -= 1

// multiplication assignment
// x *= 2

// division assignment
// x /= 2

// remainder, exponetiation
// x %=2
// x **=2

// Operadores Lógicos

// - 2 valores booleanos, qunado verficados, resultara em verdadeiro ou falso

let pao = true;
let queijo = false;

// and &&

console.log(pao && queijo);

// or ||

console.log(pao || queijo);

// not !

console.log(!queijo);

//Operator Condicional

// Dependendo da condição recebemos valor verdadeiro

//Condição então entre valor 1 se não valor 2
//condition ? value1 : value2

// Exemplos
// Cafe da manha top

let pao = true;
let queijo = true;

const nice = pao && queijo ? "Café top" : "Café ruim";
console.log(nice);

// maior de 18

let age = 16;

const canDrive = age >= 18 ? "can drive" : "can't drive";
console.log(canDrive);

// Operadro de strings (string operator)

// comparison(comparação)
console.log("a" == "a");

//concatenation (concatenação)
//retorna a uniao de duas strings
let alpha = "alpha";

console.log(alpha + "bet" + "s");

console.log(alpha + 53);

alpha += "bets";
console.log(alpha);

// type conversion (typecasting) vs Type coersion

// Falsy
//Quando um valor é considerado false em contextos onde um booleano é obrigado (condicionais e loops)

//false
// -0
// ""
// null
// undefined
// NaN

console.log(true ? "verdadeiro" : "false");
console.log(-0 ? "verdadeiro" : "false");

//Truthy
// Quando um valor é considerado true em contextos onde um booleano é obrigatório

// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// -1
// Infinity
// -Infinity

console.log(true ? "verdadeiro" : "false");
console.log({} ? "verdadeiro" : "false");

/*
    Operator precedence
    Precedencia de operadore

°grouping                        ()
°negação e incremento            ! ++ --
°multiplicação e divisão         * /
°adiçao e subtração              + -
°relacional                      < <= > >=
°igualdade                      == != === !==
°AND                             &&
°OR                              ||
°condicional                     ? :
°assignment(atribuição)          = += -= *=
*/

console.log(2 + 5 * 10);
console.log((2 + 5) * 10);
console.log(3 > 2 > 1);
console.log(3 > 2 && 2 > 1);

// Control flow

// if and else
let temperature = 36.5;

if (temperature >= 37.0 && temperature < 37.5) {
  console.log("Você está com febre");
} else if (temperature >= 37.5) {
  console.log("Você está com febre muito alta");
} else {
  console.log("Você não está com febre");
}

temperature = 39;

if (temperature >= 37.0 && temperature < 37.5) {
  console.log("Você está com febre");
} else if (temperature >= 37.5) {
  console.log("Você está com febre muito alta");
} else {
  console.log("Você não está com febre");
}

//  ou
/*
let temperature = 36.5
let high = temperature >= 37.5
let medium = temperature >= 37.0 && temperature < 37.5

if(medium){
    console.log("Você está com febre")
}
if(high){
    console.log("Você está com febre muito alta")
}
else{
    console.log("Você não está com febre")
}

*/

// switch
let expression = "v";

switch (expression) {
  case "a":
    //codigo
    console.log("a");
    break;
  case "b":
    //codigo
    console.log("b");
    break;
  default:
    //codigo
    console.log("Default");
    break;
}

// a var operator mudar a operação
let number1 = 9;
let number2 = 8;
let result;
let operator = "*";

switch ((number1, number2, operator)) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  case "%":
    result = number1 % number2;
    break;
  case "^":
    result = number1 ** number2;
    break;
}

console.log(result);

// Throw

function sayMyName(name = "") {
  if (name === "") {
    throw "nome é obrigatório";
  }
  console.log("depois do erro");
}

// try ..... catch
try {
  sayMyName();
} catch (e) {
  console.log(e);
}

console.log("após a função");

// Estrutura de Repetição
// for

for (let i = 0; i <= 100; i++) {
  console.log(i);
  if (i === 50) {
    // pare de executar
    break;
  }
}

for (i = 100; i >= 0; i--) {
  if (i === 50) {
    //pule esse e continue
    continue;
  }
  console.log(i);
}
// Estrutura de Repetição
// While

let i = 0;
while (i < 10) {
  console.log("Parabéns ", i);
  i++;
}
// Estrutura de Repetição
// for.....of

let name = "wiris";
let names = ["Joao", "Paulo", "Pedro"];

for (let char of name) {
  console.log(char);
}

for (let name of names) {
  console.log(name);
}
// Estrutura de Repetição
// for......in
let person = {
  name: "Jhon",
  age: 30,
  weight: 88.6,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}
