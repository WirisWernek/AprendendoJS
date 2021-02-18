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