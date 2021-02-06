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