// comntario
/*
comentário
*/
console.log("hi")
console.log(2+1)    //imprime a soma 3
console.log(true)    //boleano verdadeiro true
console.log(false)  //boleano falso          false
console.log({
  name: "Wiris",
  years_old: 18,
})                          //exemplo de objeto
/*
objeto em JS
{propriedade: "valor"}
*/
console.log(["leite", "Ovos",2,3]) // exemplo um array
/*
array em JS
["string",
int,
"string"]
*/
var climate = "Hot" // exemplo de variável string
var day = 04            //exemplo de variável int(number)

console.log(climate)
console.log(day)
climate = "cold"
console.log(climate)
const month ="June"  // exemplo de constantes
//month ="April"
console.log(month)

//console.log(typeof variavel)  mostra o tipo de uma variável
console.log(typeof day)

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
let age = 20
let isHuman = true
console.log("O Luiz tem " + age + " anos" )
console.log(`O Luiz tem ${age} anos`)

// testando objetos
const person = {
  name: "Jhon",
  age: 30,
  weight: 88.6,
  isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos`)

//testando Arrays
//arrays podem se misturar com escopos
const animals =[
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]
console.log(animals[2].name)

//Declaração da função 
//Function statement
function creatPhrases() {
    console.log("Estudar é bom")
    console.log("Paciência e persistência")
    console.log("Revisão é mãe do prendizado")
  }
  
  //Executar a função
  //rodar, chamar, invocar
  //execute, run, call, invoke
  
  creatPhrases()

// function expression
//function anonymous
//parâmetros-parameters
const sum = function (number1, number2) {
    console.log(number1 + number2)
}

sum(2, 4)  //argumentos-arguments


const sum = function (number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 25
let number2 = 5

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

//function scope
let subject = 'create video'

function createThink() {   //se a variavél não for passada como parametro ela gerará um scopo
  subject = 'study'
  
}

console.log(subject)
console.log(createThink())
console.log(subject)

// function hoisting
//não se aplica a funções anonimas
sayMyName()

function sayMyName(params) {
  console.log("Wiris")
}


// arrow function  maneira mais rápida
const sayMyName = () => {
    console.log("Wiris")
  }
  sayMyName()

//callback function
function sayMyName(name) {
    console.log("antes de executar a função callback")
    name()
    console.log("depois de executar a callback")
  }
  
  
  sayMyName(
  
    () => {
      console.log("estou em uma callback")
    }
  )

  /*
Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
      return this.name + " está andando"
    }
  }
  const wiris = new Person("Wiris")
  const mayk = new Person("Mayk")
  const joao = new Person("João")
  console.log(wiris.walk())
  console.log(mayk.walk())
  console.log(joao.walk())
  
  
  
  let nome = new String("Wiris")
  console.log(nome)
  
  let date = new Date("2021-02-06")
  console.log(date)

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

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))


/*
    Manipulando Strings e Números 
    Contar quantos caracteres tem em uma palavra e quantos digitos tem um número
  
*/

let word ="paralelepipedo"
console.log(word.length)

let number = 5945
console.log(String(number).length)

/*
    Manipulando Números 
    Transformando um número quebrado com 2 casas decimais e trocando ponto por vírgula
  
*/
let number = 333.455456344747458
console.log(number.toFixed(2).replace("." , ","))

/*
    Manipulando Strings 
    Transformando letras maiúsculas em minúsculas e vice-versa
  
*/
let word ="Programar é muito bacana"
console.log(word.toUpperCase())           //Transforma em maíscula
console.log(word.toLocaleLowerCase())     //Transforma em minúscula

/*
    Manipulando Strings
    Verificar se o texto tem uma palavra específica
*/

let phrase = "Eu quero amor!"
console.log(phrase.includes("amor"))   //return true

let string = "Eu quero Viver!"
console.log(string.includes("amor"))   //return false


/*
    Manipulando Strings e Arrays
    Separe um texto que contem espaços, em um novo aray onde cada texto é uma posição do array. Depois disso transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu quero viver o amor!"
let myarray = phrase.split(" ")          //retira os espaços em branco
console.log(myarray)

let phraseWithUnderscore = myarray.join("_")   //usa como separador o _
console.log(phraseWithUnderscore)

/*
    Manipulando Arrays
    Criar um Array com costrutor
*/
let myarray = ['a', 'b', 'c']           //forma convecional
let myArray = new Array('a', 'b', 'c')  //forma com construtor
console.log(myarray)
console.log(myArray)

/*
    Manipulando Arrays
    Contar elementos de um array
*/
console.log(['a','b','c'].length)

/*
    Manipulando Arrays
    Transformar uma cadeia de caracteres em elementos de um array
*/

let word = "manipulação"
console.log(Array.from(word))

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

let techs = ["html", "css", "js"]

techs.push("nodejs") //Adcionar um item no fim
techs.unshift("sql") //Adicionar no começo
techs.pop()           //Remover do fim
techs.shift()         //Remover do começo
console.log(techs .slice(1, 3)) //Pegar somente alguns elementos do array
techs.splice(1, 2)    //Remover 1 ou mais itens em qualquer posição do array
let index = techs.indexOf('css') //Encontrar a posiçao de um elemento no array
techs.splice(index, 1)  //Remove o item que foi buscado


console.log(techs)