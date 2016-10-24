//making a library. Lodash is one which is extremely popular. It is a library of code of collections of functions. Underscore was the originator and was tied in with jquery. But underscore project moves very slowly, so developers forked the project and make a new 1 which is called lodash. Lodash is 80-90% compatible with underscore. Now by large every developer uses lodash, which moves way faster.
//
// function setTimeout(){}
// function console(){}
//we can run into overwriting functions with our own made up functions or when working with a group you can overro


// iife = immediately invoking function expression
// if you use 'use strict' this it adds error checking and checks stuff strictly.

(function(){
    'use strict'

        var capitalizeFirst = function(word) {
            return word.charAt(0).toUpperCase() + word.substring(1)
        }

        var one = function(selector){
            return document.querySelector(selector)
        }
        var capitalizeAll = function(words) {
            return words.split(' ').map(capitalizeFirst).join(' ') //split is splitting the string into an aray and splitting them at spaces. then map will take each object in the array and capitalize the first letter, then join will convert it back into a string.
        }

        // newer method of setting defaults is using it in the () wher you are giving them the values if its false, this () method only works in 2015 broswers since its newer otherwise use the other method listed below. This is also called default arguments
        var padLeft = function(word,char = '0',length = 2){
            // char = char || '0' //we are using a expression to see if its true if not then use default value of '0'
            // length = length || 2 // same thing here if length is the same if not use 2 has default value

            //padLeft('1', '0', 2) => 01
            //padLeft('1', '0', 3) => 001

            return word = char.repeat(length - word.length) + word

        }

        window.dog = {
            name: 'Alfy',
            capitalizeFirst: capitalizeFirst, // the property name does not need to be the same as function name.
            capitalizeAll: capitalizeAll,
            padLeft: padLeft,
            one: one,
            makeItRed: function(){  //you can also put function in here if you want, not done mostly bc will be tidious
                document.body.style.backgroundColor = 'lightblue'
            },
        }
}())  // after making this anon function we are immediately calling it by using the (), the last ) takes the whole function and evaluates it.
















// // three different types of functions
// //names functions
// //this concept of using functions in functions is called Higher Order functions. WHich means that they are higher order and they can be used as arguments and values.
// function driveCar(){
// }
//
// var driveCar = function(callback){
//     alert(callback())
//
//     return function(){
//         return 'Hello From Your Car'
//     }
// }
//
// var greeting = driveCar(function(){
//     return 'Zoom!'
// })
//
// console.log(greeting())
// var msg = greeting()
// document.body.innerHTML = greeting()
//
// // you can nest functions inside functions and use the var in the nested function since its in the parent
// function makeFood(){
//     var lettuce = true
//     function makeTacos(){
//         var cheese = true
//         console.log(lettuce)
//     }
// }
//
// //let scopes itself to its curly brackets and wont be available anywhere else. Var deals with function scoping.
// if ( true === true) {
//     let city = 'Indianapolis'
// }
